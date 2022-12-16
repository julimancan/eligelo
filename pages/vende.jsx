import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import styled from "@emotion/styled";
import ArticleLayout from "../components/ArticleLayout";
import ContactLabels from "../components/layout/footer/ContactLabels";
import Seo from "../components/layout/header/Seo";
import { getVendeContent } from "../sanity/queries/pages/vende";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "/public/logo.svg";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["vendeContent"], getVendeContent);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Vende = () => {
  
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);

  const { data: pageContent } = useQuery(["vendeContent"], getVendeContent);

  const { SEO, contact, paymentOptions, appointments, mechanic, rest } = pageContent;

  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledVende>
        <Logo className="logo" />
        <section className="hero">
          <h1 className="title">
            {pageContent.hero.blackText}{" "}
            <span className="title">{pageContent.hero.blueText}</span>
          </h1>
        </section>

        <ArticleLayout image={contact.image}>
          <section className="article-content dark">
            <h2 className="title">{contact.title}</h2>
            <p>{contact.subtitle}</p>
            <ContactLabels
              className="vende-version"
              email={siteSettings.email}
              horario={siteSettings.horario}
              celular={siteSettings.celular}
            />
          </section>
        </ArticleLayout>

        <ArticleLayout image={paymentOptions.image} className="left">
          <section className="article-content blue">
            <h2 className="title">{paymentOptions.title}</h2>
            <p className="subtitle">{paymentOptions.subtitle}</p>
            <ul className="payment-options">
              {paymentOptions.options.map((option, index) => (
                <li key={index} className="options text">
                  <Image
                    src={option.icon}
                    width="40"
                    height="40"
                    alt={option.name}
                  />
                  <p>{option.name}</p>
                </li>
              ))}
            </ul>
          </section>
        </ArticleLayout>

        <ArticleLayout image={appointments.image}>
          <section className="article-content dark">
            <h2 className="title">{appointments.title}</h2>
            <p className="subtitle">{appointments.subtitle}</p>
          </section>
        </ArticleLayout>

        <ArticleLayout image={mechanic.image} className="left">
          <section className="article-content blue">
            <h2 className="title">{mechanic.title}</h2>
            <p className="subtitle">{mechanic.subtitle}</p>
            <ol className="list">
              {mechanic.recommendations.map((reco, index) => (
                <li key={index} className="reason text">
                  <p>{reco}</p>
                </li>
              ))}
            </ol>
          </section>
        </ArticleLayout>

        <ArticleLayout image={rest.image}>
          <section className="article-content dark">
            <h2 className="title">{rest.title}</h2>
            <p className="subtitle">{rest.subtitle}</p>
          </section>
        </ArticleLayout>
      </StyledVende>
    </>
  );
};

const StyledVende = styled.main`
  padding: 0 !important;

  .logo {
    margin: 0 auto;
  }

  .title {
    padding-bottom: 1rem;
  }
  .subtitle {
    padding-bottom: 2rem;
  }

  ul,
  ol {
    li {
      margin-bottom: 1rem;
    }
  }
  ul {
    padding-inline-start: 0;
  }

  ol {
    padding-inline-start: 1rem;
  }

  .hero {
    padding: 1rem 1rem 2.6rem;
    text-align: center;
    span {
      color: var(--primary-blue);
    }
  }

  .article-content {
    min-height: 406px;
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dark {
    color: var(--light-gray);
    background-color: var(--dark-gray);
  }

  .blue {
    color: var(--light-gray);
    background-color: var(--blue-2);
  }

  .options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      font-weight: 700;
    }
  }

  @media (min-width: 900px) {
    .logo {
      display: none;
    }
    .title {
      font-size: 48px;
      line-height: 58px;
      padding-bottom: 2.5rem;
    }
    .hero {
      padding: 8rem 11%;
    }
    .article-content {
      padding: 0 5.3rem;
    }

    .payment-options{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 1rem;
    }
  }
`;

export default Vende;
