module.exports = {
  siteName: "Gridsome",
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

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
