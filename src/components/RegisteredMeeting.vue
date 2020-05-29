<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Anmeldung erfolgreich</h2>
        <p>Vielen Dank.</p>
        <p>
          Wir freuen uns auf das Online-Meeting am Freitag. Falls du kurzfristig
          verhindert bist, gib uns doch bitte per E-Mail oder Whatsapp bescheid.
        </p>
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
    document.title = `Anmeldung erfolgreich | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
