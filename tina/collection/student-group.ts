import { Collection } from "tinacms"

export const StudentGroup: Collection = {
  label: "Student Group",
  name: "studentGroup",
  path: "content/studentGroup",
  format: "md",
  ui: {
    router: (props) => {
      return `groups/${props.document._sys.filename}`
    },
  },
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Stamp",
      name: "stamp",
    },

    {
      label: 'Students',
      name: 'students',
      type: 'object',
      list: true,
      ui: {
        itemProps(item) {
          return { label: item.student }
        },
      },
      fields: [
        {
          label: 'Student',
          name: 'student',
          type: 'reference',
          collections: ['student'],
        }
      ]
    },
  ]
}