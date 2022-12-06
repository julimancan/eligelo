import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import Logo from "../public/logo.svg";
import Ellipse from "../public/shapes/ellipse.svg";
import Image from "next/image";
import { Inter } from "@next/font/google";
import LocalPictureComponent from "../components/LocalPictureComponent";
import ArticleLayout from "../components/ArticleLayout";

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

            <LocalPictureComponent
              smallSrc={"/vehicles/car-mechanics.webp"}
              defaultSrc={"/vehicles/car-mechanics-desktop.webp"}
              largeSrc={"/vehicles/car-mechanics-desktop.webp"}
              alt="car mechanics"
              width={"557"}
              height="411"
              className="image"
            />
          </picture>
          <section className="content">
            <h1 className="title">{hero.title}</h1>
            <p className="text">{hero.text}</p>
          </section>
        </section>

        <section className="reasons-to-sell section-reasons">
          <Image
            src={"/backgrounds/street.webp"}
            className="background"
            alt="street background"
            width={"815"}
            height="850"
          />
          <section className="content">
            <LocalPictureComponent
              smallSrc={"/vehicles/red-pick-up.webp"}
              defaultSrc={"/vehicles/red-pickup-desktop.webp"}
              alt="red pickup"
              width={"696"}
              height="379"
              smScreenMaxWidth="(max-width: 900px)"
              lgScreenMaxWidth="(max-width: 901px)"
            />
            <section>
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
        </section>

        <section className="reasons-to-buy section-reasons">
          <Image
            src={"/backgrounds/street.webp"}
            className="background"
            alt="street background"
            width={"815"}
            height="850"
          />

          <section className="content">
            <LocalPictureComponent
              defaultSrc={"/vehicles/white-suv-desktop.webp"}
              smallSrc={"/vehicles/white-suv.webp"}
              alt="white suv"
              width={"303"}
              height="165"
            />
            <section>
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
        </section>

        <section className="our-services">
          <Image
            src={"/backgrounds/street.webp"}
            className="background"
            alt="street background"

            layout="fill"
            objectFit="contain"
          />

          <section className="content">
            <h2 className="title">{ourServices.title}</h2>
            <ul className="list services">
              {ourServices.services.map((service, index) => (
                <li className="service" key={index}>
                  <ArticleLayout
                    image={service.image}
                    className={index % 2 == 0 ? "" : "left"}
                    maxHeight={"auto"}
                  >
                    <section className="service-content">
                      <h3 className="title-card">{service.text}</h3>
                    </section>
                  </ArticleLayout>
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

  .background {
    position: absolute;
    height: max-content;
    object-fit: cover;
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

    .title {
      text-align: center;
    }

    .hero-image {
      position: sticky;
      height: fit-content;
      width: fit-content;
      display: grid;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
      .ellipse {
        position: absolute;
        left: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        transform: translateX(-50%);
        z-index: -1;
      }
      .image {
        height: fit-content;
        margin: 0 auto;
        width: 60%;
        max-width: 303;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .title,
    .text {
      color: var(--gray);
    }
  }

  .section-reasons {
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
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      picture {
        min-height: 100%;
        width: fit-content;
        img {
          width: 100vw;
          height: max-content;
        }
      }
    }
  }

  .reasons-to-sell {
    .content {
      gap: 10%;
    }
  }
  .reasons-to-buy {
    background-color: var(--primary-blue);

    .content {
      picture {
        img {
          transform: scaleX(-1);
        }
      }
    }
  }

  .our-services {
    padding: 2rem 0 4rem;
    background-color: var(--dark-gray);
    position: relative;
    overflow: hidden;

    .background {
      height: 100%;
    }

    .title {
      padding-bottom: 2rem;
      text-align: left;
    }

    .title,
    .service {
      color: var(--light-gray);
    }

    .services {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .service {
        .service-content{
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    }
  }

  @media (min-width: 900px) {
    .title {
      font-size: 48px;
      line-height: 58px;
    }
    .logo {
      display: none;
    }

    .background {
      width: 100%;
      height: max-content;
      translate: 0 -50%;
    }

    .hero {
      flex-direction: row;
      .hero-image {
        width: 50%;
        .ellipse {
          width: 100%;
          height: 100%;
          top: 45%;
          transform: translate(-50%, -50%);
        }
        .image {
          width: 80%;
          height: max-content;
        }
      }
      .content {
        align-self: center;
        width: 50%;
        padding: 1rem;
      }
    }

    .section-reasons {
      padding-left: 0;

      .content {
        flex-direction: row;
        align-self: center;
        section {
          padding-right: 7%;
          width: 50%;
        }
        picture {
          width: 50%;
          img {
            width: 100%;
          }
        }
      }
    }

    .reasons-to-buy {
      padding-left: 7%;
      .content {
        flex-direction: row-reverse;
        picture {
          img {
            transform: scaleX(1);
          }
        }
      }
    }
  }
`;

export default QuienesSomos;
