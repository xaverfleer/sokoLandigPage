<template>
  <Layout>
    <section class="section">
      <h1>Account ist freigeschaltet.</h1>
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
        href: "https://so-kommunizieren.ch/account-freigeschaltet/",
      },
      {
        name: "description",
        content:
          "Dein Account ist freigeschaltet. Jetzt anmelden und alle Inhalte ansehen.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Passwort definiert",
  },
};
</script>
