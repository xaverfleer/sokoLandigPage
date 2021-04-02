<template>
  <Layout>
    <section>
      <h1>Passwort Link versendet</h1>
      <p>
        Wir haben dir den Link, mit dem du dein Passwort zurücksetzen kannst,
        versendet.
      </p>
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
        href: "https://so-kommunizieren.ch/passwort-link-versendet/",
      },
      {
        name: "description",
        content: "Wir haben dir den Passwortlink per E-Mail zugesendet.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Passwort-Link versendet",
  },
};
</script>
