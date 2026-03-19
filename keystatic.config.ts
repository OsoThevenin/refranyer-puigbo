import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: { owner: "OsoThevenin", name: "refranyer-puigbo" },
  },
  ui: {
    brand: { name: "Refranyer de Puigbó" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
