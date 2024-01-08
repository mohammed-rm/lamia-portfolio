export default {
  name: 'badges',
  type: 'document',
  title: 'Section Badges',
  fields: [
    {name: 'title', type: 'string'},
    {
      name: 'header',
      type: 'string',
      title: 'Texte descriptif',
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Liste de keywords',
    },
    {
      name: 'badgeIcon',
      type: 'image',
      title: 'Badge',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Lien Git',
    },
  ],
}
