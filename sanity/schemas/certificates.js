export default {
  name: 'certificates',
  type: 'document',
  title: 'Section Certificats',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Catégorie des certificats',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Pictogramme',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Liste des images des certificats',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'src',
              type: 'image',
              title: 'Image du certificat',
            },
          ],
        },
      ],
    },
  ],
}
