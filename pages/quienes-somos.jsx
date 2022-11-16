import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import Logo from "../public/logo.svg";
import Ellipse from "../public/shapes/ellipse.svg";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ weight: "variable" });

export const getStaticProps = async () => {
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
  console.log({ quienesSomosContent });

  const { SEO, hero, reasonsToSell, reasonsToBuy, ourServices } =
    quienesSomosContent;

  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledQuienesSomos className={inter.className}>
        <Logo className="logo" />

        <section className="hero">
          <picture className="hero-image">
            <Ellipse className="ellipse" />
            <Image
              src={"/vehicles/car-mechanics.webp"}
              className="image"
              alt="car mechanics"
              width={"303"}
              height="223"
            />
          </picture>
          <h1 className="title">{hero.title}</h1>
          <p className="text">{hero.text}</p>
        </section>

        <section className="reasons-to-sell">
          <Image
              src={"/backgrounds/street.webp"}
              className="background"
              alt="street background"
              width={"815"}
              height="850"
            />
          <section className="content">
            <Image
              src={"/vehicles/red-pick-up.webp"}
              className="car-svg"
              alt="red pickup"
              width={"303"}
              height="165"
            />

            <h2 className="title">{reasonsToSell.title}</h2>
            <ul className="list">
              {reasonsToSell.reasons.map((reason, index) => (
                <li key={index} className="reason text">
                  <Image
                    src={reason.icon}
                    width="40"
                    height="40"
                    alt={reason.text}
                  />
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="reasons-to-buy">
          <Image
              src={"/backgrounds/street.webp"}
              className="background"
              alt="street background"
              width={"815"}
              height="850"
            />

          <section className="content">
            <Image
              src={"/vehicles/white-suv.webp"}
              className="car-svg"
              alt="white suv"
              width={"303"}
              height="165"
            />

            <h2 className="title">{reasonsToBuy.title}</h2>
            <h3 className="text">{reasonsToBuy.subtitle}</h3>
            <ul className="list">
              {reasonsToBuy.reasons.map((reason, index) => (
                <li key={index} className="reason text">
                  <Image
                    src={reason.icon}
                    width="40"
                    height="40"
                    alt={reason.text}
                  />
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="our-services">
          <Image
              src={"/backgrounds/street.webp"}
              className="background"
              alt="street background"
              width={"815"}
              height="850"
            />


          <section className="content">
            <h2 className="title">{ourServices.title}</h2>
            <ul className="list services">
              {ourServices.services.map((service, index) => (
                <li className="service" key={index}>
                  <h3 className="title-card">{service.text}</h3>
                  <Image
                    src={service.image.url}
                    width={service.image.width}
                    height={service.image.height}
                    alt={service.image.alt}
                  />
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
  padding: 0 !important;
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

  .car-svg {
    width: 90%;
    margin: 0 auto;
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
      padding: 2.5rem 0;
      text-align: left;
    }

    .title,
    .text {
      color: var(--light-gray);
    }
    .list {
      li {
        display: flex;
        gap: 1rem;
      }
    }
  }

  .reasons-to-buy {
    padding: 4rem var(--space-slides) 0;
    background-color: var(--primary-blue);
    position: relative;
    overflow: hidden;

    .title {
      padding: 2.5rem 0;
      text-align: left;
    }

    h3.text {
      padding-bottom: 1.5rem;
    }

    .title,
    .text {
      color: var(--light-gray);
    }
    .list {
      li {
        display: flex;
        gap: 1rem;
      }
    }
  }

  .our-services {
    padding: 2rem var(--space-slides) 4rem;
    background-color: var(--primary-blue);
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
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      /* place-content: center; */

      .service {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: var(--shadow);
        background-color: red;
        display: grid;
        /* place-content: center; */
        align-items: end;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
        }

        .title-card {
          position: relative;
          z-index: 2;
          font-size: 12px;
          line-height: 15px;
          width: 100%;
          padding: 0.6rem 0.5rem;
        }
        &::before {
          z-index: 1;
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
        &:nth-child(odd).service:last-child {
          @media (min-width: 370px) {
            grid-column: span 2;
          }
        }
      }
    }
  }
`;

export default QuienesSomos;