<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <p class="hero__supertitle">
          Onlinekurs für Eltern, Bezugs- und&nbsp;Betreuungspersonen
        </p>
        <h1 class="hero__title">
          <em>so*</em> hören auch mit ausgeschaltenem Bildschrim
        </h1>
        <p class="hero__subjektorientiert">
          <em>*subjektorientiert</em>
        </p>
      </section>
      <section class="section">
        <h2>Kursblock 1: Innere Stärke und Gleichwürdigkeit</h2>
        <audio controls src="/audio/01-01-Einstiegsuebung.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/01-02-Innere-Staerke.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/01-03-Gleichwuerdigkeit.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/01-04-Lina-weint.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/01-05-Herablassend.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
      </section>
      <section class="section">
        <h2>Kursblock 2: Mit dem Baby interagieren</h2>
        <audio controls src="/audio/02-01-Einstiegsuebung.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/02-02-Sprechen.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/02-03-Am-Baby-Tun.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/02-04-Neben-Baby-Tun.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/02-05-Verlassen.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/02-06-Dos-Donts.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
      </section>
      <section class="section">
        <h2>Kursblock 3: Das Baby verstehen</h2>
        <audio controls src="/audio/03-01-Einstiegsuebung.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/03-02-Beduerfnisse.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/03-03-Baby-kommuniziert.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/03-05-Baby-weint.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/03-06-Schwierig.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
      </section>
      <section class="section">
        <h2>Kursblock 4: Auf mich selbst achten</h2>
        <audio controls src="/audio/04-01-Freund.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/04-02-Wichtig.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/04-03-Selbstbewusstsein.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/04-04a-Selbstwert.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/04-04b-Grenzen.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/04-05-Selbstvertrauen.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
      </section>
      <section class="section">
        <h2>Kursblock 5: Zurückhaltung üben</h2>
        <audio controls src="/audio/05-01-Einstiegsuebung.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <audio controls src="/audio/05-02-Anregend.mp3">
          Dein Browser unterstützt Audiodateien leider nicht. Wir empfehlen
          Mozilla Firefox.
        </audio>
        <!-- Todo: Add videos -->
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
    document.title = `so* hören | so* kommunizieren`;
  },
};
</script>
