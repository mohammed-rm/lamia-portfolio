export default {
  name: 'blog',
  type: 'document',
  title: 'Section Blog',
  initialValue: {
    title: 'Contenu du blog',
  },
  fields: [
    {name: 'title', type: 'string', readOnly: true},
    {
      name: 'text',
      type: 'text',
      title: 'Paragraphe descriptif',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Lien du blog',
    },
  ],
}
