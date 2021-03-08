<template>
  <div>
    <div class="page">
      <header class="header">
        <div class="header__emotion">
          <div class="header__emotion-content">
            <button class="header__play-video"></button>
            <div class="header__teaser">
              so* kommunizieren,
              <br />
              gesunde Entwicklung nähren
            </div>
          </div>
        </div>
        <div class="header__content">
          <g-link class="header__home" to="/">
            <g-image
              alt="so* kommunizieren Baum"
              blur="0"
              class="header__logo"
              height="200"
              src="~/assets/imgs/so-kommunizieren.png"
              title="Zur Startseite"
              width="156"
            />
          </g-link>
          <Navigation />
          <g-link
            :to="
              isLoggedIn ? appData.routes.account.to : appData.routes.login.to
            "
            class="profile"
          />
        </div>
      </header>
      <main>
        <section class="section hero">
          <p class="hero__supertitle">
            Der Online-Video-Kurs für Eltern, Bezugs-
            und&nbsp;Betreuungspersonen
          </p>
          <h1 class="hero__title">
            Beziehung statt Erziehung. Wie?
            <br />
            <em>so*</em> kommunizieren mit meinem&nbsp;Baby!
          </h1>
          <p class="hero__subjektorientiert">
            <em>*subjektorientiert: einfühlsam, wertschätzend, stärkend</em>
          </p>
          <br />
          <p>
            Du bist...
          </p>
          <ul class="ul--3-dots">
            <li>
              werdende Mutter oder werdender Vater
            </li>
            <li>
              Elternteil, Bezugs- oder Betreuungsperson eines Kindes zwischen 0
              und 2 Jahren
            </li>
          </ul>
          <p>
            Du wünschst dir für dich und dein Baby...
          </p>
          <Cards
            :cards="[
              {
                title: 'Mehr\nVerständnis',
                text:
                  'Verstehe die Körpersprache, das Weinen und das Verhalten deines Babys richtig. Reagiere angemessen und beuge Frust bei dir und deinem Baby vor.',
              },
              {
                title: 'Mehr\nGelassenheit',
                text:
                  'Lass dich von gut gemeinten Ratschlägen und herausfordernden Situationen nicht verunsichern. Kommuniziere auf eine Weise, die dich und dein Baby stärkt.',
              },
              {
                title: 'Weniger\nMachtkämpfe',
                text:
                  'Bleibe in Konfliktsituationen klar und zugewandt. Gewinne durch eine bedürfnisorientierte Kommunikation die Kooperation deines Babys.',
              },
            ]"
          />
          <Checklist
            :checklist="{
              pretext: `Deine Kommunikation macht den Unterschied, und zwar von Anfang an! Die ersten drei Lebensjahre beeinflussen dein Kind besonders stark und nachhaltig. Kommuniziere von Anfang an <em>subjektorientiert</em> und ...`,
              entries: [
                {
                  id: 0,
                  text:
                    'nähre nachhaltig die gesunde kognitive, psychische und soziale Entwicklung deines Babys!',
                },
                {
                  id: 1,
                  text:
                    'hilf deinem Baby, ein positives Selbstbild und ein gesundes Selbstvertrauen aufzubauen!',
                },
                {
                  id: 2,
                  text:
                    'schaffe ein stabiles Fundament für eine glückliche Kindheit und ein erfülltes Erwachsenenleben!',
                },
              ],
            }"
          />
          <p>
            Starte jetzt gratis mit dem Online-Video-Kurs zur
            <em>subjektorientierten</em>
            Kommunikation mit Babys!
          </p>
          <div class="buttons">
            <g-link
              class="button button--primary"
              to="/kurs/"
              target="_blank"
              title="Gratis starten"
              >Gratis starten</g-link
            >
            <a class="button button--2ndary" href="#contents" title="Inhalt"
              >Mehr erfahren</a
            >
          </div>
        </section>
        <section class="section">
          <a class="scroll-offset" id="contents"></a>
          <h2>Inhalte</h2>
          <p>
            Der Online-Video-Kurs «<em>so*</em> kommunizieren mit meinem Baby»
            besteht aus fünf Kursblöcken. Jeder Kursblock beinhaltet:
          </p>
          <div class="value-proposition">
            <div class="value-proposition__entry">
              <g-image
                blur="0"
                class="value-proposition__icon"
                height="54"
                src="~/assets/imgs/video-symbol.svg"
                width="54"
              />
              <div class="value-proposition__titie">Inputvideos</div>
              <div class="value-proposition__description">
                50&thinsp;-&thinsp;90 Minuten animierte Videos pro Kursblock
                bieten Wissen und Strategien rund um eine einfühlsame,
                wertschätzende und stärkende Kommunikation mit Babys.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="http://player.vimeo.com/video/490855723?autoplay=1"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <img
                class="value-proposition__icon"
                src="imgs/article-24px.svg"
              />
              <div class="value-proposition__titie">Strategiekarten</div>
              <div class="value-proposition__description">
                Alle Kommunikationsstrategien findest du zusammengefasst auf je
                einer A5-Seite, z.B. zum Aufhängen als Erinnerungshilfe.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="https://so-kommunizieren.ch/documents/so5-Strategiekarte-ABC-der-Zur%C3%BCckhaltung.pdf"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <img
                class="value-proposition__icon"
                src="imgs/description-24px.svg"
              />
              <div class="value-proposition__titie">Zusammen- fassungen</div>
              <div class="value-proposition__description">
                Zusammenfassungen der wichtigsten Kursinhalte ermöglichen einen
                raschen Überblick und eine schnelle Repetition der Themen.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="https://so-kommunizieren.ch/documents/so3-Zusammenfassung.pdf"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <img
                class="value-proposition__icon"
                src="imgs/find_in_page-24px.svg"
              />
              <div class="value-proposition__titie">Vertiefungs- material</div>
              <div class="value-proposition__description">
                Vertiefende Materialien im PDF-Format zu diversen Themen rund um
                die Entwicklung des Babys stehen zum Download zur Verfügung.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="https://so-kommunizieren.ch/documents/so2-Vertiefung-Baby-led-weaning.pdf"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <g-image
                blur="0"
                class="value-proposition__icon"
                height="54"
                src="~/assets/imgs/edit-symbol.svg"
                width="54"
              />
              <div class="value-proposition__titie">Übungen</div>
              <div class="value-proposition__description">
                Ein breites Angebot an Übungen hilft dir, die Inhalte aus den
                Videos zu vertiefen und zu festigen.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="https://so-kommunizieren.ch/documents/so3-%C3%9Cbung-3.3e.pdf"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <img class="value-proposition__icon" src="imgs/map-24px.svg" />
              <div class="value-proposition__titie">Kursfahrplan</div>
              <div class="value-proposition__description">
                Ein Fahrplan gibt dir eine Übersicht über alle Kursblockinhalte
                und hilft dir, dich im Kursblock zurechtzufinden.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="https://so-kommunizieren.ch/documents/so2-Fahrplan.pdf"
                target="_blank"
                >Beispiel</a
              >
            </div>
          </div>
          <p>
            In den fünf Kursblöcken lernst du...
          </p>
          <ul class="checklist">
            <li class="checklist__item  checklist__item--kursblock-1">
              <img
                alt="Alle stehen oben auf dem Podest als Symbol, dass alle wichtig sind."
                src="/imgs/alle-sind-wichtig.png"
                width="150"
              />
              <div class="checklist__text">
                <strong>im Kursblock 1</strong><br />
                ...welche Wurzeln dein Baby innerlich stark fürs Leben machen
                und was es heisst, dein Baby als gleichwürdiges Subjekt zu
                sehen.
              </div>
            </li>
            <li class="checklist__item checklist__item--kursblock-2">
              <div class="checklist__text">
                <strong>im Kursblock 2</strong><br />
                ...wie du im Alltag immer wieder in nährende Interaktionen mit
                deinem Baby treten kannst und wie du Widerstand (z.B. beim
                Wickeln) konstruktiv begleiten kannst.
              </div>
              <img
                alt="Vater wickelt sein Baby"
                src="/imgs/babypflege.png"
                width="150"
              />
            </li>
            <li class="checklist__item checklist__item--kursblock-3">
              <img
                alt="Weinendes, überfordertes Baby"
                src="/imgs/baby-weint.png"
                width="150"
              />
              <div class="checklist__text">
                <strong>im Kursblock 3</strong><br />
                ...wie du die Körpersignale, das Weinen und das Verhalten deines
                Babys richtig verstehen und angemessen darauf reagieren kannst.
              </div>
            </li>
            <li class="checklist__item checklist__item--kursblock-4">
              <div class="checklist__text">
                <strong>im Kursblock 4</strong><br />
                ...wie du dich selbst stärken und deine Grenzen schützen kannst
                kannst, damit du genügend Ressourcen für den Alltag mit deinem
                Baby hast.
              </div>
              <img
                alt="Starke Eltern"
                src="/imgs/starke-eltern.png"
                width="150"
              />
            </li>
            <li class="checklist__item checklist__item--kursblock-5">
              <img
                alt="Baby forscht auf dem Wäschekorb"
                src="/imgs/baby-forscht.png"
                width="150"
              />
              <div class="checklist__text">
                <strong>im Kursblock 5</strong><br />
                ...wie du das Spielen und Forschen deines Babys begleiten
                kannst, damit es in seinem Forschungsdrang gestärkt wird und
                Frustrationstoleranz sowie Sozialkompetenz entwickeln kann.
              </div>
            </li>
          </ul>
          <img
            alt="Mother on laptop and baby sleeping in bed"
            class="img"
            src="imgs/mother-on-laptop-and-baby-sleeping-in-bed.jpg"
          />
        </section>
        <section class="section">
          <a class="scroll-offset" id="offer"></a>
          <h2>Angebote</h2>
          <div class="offers-wrapper">
            <div class="offer-selector">
              <button
                class="offer-selector__button offer-selector__button--active offer-selector__button--alone"
                id="learn-button--alone"
              >
                Ich lerne gerne selbstständig
              </button>
              <button
                class="offer-selector__button offer-selector__button--group"
                id="learn-button--in-group"
              >
                Ich lerne gerne in einer Gruppe
              </button>
            </div>
            <div class="offers">
              <div
                class="offers__offer offers__offer--active offers__offer--alone"
              >
                <p>
                  <strong
                    >Du lernst gerne allein, unverbindlich und in deinem eigenen
                    Tempo?</strong
                  >
                </p>
                <p>
                  Mit dem freien Online-Video-Kurs erwirbst du einen dauerhaften
                  Zugang zu allen Kursinhalten. Die Kursinhalte bearbeitest du
                  nach deinem eigenen Plan und in deinem
                  individuellen Lerntempo.
                </p>
                <p>
                  Zusätzlich hast du die unverbindliche Möglichkeit, einmal pro
                  Monat an einem Onlinemeeting teilzunehmen. Hier lernst du
                  andere Kursteilnehmende mit je unterschiedlichem Kursstand
                  kennen. Du diskutierst mit mir und mit Gleichgesinnten deine
                  aktuellen Fragen und Themen.
                </p>
                <br />
                <p class="offer__space"></p>
                <div class="booking-offer">
                  <div class="booking-offer__entry booking-offer__title">
                    Freier Online-Video-Kurs
                  </div>
                  <div class="booking-offer__entry booking-offer__main">
                    <div class="booking-offer__price">CHF 195</div>
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Freier, dauerhafter Zugang zu allen Kursinhalten
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Individuelles Lerntempo
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Unverbindliches Onlinemeeting 1x im Monat
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    30 Tage Geld-zurück-Garantie
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Kursstart jederzeit möglich
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Upgrade zu geführtem Gruppenkurs für CHF&nbsp;100 möglich
                  </div>
                  <div class="buttons booking-offer__buttons">
                    <g-link
                      class="button button--primary"
                      to="/buchen/"
                      title="Jetzt buchen"
                      >Jetzt buchen</g-link
                    >
                  </div>
                </div>
              </div>
              <div class="offers__offer offers__offer--group">
                <p>
                  <strong
                    >Du lernst gerne strukturiert, geführt und in einer
                    Gruppe?</strong
                  >
                </p>
                <p>
                  Mit dem geführten Gruppenkurs wirst du Teil einer fixen
                  Lerngruppe. In regelmässigen Onlinemeetings (2x im Monat)
                  führe ich dich und deine Gruppe über einen Zeitraum von sechs
                  Monaten Schritt für Schritt durch den Online-Video-Kurs. Ich
                  schaffe für dich eine klare Struktur und Verbindlichkeit.
                </p>
                <p>
                  Vor jedem Onlinemeeting schaust du dir als Vorbereitung die
                  vorgegebenen Videos an (im Umfang von ca. 45 Minuten). Während
                  den Treffen klären, vertiefen und üben wir gemeinsam die
                  Inhalte dieser Videos. Es bleibt auch genügend Zeit für deine
                  individuellen Themen und Fragen.
                </p>
                <div class="document">
                  <a
                    href="/documents/ggk-Kursplan.pdf"
                    target="_blank"
                    class="document__link document__link--further-information"
                    >Kursdaten und Kursplan</a
                  >
                </div>
                <p class="offer__space"></p>
                <div class="booking-offer">
                  <div class="booking-offer__entry booking-offer__title">
                    Geführter Gruppenkurs
                  </div>
                  <div class="booking-offer__entry booking-offer__main">
                    <div class="booking-offer__price">CHF 295</div>
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Freier und dauerhafter Zugang zu allen Kursinhalten
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    6-monatiger strukturierter und geführter Kursplan
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Lernen in beständiger Lerngruppe
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Onlinemeeting mit Lerngruppe 2x im Monat
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    30 Tage Geld-zurück-Garantie
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Nächster Kursstart: 18. August 2021
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Anmeldeschluss: 5. Juli 2021
                  </div>
                  <div class="booking-offer__entry booking-offer__detail">
                    Noch 7 Plätze verfügbar
                  </div>
                  <div class="buttons booking-offer__buttons">
                    <g-link
                      class="button button--primary"
                      to="/gruppenkurs-buchen/"
                      title="Jetzt buchen"
                      >Jetzt buchen</g-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <a class="scroll-offset" id="about-me"></a>
          <h2>Über mich</h2>
          <img alt="Porträt von Eva Fleer" class="img" src="imgs/Eva.jpg" />
          <p>
            <strong
              >Trainerin für <em>subjketorientierte</em> Kommunikation mit
              Babys</strong
            ><br />
            <strong>Leiterin Elternkompasskurse (in Ausbildung)</strong><br />
            <strong>Master an der Pädagogischen Hochschule Bern</strong>
          </p>
          <br />
          <p>
            Ich bin Eva Fleer, ausgebildete und erfahrene Pädagogin und in
            Ausbildung zur Leiterin von Kursen für Eltern gemäss dem Konzept
            «Elternkompass». Im Verlauf dieser Ausbildung habe ich den
            Online-Video-Kurs zur <em>subjektorientierten</em> Kommunikation mit
            Babys erstellt. In diesem Kurs trage ich Wissen und Strategien aus
            der Ausbildung, aus rund 50 Fachbüchern sowie aus den folgenden
            absolvierten Kursen zusammen:
          </p>
          <p></p>
          <ul>
            <li>Kurs «Familylab» nach Jesper Juul bei Nina Trepp</li>
            <li>
              Kurs «Wie Kinder ihren Selbstwert entdecken» bei Fabian Grolimund
            </li>
            <li>Onlinekurs «Resilienisch» bei Nora Völker</li>
            <li>
              Onlinekurs «Die Kunst gelassen und empathisch zu erziehen» von
              Lienhard Valentin
            </li>
            <li>Onlinekurs «Erziehen ohne Schimpfen» von Nicolas Schmidt</li>
            <li>Onlinekurs «Mein Familienkompass» von Nora Imlau</li>
          </ul>
          <p>
            Die «Theorie» erprobe ich täglich im Alltag mit meiner zweijährigen
            Tochter. Dabei erlebe ich immer wieder, wie uns das Wissen und die
            Strategien zur subjektorientierten Kommunikation beide stärken. Und
            ich erlebe auch, wie ich im schnelllebigen, anforderungsreichen
            Alltag immer wieder in alte Muster falle, den Kontakt zu meiner
            Tochter verliere und herablassend kommuniziere. Das sind
            schmerzhafte und dennoch lehrreiche Momente, die auf diesem
            spannenden Weg hin zu einer einfühlsamen, wertschätzenden und
            stärkenden Kommunikation dazugehören.
          </p>
        </section>
        <section class="section">
          <a class="scroll-offset" id="contact"></a>
          <h2>Kontakt</h2>
          <p>
            Hast du Fragen, Anregungen, Wünsche oder einfach etwas mitzuteilen?
            Ich freue mich über deine Nachricht.
          </p>
          <form class="form">
            <div class="form-entry form-entry--halfwidth">
              <label for="form__name" class="form-entry__label"
                ><abbr title="Pflichtfeld" class="form-entry__required">* </abbr
                >Name</label
              >
              <input
                name="name"
                id="form__name"
                required="required"
                type="text"
                class="form-entry__input"
              />
              <div class="form-entry__help"></div>
            </div>
            <div class="form-entry form-entry--halfwidth">
              <label for="form__email" class="form-entry__label"
                ><abbr title="Pflichtfeld" class="form-entry__required">* </abbr
                >E-Mail-Adresse</label
              >
              <input
                name="email"
                id="form__email"
                required="required"
                type="email"
                class="form-entry__input"
              />
              <div class="form-entry__help"></div>
            </div>
            <div class="form-entry form-entry--fullwidth">
              <label for="form__message" class="form-entry__label"
                ><abbr title="Pflichtfeld" class="form-entry__required">* </abbr
                >Nachricht</label
              >
              <textarea
                name="message"
                id="form__message"
                rows="10"
                class="form-entry__input"
              ></textarea>
              <div class="form-entry__help"></div>
            </div>
            <div class="buttons form__buttons">
              <button class="button button--primary">
                Nachricht senden
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer class="footer" id="footer">
        <div class="footer__contact">
          Kontaktiere uns unter
          <a href="mailto:kurs@so-kommunizieren.ch" rel="nofollow"
            >kurs@so-kommunizieren.ch</a
          >
          oder
          <a href="tel:+41774466505" rel="nofollow"> +41 77 44 66 505</a>.
        </div>
        <div class="footer__copyright">
          © 2020 Fleer & Fleer |
          <g-link to="/impressum/" rel="nofollow">
            Impressum
          </g-link>
        </div>
      </footer>
      <GdprNotice />
    </div>
    <div class="modal">
      <div class="modal__scrim"></div>
      <button class="modal__close"></button>
      <div class="modal__video">
        <iframe
          class="modal__video-iframe"
          src="https://player.vimeo.com/video/504356530"
          frameborder="0"
          allow="autoplay; muted; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <img
      height="1"
      width="1"
      src="https://www.facebook.com/tr?id=253945996208376&ev=PageView&noscript=1"
    />
  </div>
