<template>
  <Layout>
    <section>
      <h1>Abmelden erfolgreich</h1>
      <p>Du bist erfolgreich abgemeldet.</p>
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
      { name: "canonical", href: "https://so-kommunizieren.ch/abgemeldet/" },
      {
        name: "description",
        content: "Du bist erfolgreich abgemeldet.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Login",
  },
};
</script>
