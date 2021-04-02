<template>
  <Layout>
    <section>
      <h1>Passwort ist erfolgreich definiert.</h1>
      <p>
        Du kannst dich jetzt
        <g-link to="/login/">anmelden</g-link>
        und alle Inhalte ansehen.
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
        href: "https://so-kommunizieren.ch/passwort-definiert/",
      },
      {
        name: "description",
        content: "Du hast dein Passwort definiert.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Passwort definiert",
  },
};
</script>
