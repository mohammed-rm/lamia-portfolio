export default {
  name: 'socials',
  type: 'document',
  title: 'Réseaux sociaux',
  fields: [
    {
      name: 'linkedin',
      type: 'object',
      fields: [
        {
          name: 'link',
          type: 'url',
          title: 'Lien',
        },
        {
          name: 'icon',
          type: 'image',
          title: 'Icon',
        },
      ],
    },
    {
      name: 'github',
      type: 'object',
      fields: [
        {
          name: 'link',
          type: 'url',
          title: 'Lien',
        },
        {
          name: 'icon',
          type: 'image',
          title: 'Icon',
        },
      ],
    },
    {
      name: 'gmail',
      type: 'object',
      fields: [
        {
          name: 'link',
          type: 'email',
          title: 'Adresse email',
        },
        {
          name: 'icon',
          type: 'image',
          title: 'Icon',
        },
      ],
    },
  ],
}
