import type { Collection } from "tinacms";

const Topic: Collection = {
  label: "Class Topics",
  name: "topic",
  path: "content/topics",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "heroImg",
      label: "Hero Image",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    }
  ],
};

export default Topic;
