export default {
  name: 'aboutParagraph',
  type: 'document',
  title: 'Section Qui suis je ?',
  fields: [
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
