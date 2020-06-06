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
        <h2>Ausloggen</h2>
        <p>Bitte warten.</p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import stateManagement from "../stateManagement";

export default {
  components: { Footer, Header },
  created() {
    document.title = `Ausloggen | so* kommunizieren`;

    stateManagement.updateSession(null);
    this.$router.push(this.$root.appData.routes.loggedOut.to);
  },
};
</script>
