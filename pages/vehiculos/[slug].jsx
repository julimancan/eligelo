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

import { Inter } from "@next/font/google";
import ProductCard from "../../components/ProductCard";

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
        <section className="image-slider">
          <picture className="image">
            <Image
              src={vehicleInfo.images[0].url}
              width={vehicleInfo.images[0].width}
              height={vehicleInfo.images[0].height}
              alt={vehicleInfo.images[0].alt || 'hola'}
            />
          </picture>
        </section>

        <section className="title-price">
          <h1>{vehicleInfo.brand.name} - {vehicleInfo.model.name}</h1>
          <h2>$ {vehicleInfo.price.toLocaleString("es-ES")} COP
          </h2>
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
          <sections className="vehiculo-list">
            {/* Vehiculos similiares array */}
            <ProductCard
              key={`${vehicleInfo.brand.name}}`}
              product={vehicleInfo}
            />
            <ProductCard
              key={`${vehicleInfo.brand.name}3`}
              product={vehicleInfo}
            />
            <ProductCard
              key={`${vehicleInfo.brand.name}2`}
              product={vehicleInfo}
            />
            <ProductCard
              key={`${vehicleInfo.brand.name}1`}
              product={vehicleInfo}
            />
          </sections>
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
  
  .content-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .image-slider{
      display: grid;
      padding: 1rem;
      place-content: center;
      background-color: var(--primary-blue);

      /* .image img{
        width: 100vw;
        height: max-content;
        object-fit: cover;
      } */
    }

    .title-price{
      background-color: var(--primary-blue);
      color: white;
      display: flex;
      flex-direction: column;
      gap: .75rem;
      padding: 1rem 1rem 3.5rem;
      h1{
        font-weight: 400;
      }
      h2{
        font-size: 24px;
        line-height: 19.5px;
      }
    }

    .detalles{
      padding: 3.1rem 1rem 2.6rem;
    }
  
    .contact{
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
      .btn-whatsapp{
        background-color: #25D366;
        width: 100%;
      }
    }

    .vehiculos-similares{

    }

  }


  @media (min-width: 900px){
    
    .content-grid{
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(2,auto);
      .image-slider{
        grid-column: 1 / 8;
        grid-row: span 2;
      }
      .title-price{
        grid-column: 8 / 13;
      }
      .contact{
        background-color: var(--primary-blue);
        grid-column: 8 / 13;
        grid-row: 2 / 3;
      }
      .detalles{
        grid-column: 1 / 7;
      }
    }

  }

`

export default VehiclePage;
