export default {
  name: 'model',
  title: 'Modelo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'brand',
      title: 'Marca',
      type: 'reference',
      to: [{ type: 'brand' }],
    },
  ],
}