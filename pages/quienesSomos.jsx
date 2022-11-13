import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import Logo from "../public/logo.svg";
import kisspngCar from "../public/cars/kisspngCar.png";
import Ellipse from "../public/shapes/ellipse.svg";
import F15 from "../public/cars/f15.svg";
import Image from "next/image";

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(
    ["quienesSomosContent"],
    getQuienesSomosContent
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const QuienesSomos = () => {
  const { data: quienesSomosContent } = useQuery(
    ["quienesSomosContent"],
    getQuienesSomosContent
  );

  const { SEO, hero, reasonsToSell, reasonsToBuy, ourServices } = quienesSomosContent;
  console.log({ quienesSomosContent });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledQuienesSomos>
        <Logo className='logo'/>

        <section className="hero">
          {/* <KisspngCar className="hero-image"/> */}
          <picture className="hero-image">
            <Ellipse/>
            <Image src={kisspngCar} alt=''/>
          </picture>
          <h1 className="title">{hero.title}</h1>
          <p className="parraghraf">{hero.text}</p>
        </section>

        <section className="reasons-to-sell">
          <F15 />
          <h2>{reasonsToSell.title}</h2>
          <ul className="reasons">
            {reasonsToSell.reasons.map((reason) => (
              <li key={reason._key} className="reason">
                {reason.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="reasonsToBuy">
          <h2>{reasonsToBuy.title}</h2>
          <h3>{reasonsToBuy.subtitle}</h3>
          <ul className="reasons">
            {reasonsToBuy.reasons.map((reason) => (
              <li key={reason._key} className="reason">
                {reason.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="ourServices">
          <h2>{ourServices.title}</h2>
          <ul>
            {ourServices.name.map(service => (
              <li className="service" key={service._key}>
                {/* TODO: img */}
                <h3>{service.text}</h3>
              </li>
            ))}
          </ul>
        </section>
      </StyledQuienesSomos>
    </>
  );
};

const StyledQuienesSomos = styled.main`
  padding: var(--space-slides);
  padding-top: 3rem;
  background-color: white;
  color: black;

  .logo{
    margin: 1rem auto;
  }

  .hero{
    .hero-image{
      position: relative;
      height: fit-content;
      svg{
        position: absolute;
        background-color: aliceblue;
      }
      img{
        width: 100%;
        height: 100%;
        z-index: 0;
      }
    }
  }

`;

export default QuienesSomos;
