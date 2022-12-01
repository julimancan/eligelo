import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import styled from "styled-components";
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
  // TODO the data for the contact information (phone #, horario, etc) is in the siteSettings
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);

  const { data: pageContent } = useQuery(["vendeContent"], getVendeContent);

  const { SEO, contact, paymentOptions, appointments, mechanic, rest } =
    pageContent;
  console.log({ pageContent, siteSettings });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledVende>
        <Logo className="logo" />
        <section className="hero">
          <h1>
            {pageContent.hero.blackText}{" "}
            <span className="title">{pageContent.hero.blueText}</span>
          </h1>
        </section>

        <ArticleLayout image={contact.image}>
          <section className="article-content dark">
            <h2 className="title">{contact.title}</h2>
            <p>{contact.subtitle}</p>
            <ContactLabels
              email={siteSettings.email}
              horario={siteSettings.horario}
              celular={siteSettings.celular}
            />
          </section>
        </ArticleLayout>

        <ArticleLayout image={paymentOptions.image} className="left">
          <section className="article-content blue">
            <h2 className="title">{paymentOptions.title}</h2>
            <p>{paymentOptions.subtitle}</p>
            {/* TODO: items */}
          </section>
        </ArticleLayout>

        <ArticleLayout image={appointments.image}>
          <section className="article-content dark">
            <h2 className="title">{appointments.title}</h2>
            <p>{appointments.subtitle}</p>
            {/* TODO: items */}
          </section>
        </ArticleLayout>

        <ArticleLayout image={mechanic.image} className="left">
          <section className="article-content blue">
            <h2 className="title">{mechanic.title}</h2>
            <p>{mechanic.subtitle}</p>
            {/* TODO: items */}
          </section>
        </ArticleLayout>

        <ArticleLayout image={rest.image} >
          <section className="article-content dark">
            <h2 className="title">{rest.title}</h2>
            <p>{rest.subtitle}</p>
            {/* TODO: items */}
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

  @media (min-width: 900px) {
    .logo {
      display: none;
    }
  }
`;

export default Vende;
