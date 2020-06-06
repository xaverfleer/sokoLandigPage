<template>
  <div class="page">
    <Header
      :routes="
        $root.isLoggedIn
          ? $root.appData.standardNavRoutesLoggedIn
          : $root.appData.standardNavRoutesLoggedOut
      "
    />
    <main>
      <section class="section">
        <h2>Konto ist erfolgreich bestätigt</h2>
        <p>Vielen Dank für die Bestätigung.</p>
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
    document.title = `Konto bestätigt | so* kommunizieren`;
  },
};
</script>
