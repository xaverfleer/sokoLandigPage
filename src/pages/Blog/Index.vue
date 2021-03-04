<template>
  <Layout>
    <Section class="section">
      <h1>Blog mit Gedanken rund um subjektorientierte Kommunikation</h1>
      <ul class="post-list">
        <li class="post-list__post">
          <g-link to="/blog/gleichwuerdig-oder-entwuerdigend/">
            <h2 class="post-list__content">
              Gleichwürdig oder Erniedrigend?
              <span class="post-list__date-and-author">
                22. Februar 2021 – Eva Fleer</span
              >
            </h2>
          </g-link>
        </li>
      </ul>
    </Section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analytics";

export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/blog/" },
      {
        name: "description",
        content:
          "Blog mit Gedanken rund um die subjektorientierte Kommunikation",
      },
    ],
    title: "Blog",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
