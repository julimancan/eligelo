import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Link from "next/link";
import { getSiteSettings } from "../../../sanity/queries/siteSettings";
import Seo from "../header/Seo";
import ContactLabels from "./ContactLabels";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Youtube from "../../../public/icons/youtube.svg";
import Instagram from "../../../public/icons/instagram.svg";

import footerBack from "../../../public/backgrounds/footer-back.webp";
import Image from "next/image";

const Footer = () => {
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);

  console.log({ siteSettings });

  const { SEO } = siteSettings;

  // TODO El link a preguntas frecuentes debe ir a /preguntas-frecuentes
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledFooter>
        <Image
          src={footerBack}
          alt="footer-background"
          className="footer-back"
          width={825}
          height={301}
        />

        <div className="content">
          <section className="information">
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
          <section className="preguntas-frecuentes">
            <h3 className="text-preguntas">
              {siteSettings.footerTitle}
              <br />
              <Link href="/preguntas-frecuentes">
                {siteSettings.footerFaqLink}
              </Link>
            </h3>
          </section>
          <section className="copyright">
            <p>Todos los derechos reservados 2022.</p>
          </section>
        </div>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--dark-gray);
  padding: 2.5rem 1rem 1.5rem;
  color: white;
  position: relative;
  overflow-x: hidden;

  .footer-back {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: max-content;
  }
  .content {
    position: sticky;
  }

  .information {
    display: flex;
    flex-direction: column;
  }

  .social-media {
    border-bottom: 0.5px solid var(--light-gray);
    .links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 0;
      svg {
        min-width: min-content;
      }
    }
  }

  .contact .titleContact {
    padding-top: 1.5rem;
  }

  .preguntas-frecuentes .text-preguntas {
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 0.5px solid var(--light-gray);
  }

  .copyright {
    padding-top: 1.5rem;
    text-align: center;
  }

  @media (min-width: 900px) {
    padding: 3rem 2.5rem 2rem;
    .information {
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    .social-media {
      border: none;
      align-self: flex-end;
      width: 50%;
      display: grid;
      place-content: center;

      .linksTitle {
        font-size: 24px;
        line-height: 29px;
      }

      .links {
        justify-content: center;
        gap: 4rem;
      }
    }
    .preguntas-frecuentes .text-preguntas {
      border: none;
      padding: 3.2rem 0 0;
    }
  }
`;

export default Footer;
