import { useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../../../sanity/queries/siteSettings";
import Nav from "./Nav";
import Seo from "./Seo";

const Header = () => {
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);
  if (!siteSettings) return;
  // console.log({ siteSettings });
  return (
    <>
      <Seo
        title={siteSettings.SEO.title}
        description={siteSettings.SEO.description}
        pageBgColor={"white"}
        // siteUrl={siteUrl}
      />
      <Nav/>
    </>
  );
};

export default Header;
