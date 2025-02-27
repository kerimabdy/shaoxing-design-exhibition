import type { Collection } from "tinacms";

const Pages: Collection = {
  name: "pages",
  label: "Pages",
  path: "content/pages",
  format: "md",
  ui: {
    router: (props) => {
      switch (props.document._sys.filename) {
        case "main":
          return "/"
        case "course":
          return "/course"
      }
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      templates: [
        {
          name: "courseIntroduction",
          label: "Course Introduction",
          fields: [
            {
              label: 'Title',
              name: "title",
              type: "string",
            },
            {
              label: 'Description',
              name: "description",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          name: "stamp",
          label: "Animated Stamp",
          fields: [
            {
              label: 'Image',
              name: "image",
              type: "image",
            }
          ],
        },
        {
          name: "videoSection",
          label: "Video Section",
          fields: [
            {
              label: "Videos",
              name: "videos",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.name }
                }
              },
              fields: [
                {
                  type: "string",
                  label: "Name",
                  name: "name",
                },
                {
                  type: "image",
                  label: "Video",
                  name: "video",
                }
              ]
            },
          ]
        }
      ],
    },
  ],
};

export default Pages;
