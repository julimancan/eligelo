import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getSiteSettings } from "../../sanity/queries/siteSettings";
import Seo from "./header/Seo";

const Footer = () => {
  const {data: siteSettings} = useQuery(["siteSettings"], getSiteSettings)

  console.log({siteSettings})

  const {SEO} = siteSettings
  
  // TODO El link a preguntas frecuentes debe ir a /preguntas-frecuentes
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledFooter>
        <section>
          <div>contacto</div>
          <div>redes</div>
        </section>
        <section>
          preguntas
        </section>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background-color: var(--dark-gray);
  color: white

`;

export default Footer;