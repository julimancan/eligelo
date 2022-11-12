import { sanityClient } from "../../sanity.server";
// import { Brand } from "../components/Brand";

// import {useClient} from 'sanity'

export default {
  name: "brand",
  title: "Marca",
  type: "document",
  icon: false,
  validation: (Rule) =>
    Rule.custom((name) => {
      return sanityClient()
        .fetch(`count(*[_type == "brand" && name == "${name.name}"])`)
        .then((count) => {
          if (count >= 1) {
            return "Marca debería ser única";
          } else {
            return true;
          }
        });
    }),

  
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      // components: {
      //   input: Brand
      // },
    },
  ],
};
