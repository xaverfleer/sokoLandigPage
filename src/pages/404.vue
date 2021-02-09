<template>
  <Layout>
    <section class="section">
      <h2>Seite nicht gefunden</h2>
      <p>
        Die gesuchte Seite ist entweder temporär nicht verfügbar, wurde an einen
        anderen Ort verschoben oder existiert nicht mehr.
      </p>
      <p>
        <router-link :to="appData.routes.block01.to">Zum Kurs</router-link>
        oder
        <a href="/index.html">zur Startseite.</a>
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
