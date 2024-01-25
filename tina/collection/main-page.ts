import type { Collection } from "tinacms";

const MainPage: Collection = {
  name: "mainPage",
  label: "Main Page",
  path: "content/mainPage",
  format: "md",
  ui: {
    router: (props) => {
      return "/"
    },
    allowedActions: {
      create: false,
      delete: false,
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
          name: "welcomeHero",
          label: "Welcome Hero",
          fields: [
            {
              label: 'Title',
              name: "title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default MainPage;
