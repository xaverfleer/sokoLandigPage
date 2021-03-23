<template>
  <div>
    <div class="page">
      <header class="header">
        <div class="header__emotion">
          <div class="header__emotion-content">
            <button
              @click="openModal"
              aria-label="Teaser Video Abspielen"
              class="header__play-video"
            ></button>
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
              src="~/assets/imgs/so-kommunizieren.png"
              title="Zur Startseite"
            />
          </g-link>
          <Navigation />
          <g-link
            :to="
              isLoggedIn ? appData.routes.account.to : appData.routes.login.to
            "
            :aria-label="isLoggedIn ? 'Konto' : 'Login'"
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
          <p>Du wünschst dir für dich und dein Baby...</p>
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
                  'Lass dich von veralteten Ratschlägen und herausfordernden Situationen nicht verunsichern. Kommuniziere auf eine Weise, die dich und dein Baby nachweislich stärkt.',
              },
              {
                title: 'Weniger\nMachtkämpfe',
                text:
                  'Bleibe in Konfliktsituationen klar und zugewandt. Gewinne durch eine bedürfnisorientierte Kommunikation die Kooperation deines Babys.',
              },
            ]"
          />
          <p>
            Deine Kommunikation macht den Unterschied, und zwar von Anfang an!
            Die ersten drei Lebensjahre beeinflussen die kognitive, psychische
            und soziale Entwicklung deines Kindes besonders stark und
            nachhaltig. Probleme, die im späteren Leben auftauchen, wurzeln oft
            in frühsten Kindheitserfahrungen.
          </p>
          <g-image
            alt="Die ersten drei Jahre zählen"
            class="speech-bubble speech-bubble--right"
            src="~/assets/imgs/sprechblase-1.png"
          />
          <p class="speech-bubble__clear"></p>
          <p>
            <br /><br />Eine einfühlsame, wertschätzende und stärkende
            Kommunikation bereits in den ersten Lebensjahen ist das Wertvollste,
            das du deinem Kind schenken kannst. Kommuniziere von Anfang an
            <em>subjektorientiert</em> und ...
          </p>
          <div class="checklist">
            <ChecklistEntry
              v-for="entry in [
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
              ]"
              :key="entry.id"
              :entry="entry"
            />
          </div>
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
          <p class="scroll-offset" id="contents" />
          <h2>Inhalte</h2>
          <p>
            Der Online-Video-Kurs «<em>so*</em> kommunizieren mit meinem Baby»
            besteht aus fünf Kursblöcken. Jeder Kursblock beinhaltet:
          </p>
          <div class="value-proposition">
            <div class="value-proposition__entry">
              <g-image
                alt="Inputvideos Icon"
                blur="0"
                class="value-proposition__icon"
                height="54"
                src="~/assets/imgs/video-symbol.svg"
                width="54"
              />
              <div class="value-proposition__titie">Input&shy;videos</div>
              <div class="value-proposition__description">
                50&thinsp;-&thinsp;90 Minuten animierte Videos pro Kursblock
                bieten Wissen und Strategien rund um eine einfühlsame,
                wertschätzende und stärkende Kommunikation mit Babys.
              </div>
              <p class="value-proposition__space" />
              <a
                class="value-proposition__sample"
                href="http://player.vimeo.com/video/490855723?autoplay=1"
                rel="noopener"
                target="_blank"
                >Beispiel</a
              >
            </div>
            <div class="value-proposition__entry">
              <img
                alt="Strategiekarten Icon"
                class="value-proposition__icon"
                src="imgs/article-24px.svg"
              />
              <div class="value-proposition__titie">Strategie&shy;karten</div>
              <div class="value-proposition__description">
                Alle Kommunikations&shy;strategien findest du zusammengefasst
                auf je einer A5-Seite, z.B. zum Aufhängen als Erinnerungshilfe.
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
                alt="Zusammenfassungen Icon"
                class="value-proposition__icon"
                src="imgs/description-24px.svg"
              />
              <div class="value-proposition__titie">Zusammen&shy;fassungen</div>
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
                alt="Vertiefungsmaterial Icon"
                class="value-proposition__icon"
                src="imgs/find_in_page-24px.svg"
              />
              <div class="value-proposition__titie">
                Vertiefungs&shy;material
              </div>
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
                alt="Übungen Icon"
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
              <img
                alt="Kursfahrplan / Kurs[bersicht Icon"
                class="value-proposition__icon"
                src="imgs/map-24px.svg"
              />
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
            <br />Für eine gesunde kognitive, psychische und soziale Entwicklung
            brauchen Kinder vor allem eins: Innere Stärke. Innerlich starke
            Kinder...
          </p>
          <div class="checklist">
            <ChecklistEntry
              v-for="entry in [
                {
                  id: 0,
                  text:
                    'kennen sich selbst gut und können auch andere Menschen differenziert lesen und so empathisch reagieren.',
                },
                {
                  id: 1,
                  text:
                    'haben einen starken Selbstwert und gehen wertschätzend mit sich selbst und mit anderen Menschen um.',
                },
                {
                  id: 2,
                  text:
                    'vertrauen in ihre Fähigkeiten, Neues zu lernen, mit Schwierigkeiten umzugehen und etwas zu bewirken.',
                },
              ]"
              :key="entry.id"
              :entry="entry"
            />
          </div>
          <g-image
            alt="Knder brauchen innere Stärke"
            class="speech-bubble speech-bubble--left"
            src="~/assets/imgs/sprechblase-2.png"
            width="500"
          />
          <p class="speech-bubble__clear" />
          <p>
            <br />In den fünf Kursblöcken dreht sich alles um die Frage, wie du
            durch deine Kommunikation dein Kind von Anfang an innerlich stärken
            kannst. Du lernst...
          </p>
          <ul class="checklist">
            <li class="checklist__item  checklist__item--kursblock-1">
              <div class="checklist__text">
                <strong>im Kursblock 1</strong><br />
                ...welche Wurzeln dein Baby innerlich stark fürs Leben machen
                und was es heisst, dein Baby als gleichwürdiges Subjekt zu
                sehen.
              </div>
              <g-image
                alt="Alle stehen oben auf dem Podest als Symbol, dass alle wichtig sind."
                src="~/assets/imgs/alle-sind-wichtig.png"
                width="150"
              />
            </li>
            <li class="checklist__item checklist__item--kursblock-2">
              <g-image
                alt="Vater wickelt sein Baby"
                src="~/assets/imgs/babypflege.png"
                width="150"
              />
              <div class="checklist__text">
                <strong>im Kursblock 2</strong><br />
                ...wie du im Alltag immer wieder in nährende Interaktionen mit
                deinem Baby treten kannst und wie du Widerstand (z.B. beim
                Wickeln) konstruktiv begleiten kannst.
              </div>
            </li>
            <li class="checklist__item checklist__item--kursblock-3">
              <div class="checklist__text">
                <strong>im Kursblock 3</strong><br />
                ...wie du die Körpersignale, das Weinen und das Verhalten deines
                Babys richtig verstehen und angemessen darauf reagieren kannst.
              </div>
              <g-image
                alt="Weinendes, überfordertes Baby"
                src="~/assets/imgs/baby-weint.png"
                width="150"
              />
            </li>
            <li class="checklist__item checklist__item--kursblock-4">
              <g-image
                alt="Starke Eltern"
                src="~/assets/imgs/starke-eltern.png"
                width="150"
              />
              <div class="checklist__text">
                <strong>im Kursblock 4</strong><br />
                ...wie du dich selbst stärken und deine Grenzen schützen kannst
                kannst, damit du genügend Ressourcen für den Alltag mit deinem
                Baby hast.
              </div>
            </li>
            <li class="checklist__item checklist__item--kursblock-5">
              <div class="checklist__text">
                <strong>im Kursblock 5</strong><br />
                ...wie du das Spielen und Forschen deines Babys begleiten
                kannst, damit es in seinem Forschungsdrang gestärkt wird und
                Frustrationstoleranz sowie Sozialkompetenz entwickeln kann.
              </div>
              <g-image
                alt="Baby forscht auf dem Wäschekorb"
                src="~/assets/imgs/baby-forscht.png"
                width="150"
              />
            </li>
          </ul>
          <g-image
            alt="Die ersten drei Jahre zählen"
            class="speech-bubble speech-bubble--right"
            src="~/assets/imgs/sprechblase-3.png"
            width="541"
          />
          <p class="speech-bubble__clear" />
          <div class="customer-feedback">
            <div class="customer-feedback__entry">
              <div class="customer-feedback__content">
                Dein Kurs prägt die Kommunikation mit unserer Tochter sehr. Die
                Art und Weise wie du erklärst findet bei uns sofort Verständnis,
                bleibt in Erinnerung und ist einfach in der Praxis anzuwenden.
                Das ist perfekt.
              </div>
              <div class="customer-feedback__author">
                — Ilena und Max<span class="customer-feedback__author-type"
                  >, Eltern</span
                >
              </div>
            </div>
            <div class="customer-feedback__entry">
              <div class="customer-feedback__content">
                Die Lektionen sind praktisch und anschaulich gestaltet und
                machen richtig Lust, gewisse Ideen gleich auszuprobieren.
              </div>
              <div class="customer-feedback__author">
                — Katrin<span class="customer-feedback__author-type"
                  >, Mutter</span
                >
              </div>
            </div>
            <div class="customer-feedback__entry">
              <div class="customer-feedback__content">
                Dein Kurs vermittelt bodenständig und ohne extreme Ideologie,
                was Kommunikation bewirken kann. Die konkreten Strategien helfen
                uns im Alltag, herablassende Muster durch eine stärkende
                Kommunikation zu ersetzen.
              </div>
              <div class="customer-feedback__author">
                — Rahel und John<span class="customer-feedback__author-type"
                  >, Eltern</span
                >
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <p class="scroll-offset" id="offer" />
          <h2>Angebote</h2>
          <CurrencySelector :currency="state.currency" />
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
                    <div class="booking-offer__price">
                      {{ this.currencyShown }} {{ prices.single }}
                    </div>
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
                    Upgrade zu geführtem Gruppenkurs für
                    {{ this.currencyShown }}&nbsp;100 möglich
                  </div>
                  <div class="buttons booking-offer__buttons">
                    <g-link
                      class="button button--primary"
                      :to="
                        state.currency === 'EUR' ? '/buchen-euro/' : '/buchen/'
                      "
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
                    <div class="booking-offer__price">
                      {{ currencyShown }} {{ prices.group }}
                    </div>
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
                      :to="
                        state.currency === 'EUR'
                          ? '/gruppenkurs-buchen-euro/'
                          : '/gruppenkurs-buchen/'
                      "
                      title="Jetzt buchen"
                      >Jetzt buchen</g-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section" itemscope itemtype="https://schema.org/Person">
          <p class="scroll-offset" id="about-me" />
          <h2>Über mich</h2>
          <div
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <g-image
              alt="Porträt von Eva Fleer"
              class="img"
              src="~/assets/imgs/eva.jpg"
              itemprop="contentUrl"
              itemscope
              itemtype="https://scchema.org/URL"
            />
          </div>
          <p>
            <strong itemprop="jobTitle"
              >Kursleiterin <em>subjketorientierte</em> Kommunikation mit
              Babys</strong
            ><br />
            <strong>Leiterin Elternkompasskurse (in Ausbildung)</strong><br />
            <strong
              >Master an der
              <span
                itemprop="alumniOf"
                itemscope
                itemtype="https://schema.org/CollegeOrUniversity"
                ><span itemprop="name">
                  Pädagogischen Hochschule Bern</span
                ></span
              ></strong
            >
          </p>
          <br />
          <p>
            Ich bin <span itemprop="name">Eva Fleer</span>, ausgebildete und
            erfahrene Pädagogin mit diversen Weiterbildungen im Bereich
            Kommunikation und in Ausbildung zur Leiterin von Kursen für Eltern
            gemäss dem Konzept «Elternkompass».
          </p>
          <p>
            Ich setze mich ein...
          </p>
          <div class="checklist">
            <ChecklistEntry
              v-for="entry in [
                {
                  id: 0,
                  text:
                    'für das Recht jedes Kindes auf die Achtung seiner Würde, auf körperliche und geistige Unversehrtheit und auf freie Persönlichkeitsentfaltung.',
                },
                {
                  id: 1,
                  text:
                    'für eine gewaltfreie, bedürfnis- und bindungsorientierte Erziehung von Anfang an.',
                },
                {
                  id: 2,
                  text:
                    'für tiefe, erfüllende und tragfähige Eltern-Kind-Beziehungen.',
                },
              ]"
              :key="entry.id"
              :entry="entry"
            />
          </div>
          <p>
            Dazu stelle ich im Onlinekurs in anschaulichen Videos Wissen und
            Strategien rund um eine nährende Kommunikation mit Babys zur
            Verfügung. Eine einfühlsame, wertschätzende und stärkende
            Kommunikation bereits in den ersten Lebensjahren liegt mir besonders
            am Herzen. Denn diese frühsten Kindheitserfahrungen beeinflussen die
            Qualität der Eltern-Kind-Beziehung sowie die kognitive, psychische
            und soziale Entwicklung eines Kindes besonders stark und nachhaltig.
          </p>
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
          <p>
            Ausgleich zum und Auszeit vom Arbeits- und Familienleben finde ich
            beim Eiskunstlaufen, beim Lesen, beim Schwimmen in der Aare, beim
            Zusammensein mit Freunden und ja, ab und zu auch beim Eintauchen in
            meine Lieblingsserien.
          </p>
        </section>
      </main>
      <footer class="footer" id="footer">
        <div class="footer__contact">
          Kontaktiere uns mit dem
          <g-link to="/kontakt/">Kontaktformular,</g-link> unter
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
      <button @click="closeModal" class="modal__close"></button>
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
      alt="Utility"
      height="1"
      width="1"
      src="https://www.facebook.com/tr?id=253945996208376&ev=PageView&noscript=1"
    />
  </div>