</template>

<script>
import Cards from "~/components/Cards";
import Checklist from "~/components/Checklist";
import GdprNotice from "~/components/GdprNotice";
import LogRocket from "logrocket";
import Navigation from "~/components/Navigation";
import appData from "~/data/appData";
import stateManagement from "~/stateManagement";
import {
  trackCustomEvent,
  trackPageLoad,
  trackScrolling,
} from "~/scripts/analyticsMethods";

const page = typeof document === "object" && document.querySelector(".page");

function onMounted() {
  const Player = require("@vimeo/player").default;

  const Vimeo = { Player };

  const header = document.querySelector(".header");
  const headerPlayVideo = document.querySelector(".header__play-video");
  const formElem = document.querySelector("form");
  const modalElems = {
    modal: document.querySelector(".modal"),
    close: document.querySelector(".modal__close"),
    vimeoVideo: document.querySelector(".modal__video-iframe"),
  };

  const learningMode = {
    buttons: {
      alone: document.getElementById("learn-button--alone"),
      group: document.getElementById("learn-button--in-group"),
    },
    content: {
      alone: document.querySelector(".offers__offer--alone"),
      group: document.querySelector(".offers__offer--group"),
    },
  };

  window.addEventListener("scroll", function toggleHeaderPositioning() {
    if (window.pageYOffset > 350) header.classList.add("header--fixed");
    else header.classList.remove("header--fixed");
  });

  function getFormData() {
    const entries = [].slice.call(formElem.elements);

    const data = entries.reduce(
      (acc, elem) => (elem.value ? { ...acc, [elem.name]: elem.value } : acc),
      {}
    );
    return JSON.stringify(data);
  }

  function submitForm() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `/.netlify/functions/sendMessage`);
    xhr.send(getFormData());
    xhr.addEventListener("load", () => {
      switch (xhr.status) {
        case 200:
          [].slice.call(formElem.elements).forEach(function clearElem(elem) {
            // eslint-disable-next-line no-param-reassign
            elem.value = "";
          });
          // this.handleSuccess(xhr);
          break;
        default:
          // eslint-disable-next-line no-alert
          alert(
            "Senden der Nachricht fehlgeschlagen.\nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch."
          );
          break;
      }
    });

    xhr.addEventListener("error", () => {
      // eslint-disable-next-line no-alert
      alert(
        "Senden der Nachricht fehlgeschlagen.\nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch."
      );
    });
  }

  document.querySelector("form").addEventListener("submit", submitForm);

  const modalPlayer = new Vimeo.Player(modalElems.vimeoVideo);

  function closeModal() {
    modalElems.modal.classList.remove("modal--open");
    page.classList.remove("page--modal-is-open");
    modalPlayer.pause();
  }

  function openModal() {
    modalElems.modal.classList.add("modal--open");
    page.classList.add("page--modal-is-open");
    modalPlayer.play();
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") closeModal();
    });

    trackCustomEvent("Played emotion video");
  }

  headerPlayVideo.addEventListener("click", openModal);
  modalElems.close.addEventListener("click", closeModal);

  learningMode.buttons.alone.addEventListener("click", () => {
    learningMode.buttons.alone.classList.add("offer-selector__button--active");
    learningMode.buttons.group.classList.remove(
      "offer-selector__button--active"
    );
    learningMode.content.alone.classList.add("offers__offer--active");
    learningMode.content.group.classList.remove("offers__offer--active");
  });

  learningMode.buttons.group.addEventListener("click", () => {
    learningMode.buttons.alone.classList.remove(
      "offer-selector__button--active"
    );
    learningMode.buttons.group.classList.add("offer-selector__button--active");
    learningMode.content.alone.classList.remove("offers__offer--active");
    learningMode.content.group.classList.add("offers__offer--active");
  });

  document.querySelector("html").style.scrollBehavior = "";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, 5000);
}

export default {
  components: { Cards, Checklist, GdprNotice, Navigation },
  computed: {
    appData() {
      return appData;
    },
    isLoggedIn() {
      return stateManagement.isLoggedIn();
    },
  },
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/" },
      {
        name: "description",
        content:
          "Übersicht zur subjektorienten Kommunikation: Wie stärke ich Selbstwert, Selbstbewusstsein und Selbstvertrauen meines Babys?",
      },
    ],
    title: "Nährende Kommunikation mit deinem Baby",
  },
  methods: {
    analyticsRelated() {
      typeof LogRocket === "object" &&
        LogRocket.init &&
        LogRocket.init("yxvjmb/soko");
      trackPageLoad("/");

      trackScrolling("contents", "#contents");
      trackScrolling("offer", "#offer");
      trackScrolling("about-me", "#about-me");
      trackScrolling("contact", "#contact");
      trackScrolling("footer", "#footer");
    },
  },
  mounted() {
    this.analyticsRelated();
    onMounted();
  },
};
</script>
