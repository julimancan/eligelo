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
            <ul className="list">
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
            <ul className="list">
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
            <ul className="list services">
              {ourServices.name.map((service) => (
                <li className="service" key={service._key}>

                  {/* TODO: img */}
                  <h3 className="title-card">{service.text}</h3>
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
    font-size: 1.5rem;
    line-height: 1.813rem;
  }

  .text {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
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

  ul {
    padding-inline-start: 0;
    li {
      margin-bottom: 1.5rem;
    }
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

  .reasons-to-sell {
    padding: 4.5rem var(--space-slides);
    background-color: var(--dark-gray);
    position: relative;
    overflow: hidden;

    .title {
      padding-bottom: 40px;
      text-align: left;
    }

    .title,
    .text {
      color: var(--light-gray);
    }
  }

  .reasons-to-buy {
    padding: 4rem var(--space-slides) 0;
    background-color: var(--dark-blue);
    position: relative;
    overflow: hidden;

    .title {
      padding-bottom: 2.5rem;
      text-align: left;
    }

    .text {
      padding-bottom: 1.5rem;
    }

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

    .title {
      padding-bottom: 2rem;
      text-align: left;
    }

    .title,
    .service {
      color: var(--light-gray);
    }

    .services {
      display: grid;
      gap: 1rem;
      grid-auto-rows: 10.25rem;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 10.25rem), 1fr));

      .service {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 16px 32px rgba(38, 50, 56, 0.08),
          0px 8px 16px rgba(38, 50, 56, 0.09), 0px 4px 8px rgba(38, 50, 56, 0.1),
          0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);

        .image{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .title-card {
          position: absolute;
          font-size: 12px;
          line-height: 15px;
          bottom: 0;
          width: 100%;
          padding: 0.6rem 0.5rem;
        }
        &::before {
          content: "";
          position: absolute;
          height: 60%;
          width: 100%;
          bottom: 0;
          background: linear-gradient(
            360deg,
            rgba(31, 31, 31, 0.9) 35.23%,
            rgba(31, 31, 31, 0) 93.18%
          );
        }
        &:nth-child(odd).service:last-child{
          grid-column: span 2;
        }
      }
    }
  }
`;

export default QuienesSomos;
