<template>
  <div class="page">
    <Header :routes="loginData.routes" />
    <main>
      <section class="section section--subscription" id="subscription">
        <div class="section__subsection">
          <h2 class="section__header">Anmelden</h2>
          <LoginForm />
        </div>
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
  computed: {
    loginData() {
      return this.$root.appData.login;
    },
  },
  created() {
    document.title = `Anmelden | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
