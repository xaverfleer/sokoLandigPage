<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto erstellen</h2>
        <RegisterForm />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  components: {
    Footer,
    Header,
    RegisterForm,
  },
  created() {
    document.title = `Konto erstellen | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
