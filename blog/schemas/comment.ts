import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Approve',
      name: 'approve',
      type: 'boolean',
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      type: 'text',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      //to is suppose to be an array
      //to: [{ type: 'post' }]
      to: {type: 'post'},
    }),
  ],
})
