<template>
  <Layout>
    <section class="section">
      <h2>Passwort ist erfolgreich geändert</h2>
      <p>
        <g-link to="/kurs/">Zum Kurs</g-link>
        oder
        <g-link href="/">zur Startseite.</g-link>
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
        href: "https://so-kommunizieren.ch/passwort-geaendert",
      },
      {
        name: "description",
        content: "Wir haben dir den Passwortlink per E-Mail zugesendet.",
      },
      { name: "robots", content: "noindex" },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "Passwort geändert",
  },
};
</script>
