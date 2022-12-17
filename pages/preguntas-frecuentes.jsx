import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Seo from "../components/layout/header/Seo";
import { getFaqContent } from "../sanity/queries/pages/preguntasFrecuentes";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "../public/logo.svg";
import DropdownArrow from "../components/Resultados/DropdownArrow";

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
  console.log({ faqContent });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledPreguntasFrecuentes>
        <Logo className="logo" />
        <h1 className="title">{faqContent.titulo}</h1>

        <ul className="list-preguntas">
          {
            preguntas.map(pre => (
              <li className="item-pregunta" key={pre.pregunta}>
                <h2 className="pregunta">{pre.pregunta}</h2>
                <p className="respuesta">{pre.respuesta}</p>
                <DropdownArrow isOpen={false}/>
                
              </li>
            ))
          }
        </ul>


      </StyledPreguntasFrecuentes>
    </>
  );
};

const StyledPreguntasFrecuentes = styled.main`
  .logo,
  .title {
    margin: 1rem auto;
    width: fit-content;
  }

  .item-pregunta{
    position: relative;
    width: 50%;
    div{
      top: 0;
      background-color: var(--primary-blue);
      &::after{
        transform: translate(0,-5px);
      background-color: var(--primary-blue);
      }
    }
  }

  @media (min-width: 900px) {
    .logo {
      display: none;
    }
    .title {
      font-size: 48px;
      line-height: 58px;
    }
  }
`;

export default PreguntasFrecuentes;
