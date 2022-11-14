import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import Logo from "../public/logo.svg";
import KisspngCar from "../public/cars/kisspngCar.svg";
import Ellipse from "../public/shapes/ellipse.svg";

import Street from "../public/backgrounds/street.svg";
import F15 from "../public/cars/f15.svg";
import Toyota from "../public/cars/toyota.svg";

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

  const { SEO, hero, reasonsToSell, reasonsToBuy, ourServices } =
    quienesSomosContent;
  console.log({ quienesSomosContent });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledQuienesSomos>
        <Logo className="logo" />

        <section className="hero">
          <picture className="hero-image">
            <Ellipse className="ellipse" />
            <KisspngCar className="image" />
          </picture>
          <h1 className="title">{hero.title}</h1>
          <p className="text">{hero.text}</p>
        </section>

        <section className="reasons-to-sell">
          <Street className="background" />

          <section className="content">
            <F15 />
            <h2 className="title">{reasonsToSell.title}</h2>
            <ul className="reasons">
              {reasonsToSell.reasons.map((reason) => (
                <li key={reason._key} className="reason text">
                  {reason.text}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="reasons-to-buy">
          <Street className="background" />
          
          <section className="content">
            <Toyota />
            <h2 className="title">{reasonsToBuy.title}</h2>
            <h3 className="text">{reasonsToBuy.subtitle}</h3>
            <ul className="reasons">
              {reasonsToBuy.reasons.map((reason) => (
                <li key={reason._key} className="reason text">
                  {reason.text}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="our-services">
          <Street className="background" />

          <section className="content">
            <h2 className="title">{ourServices.title}</h2>
            <ul>
              {ourServices.name.map((service) => (
                <li className="service text" key={service._key}>
                  {/* TODO: img */}
                  <h3>{service.text}</h3>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </StyledQuienesSomos>
    </>
  );
};

const StyledQuienesSomos = styled.main`
  padding-top: 3rem;
  background-color: white;
  color: black;

  .logo {
    margin: 1rem auto;
  }

  .title {
    // TODO: add variable
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .hero {
    padding: 1rem var(--space-slides) 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .hero-image {
      position: sticky;
      height: fit-content;

      .ellipse {
        position: absolute;
        width: 70%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        z-index: -1;
      }
      .image {
        position: sticky;
      }
    }

    .title,
    .text {
      color: var(--gray);
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.08;
  }

  .content {
    position: sticky;
  }

  .reasons-to-sell {
    padding: 4.5rem var(--space-slides);
    background-color: var(--dark-gray);
    position: relative;
    overflow: hidden;

    

    .title,
    .text {
      color: var(--light-gray);
    }
  }

  .reasons-to-buy {
    padding: 4.5rem var(--space-slides);
    background-color: var(--dark-blue);
    position: relative;
    overflow: hidden;
    .title,
    .text {
      color: var(--light-gray);
    }
  }

  .our-services {
    padding: 2rem var(--space-slides) 4rem;
    background-color: var(--dark-blue);
    position: relative;
    overflow: hidden;
    .title,
    .text {
      color: var(--light-gray);
    }
  }
`;

export default QuienesSomos;
