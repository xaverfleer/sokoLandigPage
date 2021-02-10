<template>
  <Layout>
    <section class="section">
      <h2>E-mailadresse ist erfolgreich bestätigt</h2>
      <p>
        Wir haben dir per E-Mail einen Link gesendet. Bitte folge diesem Link
        und definiere dein Passwort.
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
        href: "https://so-kommunizieren.ch/email-bestaetigt-link/",
      },
      {
        name: "description",
        content:
          "E-Mailadresse bestätigt. Bitte definiere jetzt dein Passwort.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "E-Mailadresse bestätigt",
  },
};
</script>
