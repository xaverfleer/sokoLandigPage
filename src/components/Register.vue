<template>
  <div class="page">
    <Header :routes="registerData.routes" />
    <main>
      <section class="section section--subscription" id="subscription">
        <div class="section__subsection">
          <h2 class="section__header">Konto erstellen</h2>
          <RegisterForm />
        </div>
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
  computed: {
    registerData() {
      return this.$root.appData.register;
    },
  },
  created() {
    document.title = `Konto erstellen | so* kommunizieren`;
  },
};
</script>

<style scoped></style>
