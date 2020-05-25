<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto ist nicht bestätigt</h2>
        <p>
          Das Konto konnte leider nicht besttigt werden. Bitte erneut versuchen.
          Bei wiederholtem Fehlschlagen, kontaktiere uns bitte unter
          <a href="mailto:kurs@so-kommunizieren.ch" rel="nofollow"
            >kurs@so‑kommunizieren.ch</a
          >
          oder
          <a href="tel:+41774466505" rel="nofollow">+41 77 44 66 505</a>.
        </p>
        <p>
          <router-link :to="$root.appData.routes.block01.to"
            >Zum Kurs</router-link
          >
          oder
          <a href="/index.html">zur Startseite</a>
        </p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, Header },
  created() {
    document.title = `Konto nicht bestätiet | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
