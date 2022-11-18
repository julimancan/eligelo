import { useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../../sanity/queries/siteSettings";

const Footer = () => {
  const {data: siteSettings} = useQuery(["siteSettings"], getSiteSettings)

  console.log({siteSettings})

  // TODO El link a preguntas frecuentes debe ir a /preguntas-frecuentes
  return (
    <footer>
      Footer
    </footer>
  );
}

export default Footer;