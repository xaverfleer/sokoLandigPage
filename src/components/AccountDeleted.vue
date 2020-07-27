<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Schade dass du uns verlässt.</h2>
        <p>Dein Konto ist erfolgreich gelöscht.</p>
        <p>
          <router-link :to="$root.appData.routes.block01.to"
            >Zum Kurs</router-link
          >
          oder
          <a href="/index.html">zur Startseite.</a>
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
    document.title = `Konto gelöscht | so* kommunizieren`;
  },
};
</script>
