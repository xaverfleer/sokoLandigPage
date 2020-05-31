<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Anmelden</h2>
        <LoginForm />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import LoginForm from "./LoginForm.vue";

export default {
  components: {
    Footer,
    Header,
    LoginForm,
  },
  created() {
    document.title = `Anmelden | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