</template>

<script>
import "@fontsource/piazzolla";
import Cards from "~/components/Cards";
import ChecklistEntry from "~/components/ChecklistEntry";
import CurrencySelector from "~/components/CurrencySelector";
import GdprNotice from "~/components/GdprNotice";
import Navigation from "~/components/Navigation";
import appData from "~/data/appData";
import stateM8t from "~/stateManagement";
import {
  trackCampaign,
  trackCustomEvent,
  trackPageLoad,
  trackScrolling,
} from "~/scripts/analyticsMethods";
import "npm-font-source-sans-pro";

function onMounted() {
  const header = document.querySelector(".header");

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
  components: {
    Cards,
    ChecklistEntry,
    CurrencySelector,
    GdprNotice,
    Navigation,
  },
  computed: {
    allCurrencyButtons() {
      return document.querySelectorAll(".currency-selector__button");
    },
    appData() {
      return appData;
    },
    currencyShown() {
      return this.state.currency === "EUR" ? "€" : "CHF";
    },
    isLoggedIn() {
      return stateM8t.isLoggedIn();
    },
    prices() {
      return this.state.currency === "EUR"
        ? {
            group: appData.offers.group.priceEur,
            single: appData.offers.single.priceEur,
          }
        : {
            group: appData.offers.group.priceChf,
            single: appData.offers.single.priceChf,
          };
    },
  },
  data() {
    return { elems: { modal: { root: {} } }, modalPlayer: {}, state: {} };
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
      trackCampaign();
      trackPageLoad("/");

      trackScrolling("contents", "#contents");
      trackScrolling("offer", "#offer");
      trackScrolling("about-me", "#about-me");
      trackScrolling("footer", "#footer");
    },
    closeModal() {
      this.elems.modal.root.classList.remove("modal--open");
      this.elems.page.classList.remove("page--modal-is-open");
      this.modalPlayer.pause();
    },
    openModal: function() {
      this.elems.modal.root.classList.add("modal--open");
      this.elems.page.classList.add("page--modal-is-open");
      this.modalPlayer.play();
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") this.closeModal();
      });

      trackCustomEvent("Played emotion video");
    },
  },
  mounted() {
    const Player = require("@vimeo/player").default;
    const Vimeo = { Player };

    this.elems.modal.root = document.querySelector(".modal");
    this.elems.modal.vimeoVideo = document.querySelector(
      ".modal__video-iframe"
    );
    this.elems.page =
      typeof document === "object" && document.querySelector(".page");

    this.modalPlayer = new Vimeo.Player(this.elems.modal.vimeoVideo);

    this.analyticsRelated();

    this.state = stateM8t.subscribe((state) => {
      this.state = state;
    });

    onMounted();
  },
};
</script>
