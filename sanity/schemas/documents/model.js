import { sanityClient } from "../../sanity.server";

export default {
  name: 'model',
  title: 'Modelo',
  type: 'document',
  icon: false,
  validation: (Rule) =>
    Rule.custom((name) => {
      return sanityClient()
        .fetch(`count(*[_type == "model" && name == "${name.name}"])`)
        .then((count) => {
          if (count >= 1) {
            return "Modelo debería ser único";
          } else {
            return true;
          }
        });
    }),
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
  ],
}