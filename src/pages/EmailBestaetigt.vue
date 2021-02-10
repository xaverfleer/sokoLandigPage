<template>
  <Layout>
    <section class="section">
      <h2>E-Mail ist erfolgreich bestätigt</h2>
      <p>Vielen Dank für die Bestätigung.</p>
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
        href: "https://so-kommunizieren.ch/email-bestaetigt/",
      },
      {
        name: "description",
        content: "Deine E-Mailadresse ist erfolgreich bestätigt",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "E-Mailadresse bestätigt",
  },
};
</script>
