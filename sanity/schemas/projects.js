export const projects = {
  name: 'projectsList',
  type: 'document',
  title: 'Section Projets',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Casquette',
    },
    {
      name: 'subCategories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'subCategory'}],
        },
      ],
      title: 'Catégories des projets',
    },
  ],
}

export const subCategory = {
  name: 'subCategory',
  type: 'document',
  title: 'Les catégories des projets',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Catégorie (ie: Mes projets ...)',
    },
    {
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'projects'}],
        },
      ],
      title: 'Projets',
    },
  ],
}

export const projectDetail = {
  name: 'projects',
  type: 'document',
  title: 'Liste de tous les projets',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre (juste pour se repérer)',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description du projet',
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Liste de keywords',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Lien Git',
    },
  ],
}
