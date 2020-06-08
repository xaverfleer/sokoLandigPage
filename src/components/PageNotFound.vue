<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Seite nicht gefunden</h2>
        <p>
          Die gesuchte Seite ist entweder temporär nicht verfügbar, wurde an
          einen anderen Ort verschoben oder existiert nicht mehr.
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
    document.title = `Konto bestätigt | so* kommunizieren`;
  },
};
</script>
