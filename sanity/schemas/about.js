export default {
  name: 'aboutParagraph',
  type: 'document',
  title: 'Section Qui suis je ?',
  initialValue: {
    title: 'Contenu qui suis-je ?',
  },
  fields: [
    {name: 'title', type: 'string', readOnly: true},
    {
      name: 'text',
      type: 'text',
      title: 'Paragraphe descriptif',
    },
    {
      name: 'coloredPhrases',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Phrases colorées',
    },
  ],
}
