<template>
  <Layout>
    <section class="section">
      <h2>Konto ist nicht bestätigt</h2>
      <p>
        Das Konto konnte leider nicht bestätigt werden. Bitte erneut versuchen.
        Bei wiederholtem Fehlschlagen, kontaktiere uns bitte unter
        <a href="mailto:kurs@so-kommunizieren.ch" rel="nofollow"
          >kurs@so‑kommunizieren.ch</a
        >
        oder
        <a href="tel:+41774466505" rel="nofollow">+41 77 44 66 505</a>.
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
        href: "https://so-kommunizieren.ch/email-nicht-bestaetigt/",
      },
      {
        name: "description",
        content: "E-Mailadresse konnte nicht bestätigt werden.",
      },
      { name: "robots", content: "noindex" },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "E-Mail nicht bestätigt",
  },
};
</script>
