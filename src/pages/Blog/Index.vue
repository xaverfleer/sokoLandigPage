<template>
  <Layout>
    <Section class="section">
      <h1>Der Blog rund um die <em>subjektorientierte</em> Kommunikation</h1>
      <ul class="post-list">
        <li>
          <g-link
            class="post-list__post"
            to="/blog/gedankenexperiment-gastfamilie/"
          >
            <g-image class="post-list__img" src="~/assets/imgs/Schimpfen.jpg" />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Ignorieren, Schimpfen, Strafen, Erpressen... Warum herkömmliche
                Erziehungsmethoden unseren Kindern schaden.
                <div class="post-list__date-and-author">
                  06. März 2021 – Eva Fleer
                </div>
              </h2>
              Herkömmliche Erziehungsmethoden zielen oft vor allem darauf ab,
              kindliches Verhalten zu steuern und zu kontrollieren. Das schadet
              der gesunden psychischen, kognitiven und sozialen Entwicklung
              unserer Kinder.
            </div>
          </g-link>
        </li>
      </ul>
      <ul class="post-list">
        <li>
          <g-link
            class="post-list__post"
            to="/blog/gleichwuerdig-oder-entwuerdigend/"
          >
            <g-image
              class="post-list__img"
              src="~/assets/imgs/gleichwuerdig-vs-entwuerdigend.png"
            />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Gleichwürdig oder entwürdigend?
                <div class="post-list__date-and-author">
                  22. Februar 2021 – Eva Fleer
                </div>
              </h2>
              Eine gleichwürdige Sprache stärkt Kinder, eine entwürdigende
              Sprache schwächt sie. Was ist der Unterschied? Sieben konkrete
              Beispiele!
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
