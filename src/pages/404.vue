<template>
  <Layout>
    <section class="section">
      <h2>Seite nicht gefunden</h2>
      <p>
        Die gesuchte Seite ist entweder temporär nicht verfügbar, wurde an einen
        anderen Ort verschoben oder existiert nicht mehr.
      </p>
      <p>
        <g-link to="/kurs/">Zum Kurs</g-link>
        oder
        <g-link to="/">zur Startseite.</g-link>
      </p>
    </section>
  </Layout>
</template>

<script>
import appData from "~/data/appData";
export default {
  computed: {
    appData() {
      return appData;
    },
  },
};
</script>
