<template>
  <Layout>
    <Section class="section">
      <h1>Blog mit Gedanken rund um subjektorientierte Kommunikation</h1>
      <ul class="post-list">
        <li>
          <g-link
            class="post-list__post"
            to="/blog/gleichwuerdig-oder-entwuerdigend/"
          >
            <g-image src="~/assets/imgs/gleichwuerdig-vs-entwuerdigend.png" width="400" />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Gleichwürdig oder entwürdigend?
                <span class="post-list__date-and-author">
                  22. Februar 2021 – Eva Fleer</span
                >
              </h2>
              Eine gleichwürdige Sprache stärkt Kinder, eine entwürdigende Sprache schwächt sie. 
              Was ist der Unterschied? Sieben konkrete Beispiele!
            </div>
          </g-link>
        </li>
      </ul>
    </Section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analyticsMethods";

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
