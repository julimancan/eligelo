import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Details from "../../components/vehiclepage/Details"
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
    <StyledVehiclePage>
      <section className="search">
        <SearchBar/>
      </section>

      <section className="content-grid">

      {/* pictures slider */}
        <picture className="image">
          <Image
            src={vehicleInfo.images[0].url}
            width={vehicleInfo.images[0].width}
            height={vehicleInfo.images[0].height}
            alt={vehicleInfo.images[0].alt}
          />
        </picture>

        <section>
          <h1>{vehicleInfo.brand.name} - {vehicleInfo.model.name}</h1>
          <h2>${vehicleInfo.price}</h2>
        </section>

        <section className="detalles">
          <Details vehicleInfo={vehicleInfo}/>
        </section>

        <section className="contact">
          <h2>Contacta con el vendedor:</h2>
          <Button classNames="btn-whatsapp">
            <span>Whatsapp</span>
          </Button>
        </section>

        <section className="vehiculos-similares">
          <h2>Vehículos similares:</h2>
        </section>

      </section>
        
      
    </StyledVehiclePage>
  );
};

const StyledVehiclePage = styled.main`
  padding: 0 !important;
  
  .search{ 
    background-color: var(--primary-blue);
    padding: 1rem;
    form{
      filter: none;
    }
  }

  .detalles{
    padding: 1rem;
  }

  .contact{
    padding: 1rem;
    .btn-whatsapp{
      background-color: #25D366;
      width: 100%;
    }
  }

`

export default VehiclePage;
