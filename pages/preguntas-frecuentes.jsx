import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Seo from "../components/layout/header/Seo";
import { getFaqContent } from "../sanity/queries/pages/preguntasFrecuentes";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "../public/logo.svg";
import PreguntaItem from "../components/PreguntaItem";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["faq"], getFaqContent);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PreguntasFrecuentes = () => {
  const { data: faqContent } = useQuery(["faq"], getFaqContent);

  const { SEO, preguntas } = faqContent;

  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledPreguntasFrecuentes>
        <Logo className="logo" />
        <h1 className="title">{faqContent.titulo}</h1>

        <ul className="list-preguntas">
          {preguntas.map((preguntaItem) => (
            <PreguntaItem key={preguntaItem.pregunta} preguntaObj={preguntaItem} />
          ))}
        </ul>
      </StyledPreguntasFrecuentes>
    </>
  );
};

const StyledPreguntasFrecuentes = styled.main`
  padding: 0  0 4.5rem;

  .logo,
  .title {
    margin: 1rem auto;
    width: fit-content;
  }

  .list-preguntas {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 900px) {
    .logo {
      display: none;
    }
    .title {
      padding: 4rem 0 1.5rem ;
      font-size: 48px;
      line-height: 58px;
    }
    .list-preguntas{
      padding: 1rem 7%;
    }
  }
`;

export default PreguntasFrecuentes;
