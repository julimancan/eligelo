import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Details from "../../components/vehiclepage/Details";
import {
  getAllVehiclePathsAndNames,
  getAllVehicleSlugs,
  getVehicleInfo,
} from "../../sanity/queries/pages/vehiculoIndividual";
import { getSiteSettings } from "../../sanity/queries/siteSettings";

import { Inter } from "@next/font/google";
import ProductSlider from "../../components/catalogo/ProductSlider";
import ImageSlider from "../../components/vehiclepage/ImageSlider";

const inter = Inter({ weight: "variable" });

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
    <StyledVehiclePage className={inter.className}>
      <section className="search">
        <SearchBar/>
      </section>

      <section className="content-grid">
        {/* pictures slider */}
        <section className="image-gallery">
          <ImageSlider images={vehicleInfo.images} />
        </section>

        <section className="title-price">
          <h1>
            {vehicleInfo.brand.name} - {vehicleInfo.model.name}
          </h1>
          <h2>$ {vehicleInfo.price.toLocaleString("es-ES")} COP</h2>
        </section>

        <section className="detalles">
          <Details vehicleInfo={vehicleInfo} />
        </section>

        <section className="contact-section">
          <h2>Contacta con el vendedor:</h2>
          <Button classNames="btn-whatsapp">
            <span>Whatsapp</span>
          </Button>
        </section>

        <section className="vehiculos-similares">
          <ProductSlider
            className="vehiculos-slider"
            products={[vehicleInfo, vehicleInfo, vehicleInfo]}
            productName="Vehículos similares: "
          />
        </section>
      </section>
    </StyledVehiclePage>
  );
};

const StyledVehiclePage = styled.main`
  padding: 0 !important;

  .search {
    background-color: var(--primary-blue);
    padding: 1rem;
    form {
      filter: none;
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .image-gallery {
      position: relative;
      background-color: var(--primary-blue);
      padding: 1rem;
      height: 55vw;
      width: 100%;
      aspect-ratio: calc(16 / 9);
    }

    .title-price {
      background-color: var(--primary-blue);
      color: white;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem 1rem 3.5rem;
      h1 {
        font-weight: 400;
      }
      h2 {
        font-size: 24px;
        line-height: 19.5px;
      }
    }

    .detalles {
      padding: 3.1rem 1rem 2.6rem;
    }

    .contact-section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .btn-whatsapp {
        background-color: #25d366;
        width: 100%;
      }
    }

    .vehiculos-similares {
      padding: 1rem;
      padding-right: 0;
      overflow-x: hidden;
      .vehiculos-slider {
        .header-product h3 {
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media (min-width: 900px) {
    .search {
      padding: 2rem 7% 2.5rem;
    }

    .content-grid {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(2, auto);
      .image-gallery {
        padding-bottom: 3.5rem;
        grid-column: 1 / 8;
        grid-row: span 2;
        height: auto;
      }
      .title-price {
        padding-right: 15%;
        grid-column: 8 / 13;
      }
      .contact-section {
        padding-right: 20%;
        background-color: var(--primary-blue);
        color: white;
        grid-column: 8 / 13;
        grid-row: 2 / 3;
      }
      .detalles {
        padding: 5rem 15%;
        grid-column: 1 / 7;
      }
      .vehiculos-similares {
        padding-top: 5rem;
        grid-column: 7 / 13;
        .vehiculos-slider {
          display: grid;
          .header-product {
            margin-bottom: 0;
            h3 {
              font-size: 32px;
              line-height: 24px;
              padding-bottom: 0.75rem;
            }
          }
          .list-products {
            width: auto;
            padding-left: 0;
            padding-right: 0;
            display: grid;
            grid-template-columns: min-content min-content;
            li {
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
`;

export default VehiclePage;
