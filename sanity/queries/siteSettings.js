import { sanityClient } from "../sanity.server";

const siteSettingsItems = `
  SEO,
  slogan,
  email,
  direccion,
  celular,
  linksTitle,
  instagram,
  facebook,
  twitter,
  youtube,
  horario
`;

export const getSiteSettings = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "siteSettings"] {
    ${siteSettingsItems}
  }`);
  return results[0]
}