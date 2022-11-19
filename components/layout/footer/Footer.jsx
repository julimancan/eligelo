import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getSiteSettings } from "../../../sanity/queries/siteSettings";
import Seo from "../header/Seo";
import ContactLabels from "./ContactLabels";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Youtube from "../../../public/icons/youtube.svg";
import Instagram from "../../../public/icons/instagram.svg";

const Footer = () => {
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);

  console.log({ siteSettings });

  const { SEO } = siteSettings;

  // TODO El link a preguntas frecuentes debe ir a /preguntas-frecuentes
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledFooter>
        <section>
          <section className="social-media">
            <h2 className="linksTitle">{siteSettings.linksTitle}</h2>
            <div className="links">
              <a
                target="_blank"
                href={`https://${siteSettings.twitter}`}
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                target="_blank"
                href={`https://${siteSettings.facebook}`}
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                target="_blank"
                href={`https://${siteSettings.youtube}`}
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
              <a
                target="_blank"
                href={`https://${siteSettings.instagram}`}
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </section>
          <section className="contact">
            <h2 className="titleContact">{siteSettings.titleContact}</h2>
            <ContactLabels
              email={siteSettings.email}
              horario={siteSettings.horario}
              celular={siteSettings.celular}
            />
          </section>
        </section>
        <section>preguntas</section>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--dark-gray);
  color: white;
`;

export default Footer;
