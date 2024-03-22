export default () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "entity-notes": {
    enabled: true,
  },
});
// force re-deploy 3
