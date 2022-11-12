import siteSettings from "../schemas/siteSettings";
import { MdWeb } from "react-icons/md";

import homepage from "../schemas/pages/homepage";
import quienesSomos from "../schemas/pages/quienesSomos";
import brand from "../schemas/documents/brand";
import model from "../schemas/documents/model";
import featuredAds from "../schemas/pages/featuredAds";

export default (S, context) => {
  const siteSettingsListItem = S.listItem()
    .title(siteSettings.title)
    .icon(siteSettings.icon)
    .child(
      S.editor()
        .id(siteSettings.name)
        .schemaType(siteSettings.name)
        .documentId(siteSettings.name)
    );

  const homepageItem = S.listItem()
    .title(homepage.title)
    .icon(homepage.icon)
    .child(S.editor().schemaType(homepage.name).id(homepage.name));

  const quienesSomosItem = S.listItem()
    .title(quienesSomos.title)
    .icon(quienesSomos.icon)
    .child(S.editor().schemaType(quienesSomos.name).id(quienesSomos.name));

  const featuredAdsItem = S.listItem()
    .title(featuredAds.title)
    .icon(featuredAds.icon)
    .child(S.editor().schemaType(featuredAds.name).id(featuredAds.name));

  const pages = S.listItem()
    .title("Páginas")
    .icon(MdWeb)
    .child(S.list().title("Páginas").items([homepageItem, quienesSomosItem, featuredAdsItem]));

  const hiddenDocTypes = (listItem) => {
    return ![
      siteSettings.name,
      homepage.name,
      quienesSomos.name,
      brand.name,
      model.name,
      featuredAds.name
    ].includes(listItem.getId());
  };

  return S.list()
    .title("Contenido")
    .items([
      siteSettingsListItem,
      S.divider(),
      pages,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
