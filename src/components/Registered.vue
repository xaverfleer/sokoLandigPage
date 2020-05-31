<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto ist erfolgreich erstellt</h2>
        <p>Vielen Dank.</p>
        <p>
          Wir haben dir per E-Mail einen Link gesendet. Bitte bestätige deine
          E-Mail-Adresse mit dem gesendeten Link.
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
    document.title = `Konto bestätiet | so* kommunizieren`;
  },
};
</script>
