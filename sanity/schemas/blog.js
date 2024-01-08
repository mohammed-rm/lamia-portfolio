export default {
  name: 'blog',
  type: 'document',
  title: 'Section Blog',
  fields: [
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
