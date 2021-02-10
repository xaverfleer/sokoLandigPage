<template>
  <Layout>
    <section class="section">
      <h2>E-Mailadresse bestätigen</h2>
      <p>
        Wir haben dein Konto erfolgreich erstellt und dir per E-Mail einen Link
        gesendet. Bitte bestätige deine E-Mail-Adresse mit dem gesendeten Link.
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
        href: "https://so-kommunizieren.ch/email-bestaetigen/",
      },
      {
        name: "description",
        content: "Konto erstellt. Bitte E-Mailadresse bestätigen",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "E-Mailadresse bestätigen",
  },
};
</script>
