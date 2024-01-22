export default {
  name: 'volunteering',
  type: 'document',
  title: 'Section Bénévolat',
  initialValue: {
    title: 'Contenu bénévolat',
  },
  fields: [
    {name: 'title', type: 'string', readOnly: true},
    {
      name: 'text',
      type: 'text',
      title: 'Pragraphe descriptif',
    },
    {name: 'coloredPhrases', type: 'array', of: [{type: 'string'}], title: 'Phrases colorées'},
  ],
}
