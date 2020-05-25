<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto wird bestätigt</h2>
        <p>Bitte warten.</p>
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
    document.title = `Konto bestätien | so* kommunizieren`;

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `.netlify/functions/confirmEmail${location.search}`);
    xhr.send();

    xhr.addEventListener("load", () => {
      location = location.href.split(location.search).join("");
      this.$router.push("/email-confirmed");
    });

    xhr.addEventListener("error", (xhrEventError) => {
      location = location.href.split(location.search).join("");
      this.$router.push("/email-confirm-failed");
    });
  },
};
</script>

<style scoped></style>
