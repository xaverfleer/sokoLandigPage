<template>
  <Layout>
    <section class="section">
      <h1>Abmelden</h1>
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
import stateM8t from "../stateManagement";

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
    stateM8t.updateSession(null);
    this.$router.push("/abgemeldet/");
  },
};
</script>
