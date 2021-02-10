<template>
  <Layout>
    <section class="section">
      <h1>Impressum</h1>
      <h2 class="header--left">Fleer & Fleer</h2>
      <p>
        Eva Fleer<br />
        Ritterstrasse 24<br />
        3047 Bremgarten<br />
        eva.fleer@gmail.com
      </p>
      <p>und</p>
      <p>
        Xaver Fleer<br />
        Ritterstrasse 24<br />
        3047 Bremgarten<br />
        xaver.fleer@gmail.com
      </p>
      <p>
        Zurück
        <g-link to="/">zur Startseite</g-link>
      </p>
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";

export default {
  components: { FormVue },
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/impressum" },
      { name: "description", content: "So findest du uns." },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "Impressum",
  },
};
</script>
