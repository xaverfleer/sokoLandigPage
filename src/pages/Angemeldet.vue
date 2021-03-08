<template>
  <Layout>
    <section class="section">
      <h1>Anmeldung erfolgreich</h1>
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
      { name: "canonical", href: "https://so-kommunizieren.ch/angemeldet/" },
      {
        name: "description",
        content: "Du bist erfolgreich angemeldet.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Login",
  },
};
</script>
