<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Datenschutzerklärung</h2>
        <h3>Übersicht</h3>
        <p>
          Diese Datenschutzrichtlinie beschreibt, wie deine persönlichen Daten
          in der Begleit-App zum Onlinekurs so* kommunizieren für iOS behandelt
          werden.
        </p>
        <h3>
          Wir sammeln keine persönlichen Informationen mit unserer iOS-App.
        </h3>
        <p>
          Wir sammeln, verwenden, speichern und haben keinen Zugang zu deinen
          persönlichen Daten, die in der App gespeichert sind.
        </p>
        <p>
          Wenn du Fragen zu dieser Datenschutzrichtlinie hast, kannst du dich
          gerne unter kurs@so-kommunizieren.ch mit uns in Verbindung setzen.
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
