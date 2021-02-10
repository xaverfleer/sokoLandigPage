<template>
  <Layout>
    <section class="section">
      <h2>Abmelden</h2>
      <p>Bitte warten.</p>
      <p>
        <g-link to="/kurs/">Zum Kurs</g-link>
        oder
        <g-link to="/">zur Startseite.</g-link>
      </p>
    </section>
  </Layout>
</template>

<script>
import stateManagement from "../stateManagement";

export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/abmelden/" },
      {
        name: "description",
        content: "Abmelden. Bitte warten.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Abmelden",
  },
  created() {
    stateManagement.updateSession(null);
    this.$router.push("/abgemeldet/");
  },
};
</script>
