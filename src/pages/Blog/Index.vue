<template>
  <Layout>
    <Section>
      <h1>Der Blog rund um die <em>subjektorientierte</em> Kommunikation</h1>
      <ul class="post-list">
        <li>
          <g-link
            class="post-list__post"
            to="/blog/drei-ideen-fuer-betreuungswechsel-und-trennungen/"
          >
            <g-image class="post-list__img" src="~/assets/imgs/timetimer.jpg" />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Drei Ideen, um einem Kind Betreuungswechsel und Trennungen zu
                erleichtern
                <div class="post-list__date-and-author">
                  21. April 2021 – Eva Fleer
                </div>
              </h2>
              Betreuungswechsel (z.B. von Eltern- zu Kitazeit oder von Mama- zu
              Papazeit) sind für viele Kinder schwierig. Vorhersehbarkeit kann
              den Übergang erleichtern. Drei Ideen, wie das gelingen kann!
            </div>
          </g-link>
        </li>
        <li>
          <g-link
            class="post-list__post"
            to="/blog/warum-erziehung-nicht-funktionieren-muss/"
          >
            <g-image
              class="post-list__img"
              src="~/assets/imgs/schlecht-erzogen-gut-erzogen2.png"
            />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Warum Erziehungsstrategien nicht funktionieren müssen
                <div class="post-list__date-and-author">
                  26. März 2021 – Eva Fleer
                </div>
              </h2>
              Wie sinnvoll eine Erziehungsstrategie ist, lässt sich nicht am
              Verhalten, nicht am Lernerfolg und auch nicht an der Zufriedenheit
              eines Kindes messen.
            </div>
          </g-link>
        </li>
        <li>
          <g-link class="post-list__post" to="/blog/abc-der-zurueckhaltung/">
            <g-image
              class="post-list__img"
              src="~/assets/imgs/ABC-Der-Zurueckhaltung.jpg"
            />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Das ABC der Zurückhaltung
                <div class="post-list__date-and-author">
                  13. März 2021 – Eva Fleer
                </div>
              </h2>
              Eine zurückhaltende Begleitung des kindlichen Spiels bringt viele
              Vorteile. Das ABC der Zurückhaltung kann uns als Richtlinie
              dienen.
            </div>
          </g-link>
        </li>
        <li>
          <g-link
            class="post-list__post"
            to="/blog/nein-sagen-drei-strategien/"
          >
            <g-image
              class="post-list__img"
              src="~/assets/imgs/Baby-spielt-mit-Flasche2.png"
            />
            <div class="post-list__content">
              <h2 class="post-list__title">
                "Nein" sagen, aber wie? Drei Strategien, die alle Eltern kennen
                sollten!
                <div class="post-list__date-and-author">
                  07. März 2021 – Eva Fleer
                </div>
              </h2>
              "Nein" sagen und Grenzen setzen gehören zum Alltag mit Kindern
              dazu. Wie können wir "Nein" sagen, ohne die Verbindung zum Kind zu
              verlieren? Drei nützliche Strategien!
            </div>
          </g-link>
        </li>
        <li>
          <g-link
            class="post-list__post"
            to="/blog/gedankenexperiment-gastfamilie/"
          >
            <g-image class="post-list__img" src="~/assets/imgs/Schimpfen.jpg" />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Ignorieren, Schimpfen, Strafen, Erpressen... Warum herkömmliche
                Erziehungsmethoden unseren Kindern schaden.
                <div class="post-list__date-and-author">
                  06. März 2021 – Eva Fleer
                </div>
              </h2>
              Herkömmliche Erziehungsmethoden zielen oft vor allem darauf ab,
              kindliches Verhalten zu steuern und zu kontrollieren. Das schadet
              der gesunden psychischen, kognitiven und sozialen Entwicklung
              unserer Kinder.
            </div>
          </g-link>
        </li>
        <li>
          <g-link
            class="post-list__post"
            to="/blog/gleichwuerdig-oder-entwuerdigend/"
          >
            <g-image
              class="post-list__img"
              src="~/assets/imgs/gleichwuerdig-vs-entwuerdigend.png"
            />
            <div class="post-list__content">
              <h2 class="post-list__title">
                Gleichwürdig oder entwürdigend?
                <div class="post-list__date-and-author">
                  22. Februar 2021 – Eva Fleer
                </div>
              </h2>
              Eine gleichwürdige Sprache stärkt Kinder, eine entwürdigende
              Sprache schwächt sie. Was ist der Unterschied? Sieben konkrete
              Beispiele!
            </div>
          </g-link>
        </li>
      </ul>
    </Section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/blog/" },
      {
        name: "description",
        content:
          "Blog mit Gedanken rund um die subjektorientierte Kommunikation",
      },
    ],
    title: "Blog",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
