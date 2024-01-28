import type { Collection } from "tinacms";

const Student: Collection = {
  label: "Student",
  name: "student",
  path: "content/students",
  format: "md",
  ui: {
    router: (props) => {
      return `students/${props.document._sys.filename}`
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
      type: "string",
      label: "Students ID",
      name: "studentId",
      required: true,
    },
    {
      type: "image",
      name: "heroImg",
      label: "Image",
    },
    {
      type: "string",
      label: "Self Evaluation",
      name: "selfEvaluation",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Hometown",
      name: "hometown",
    },
    {
      type: "string",
      label: "Phone number",
      name: "phoneNumber",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      label: "Skills",
      name: "skills",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        }
      },
      fields: [
        {
          type: "string",
          label: "label",
          name: "label",
        },
      ]
    },
    {
      label: "Practical Experiences",
      name: "practicalExperiences",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        }
      },
      fields: [
        {
          type: "string",
          label: "label",
          name: "label",
          ui: {
            component: "textarea"
          }
        },

      ]
    },
    {
      label: "Personal Awwards",
      name: "personalAwards",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        }
      },
      fields: [
        {
          type: "string",
          label: "label",
          name: "label",
          ui: {
            component: "textarea"
          }
        },
      ]
    },
    {
      label: "Projects",
      name: "projects",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        },
      },
      fields: [
        {
          type: "string",
          label: "label",
          name: "label",
        },
        {
          label: "Images",
          name: "images",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              console.log(item)
              return { label: item.image }
            },
          },
          fields: [
            {
              type: "image",
              label: "Image",
              name: "image",
            },
          ]
        },
        {
          type: "image",
          label: "Video",
          name: "video",
        },
        {
          type: "image",
          label: "Qr",
          name: "qr",
        },

      ]
    },
  ],
};



export default Student;