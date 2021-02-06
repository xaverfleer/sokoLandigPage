<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Account ist freigeschaltet.</h2>
        <p>
          Du kannst dich jetzt
          <router-link :to="$root.appData.routes.login.to"
            >anmelden</router-link
          >
          und alle Inhalte ansehen.
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
    document.title = `Passwort definiert | so* kommunizieren`;
  },
};
</script>
