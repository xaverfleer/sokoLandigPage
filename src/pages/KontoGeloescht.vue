<template>
  <Layout>
    <section class="section">
      <h2>Schade dass du uns verlässt.</h2>
      <p>Dein Konto ist erfolgreich gelöscht.</p>
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
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/konto-geloescht/",
      },
      {
        name: "description",
        content: "Schade, dass du uns verlässt.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Konto gelöscht",
  },
};
</script>
