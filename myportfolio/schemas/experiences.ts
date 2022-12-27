import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'dutiesResponsibilities',
      title: 'DutiesResponsibilities',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
      options: {
        dateFormat: 'MMM yyyy',
      },
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
      options: {
        dateFormat: 'MMM yyyy',
      },
    }),
    defineField({
      name: 'isCurrentWorking',
      title: 'IsCurrentWorking',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skills'}]}],
    }),
  ],
})
