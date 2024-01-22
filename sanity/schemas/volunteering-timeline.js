export default {
  name: 'volunteering-timeline',
  type: 'document',
  title: 'Timeline Bénévolat',
  fields: [
    {name: 'position', type: 'number', title: 'Position'},
    {name: 'date', type: 'string', title: "Date de l'événement"},
    {name: 'description', type: 'text', title: 'Pragraphe descriptif'},
    {name: 'coloredPhrases', type: 'array', of: [{type: 'string'}], title: 'Phrases colorées'},
  ],
}
