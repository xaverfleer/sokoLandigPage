<template>
  <Layout>
    <section class="section">
      <h2>Anmeldung erfolgreich</h2>
      <p>Du bist erfolgreich angemeldet</p>
      <p>
        <g-link to="/kurs/">Zum Kurs</g-link>
        oder
        <g-link to="/">zur Startseite.</g-link>
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/angemeldet" },
      {
        name: "description",
        content: "Du bist erfolgreich angemeldet.",
      },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "Login",
  },
};
</script>
