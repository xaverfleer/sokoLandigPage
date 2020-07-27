<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Passwort Link versendet</h2>
        <p>
          Wir haben dir den Link, mit dem du dein Passwort zurücksetzen kannst,
          versendet.
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
    if (this.$root.isLoggedIn)
      this.$router.push(this.$root.appData.routes.account.to);
    document.title = `Anmeldung erfolgreich | so* kommunizieren`;
  },
};
</script>
