import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import {
  getAllVehiclePathsAndNames,
  getAllVehicleSlugs,
  getVehicleInfo,
} from "../../sanity/queries/pages/vehiculoIndividual";
import { getSiteSettings } from "../../sanity/queries/siteSettings";

const getAllSlugPaths = async () => {
  const allSlugs = await getAllVehicleSlugs();
  const paths = allSlugs.map(({ slug }) => ({ params: { slug}}));
  return paths;
};

export const getStaticPaths = async () => {
  const paths = await getAllSlugPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { slug } = params;

  await queryClient.prefetchQuery(
    ["allVehiclePaths"],
    getAllVehiclePathsAndNames
  );
  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["vehicleInfo", slug], () => getVehicleInfo(slug))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};

const VehiclePage = ({ slug }) => {

  const {data: vehicleInfo } = useQuery(["vehicleInfo", slug], () => getVehicleInfo(slug))

  console.log({vehicleInfo});
  return (
    <main>
      <h1>{vehicleInfo.brand.name} - {vehicleInfo.model.name}</h1>
    </main>
  );
};

export default VehiclePage;
