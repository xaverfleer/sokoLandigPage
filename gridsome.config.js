module.exports = {
  siteName: "so* kommunizieren",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/**/*.md",
        typeName: "Post",
      },
    },
  ],
  templates: {
    Post: [
      {
        path: "/blog/:title",
        componenent: "~/templates/Post.vue",
      },
    ],
  },
  titleTemplate: "%s | so* kommunizieren",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
