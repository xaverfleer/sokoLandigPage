/* eslint-disable no-irregular-whitespace */
import routes from "./routes";
import formEntries from "./formEntries";

const appData = {
  course: {
    block01: {
      sections: {
        section11: {
          id: 0,
          blocktitle: {
            supertitle: "Kursblock 1",
            main: "Innere Stärke und Gleichwürdigkeit",
          },
          checklist: {
            pretext: "In diesem Kursblock…",
            entries: [
              {
                id: 0,
                text: `...verbindest du dich mit deinem Baby, in dem du dir überlegst, was du ihm von Herzen für sein Leben wünschst (Video 1.1)`,
              },
              {
                id: 1,
                text: `...erfährst du, was dein Baby braucht, um innerlich stark zu werden (Video 1.2)`,
              },
              {
                id: 2,
                text: `...erklären wir, was es bedeutet, das Baby als gleichwürdiges Subjekt zu sehen (Video 1.3)`,
              },
              {
                id: 3,
                text: `...zeigen wir anhand eines Praxisbeispiels auf, was subjektorientierte Kommunikation in der Praxis heissen kann (Video 1.4)`,
              },
              {
                id: 4,
                text: `...lernst du anhand konkreter Sätzen den Unterschied zwischen einer gleichwürdigen und einer herablassenden Sprache kennen (Video 1.5)`,
              },
              {
                id: 5,
                text: `...zeigen wir auf, mit welchen (Erziehungs-)Mittel wir die innere Stärke eines Babys schwächen (Video 1.6; in Produktion)`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so1-Fahrplan.pdf",
              text: "Fahrplan – Kursblock 1",
              type: "roadmap",
            },
          ],
        },
        section12: {
          id: 1,
          title: {
            main: "Einstiegsübung – Ich wünsche dir...",
            videoName: "(Video 1.1)",
          },
          video: { ref: "https://player.vimeo.com/video/395825527" },
          documents: [
            {
              href: "/documents/so1-Übung-1.1.pdf",
              text: "Übung 1.1 - Ich wünsche dir...",
              type: "practice",
            },
          ],
        },
        section13: {
          id: 2,
          title: {
            main: "Innere Stärke",
            videoName: "(Video 1.2)",
          },
          video: { ref: "https://player.vimeo.com/video/412779252" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Damit Kinder zu selbständigen Erwachsenen heranwachsen, die ein gesundes, glückliches und erfüllendes Leben führen können, brauchen sie genügend innere Stärke.`,
              },
              {
                id: 1,
                text: `Wichtige Wurzeln der inneren Stärke sind ein differenziertes Selbstbewusstsein (ich kenne mich), ein positiver und möglichst bedingungsloser Selbstwert (ich bin gut, so wie ich bin) sowie ein gesundes Selbstvertrauen (ich vertraue in meine Fähigkeiten).`,
              },
              {
                id: 2,
                text: `Die Art und Weise, wie wir mit Kindern kommunizieren, kann sie innerlich stärken – oder auch nicht.`,
              },
              {
                id: 3,
                text: `Kommunikationsstrategien können uns helfen, das Kind innerlich zu stärken.`,
              },
              {
                id: 4,
                text: `Hinter den Kommunikationsstrategien der subjektorientierten Kommunikation steht die Grundhaltung, unser Kind als gleichwürdiges Subjekt wahrzunehmen und zu behandeln.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so1-Übung-1.2.pdf",
              text: "Übung 1.2 - Lina weint... und jetzt?",
              type: "practice",
            },
            {
              href: "/documents/so1-Strategiekarte-Essenz-Strategie.pdf",
              text: "Strategiekarte: Die Essenz-Strategie – Kursblock 1",
              type: "strategy",
            },
          ],
        },
        section14: {
          id: 3,
          title: {
            main: "Gleichwürdigkeit",
            videoName: "(Video 1.3)",
          },
          video: { ref: "https://player.vimeo.com/video/420457933" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Hinter den Strategien der subjektorientierten Kommunikation steht die Grundhaltung, dass wir unser Baby von Anfang an als gleichwürdiges Subjekt wahrnehmen und behandeln.`,
              },
              {
                id: 1,
                text: `Unser Baby ist kein Objekt, das wir nach unseren Vorstellungen formen und steuern können. Es ist ein Subjekt mit eigenen Gedanken, Gefühlen und Bedürfnissen. Salopp gesagt: Es ist eine fühlende Person und kein Roboter.`,
              },
              {
                id: 2,
                text: `Unser Baby ist gleichwürdig. Das heisst, dass seine Innenwelt (Gedanken, Gefühle, Bedürfnisse, Wünsche etc.) gleich wichtig ist, wie unsere eigene Innenwelt. Wir müssen sie in unseren Handlungen zu verstehen versuchen und mitberücksichtigen.`,
              },
              {
                id: 3,
                text: `Gleichwürdigkeit ist nicht das gleiche wie Gleichgültigkeit, Gleichheit oder Gleichberechtigung.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so1-Übung-1.3a.pdf",
              text: "Übung 1.3a - Selbstwas? Schlüsselbegriffe klären",
              type: "practice",
            },
            {
              href: "/documents/so1-Übung-1.3b.pdf",
              text: "Übung 1.3b - Vom Objekt zum Subjekt",
              type: "practice",
            },
            {
              href: "/documents/so1-Übung-1.3c.pdf",
              text: "Übung 1.3c - Gleichwürdigkeit in meiner Kindheit",
              type: "practice",
            },
            {
              href: "/documents/so1-Erinnerungskarte.pdf",
              text: "Erinnerungskarte: Innere Stärke – Kursblocks 1",
              type: "strategy",
            },
          ],
        },
        section15: {
          id: 4,
          title: {
            main: "Lina weint",
            videoName: "(Video 1.4)",
          },
          video: { ref: "https://player.vimeo.com/video/420459304" },
          documents: [
            {
              href: "/documents/so1-Übung-1.4.pdf",
              text: "Übung 1.4 - Das ist ganz leicht...",
              type: "practice",
            },
          ],
        },
        section16: {
          id: 5,
          title: {
            main: "Herablassende vs. gleichwürdige Sprache",
            videoName: "(Video 1.5)",
          },
          video: { ref: "https://player.vimeo.com/video/411396939" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Subjektorientiert zu kommunizieren bedeutet, eine gleichwürdige Beziehung zum Baby aufzubauen und dies über eine gleichwürdige Sprache auszudrücken.`,
              },
              {
                id: 1,
                text: `Eine gleichwürdige Sprache findet auf Augenhöhe statt, sie ist nicht herablassend.              `,
              },
              {
                id: 2,
                text: `Wir haben vermutlich alle schon einmal herablassende Sätze gegenüber Kindern gehört oder selbst benutzt. Einige Beispiele findest du in diesem Video.`,
              },
              {
                id: 3,
                text: `Wir müssen von uns selbst nicht Perfektion erwarten und auch nicht anstreben, immer genau das richtig zu sagen. Dadurch würden wir dem Baby vermitteln, dass es uns mehr um Selbstoptimierung geht anstatt um seine Bedürfnisse.`,
              },
              {
                id: 4,
                text: `Es ist kein Drama, wenn uns manchmal herablassende Sätze herausrutschen. Wenn wir grundsätzlich eine gleichwürdige Beziehung leben, hält diese Beziehung auch einige herablassende Aussagen aus.`,
              },
              {
                id: 5,
                text: `Falls wir uns bei einer herablassenden Aussage ertappen und diese korrigieren wollen, können wir einfach eine gleichwürdigere Alternative direkt hinterherliefern.`,
              },
              {
                id: 6,
                text: `Wir können uns auch nachträglich entschuldigen, wenn wir das für angemessen halten.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so1-Übung-1.5.pdf",
              text: "Übung 1.5 - Hilfe, ein Fehler!",
              type: "practice",
            },
            {
              href: "/documents/so1-Memokarten.pdf",
              text:
                "Memokarten: herablassende vs. gleichwürdige Sprache - Kursblock 1",
              type: "memo",
            },
          ],
        },
        section17: {
          id: 6,
          title: {
            main: "Was schwächt den inneren Baum?",
            videoName: "(Video 1.6 - In Produktion)",
          },
          documents: [
            {
              href: "/documents/so1-Übung-1.6.pdf",
              text: "Übung 1.6 - Hinderliche Ansichten",
              type: "practice",
            },
          ],
        },
        section18: {
          id: 7,
          title: { main: "Sinnvolle Lernstrategien nutzen" },
          documents: [
            {
              href: "/documents/so1-Vertiefung-Lernstrategien.pdf",
              text: "Vertiefung: Lernstrategien – Kursblocks 1",
              type: "further-information",
            },
            {
              href: "/documents/so1-Übung-1.7.pdf",
              text: "Übung 1.7 - Step by Step... Schwerpunkte setzen",
              type: "practice",
            },
            {
              href: "/documents/so1-Übung-1.8.pdf",
              text:
                "Übung 1.8 - Ich erinnere mich... Erinnerungshilfen schaffen",
              type: "practice",
            },
            {
              href: "/documents/so1-Lernprotokoll.pdf",
              text: "Lernprotokoll – Kursblocks 1",
              type: "practice",
            },
          ],
        },
        section19: {
          id: 8,
          title: { main: "Weitere Dokumente" },
          documents: [
            {
              href: "/documents/so1-Vertiefung.pdf",
              text: "Vertiefung: Sichere Bindung – Kursblocks 1",
              type: "further-information",
            },
            {
              href: "/documents/so1-Zusammenfassung.pdf",
              text: "Zusammenfassung – Kursblock 1",
              type: "further-information",
            },
            {
              href: "/documents/so1-Uebungsdossier.pdf",
              text: "Übungsdossier mit allen Übungen – Kursblock 1",
              type: "practice",
            },
            {
              href: "/documents/so1-Literaturliste.pdf",
              text: "Literaturliste: Bücher, die weiterhelfen",
              type: "further-information",
            },
          ],
        },
      },
    },
    block02: {
      sections: {
        section21: {
          id: 0,
          blocktitle: {
            supertitle: "Kursblock 2",
            main: "Mit dem Baby interagieren...",
          },
          checklist: {
            pretext: "In diesem Kursblock…",
            entries: [
              {
                id: 0,
                text: `...verbindest du dich mit deinem Baby, in dem du in drei Einstiegsübungen seine Perspektive einnimmst (Video 2.1)`,
              },
              {
                id: 1,
                text: `...lernst du die Objekt- die Geräusch- und die Gebärdensprache als Ergänzung zur gesprochenen Sprache kennen (Video 2.2)`,
              },
              {
                id: 2,
                text: `...erfährst du, wie du subjektorientiert mit dem Baby interagieren kannst, wenn du etwas an deinem Baby tust, z.B. wickeln (Video 2.3)`,
              },
              {
                id: 3,
                text: `...zeigen wir dir, wie du subjektorientiert mit dem Baby interagieren kannst, wenn du etwas neben deinem Baby tust (Video 2.4)`,
              },
              {
                id: 4,
                text: `...zeigen wir auf, wie du subjektorientiert mit dem Baby interagieren kannst, wenn du das Baby verlässt (Video 2.5)`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so2-Fahrplan.pdf",
              text: "Fahrplan – Kursblock 2",
              type: "roadmap",
            },
          ],
        },
        section22: {
          id: 1,
          title: { main: "Einstiegsübung", videoName: "(Video 2.1)" },
          video: { ref: "https://player.vimeo.com/video/410677081" },
          documents: [
            {
              href: "/documents/so2-Einstiegsuebung1.pdf",
              text: "Einstiegsübung 1 – Kursblock 2",
              type: "practice",
            },
            {
              href: "/documents/so2-Einstiegsuebung2.pdf",
              text: "Einstiegsübung 2 – Kursblock 2",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.1.pdf",
              text: "Übung 2.1 - Was tust du da?",
              type: "practice",
            },
            {
              href: "/documents/so2-Vertiefung-Baby-led-weaning.pdf",
              text: "Vertiefung: Baby led weaning – Kursblocks 2",
              type: "further-information",
            },
          ],
        },
        section23: {
          id: 2,
          title: { main: "Mit dem Baby sprechen", videoName: "(Video 2.2)" },
          video: { ref: "https://player.vimeo.com/video/410677189" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Babys erlernen Sprache wenn wir mit ihnen sprechen. Zuerst bauen sie ein passives Wissen und Verstehen auf. Sie versehen immer deutlich mehr als dass sie selbst mitteilen können.`,
              },
              {
                id: 1,
                text: `Die babyangepasste Sprechweise (hohe Stimme, Wiederholungen, starke Betonungen etc.) bindet die Aufmerksamkeit des Babys und kann beim frühen Spracherwerb hilfreich sein. Wir müssen sie also nicht unterdrücken, sie verschwindet von selbst, wenn das Baby älter wird.`,
              },
              {
                id: 2,
                text: `Eine babyangepasste Sprache (Verwendung von Wörtern und Grammatik, die es in der echten Sprache nicht gibt, z.B. «Mama muss Pipi», statt «Ich muss mal pinkeln gehen»), ist unnötig und nicht förderlich für den Spracherwerb.`,
              },
              {
                id: 3,
                text: `Ergänzend zur gesprochenen Sprache können wir die Objektsprache, die Geräuschsprache und die Gebärdensprache nutzen. Diese Ergänzungen helfen dem Baby, aus dem Fluss an Silben in einem Satz einzelne Schlüsselwörter zu isolieren.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so2-Übung-2.2a.pdf",
              text: "Übung 2.2a - Wie sag ich das?",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.2b.pdf",
              text: "Übung 2.2b - Gebärdensprache üben",
              type: "practice",
            },
            {
              href: "/documents/so2-Vertiefung-Gebaerdensprache.pdf",
              text: "Vertiefung: Gebärdensprache – Kursblock 2",
              type: "further-information",
            },
          ],
        },
        section24: {
          id: 3,
          title: {
            main: "...wenn wir etwas am Baby tun",
            videoName: "(Video 2.3)",
          },
          video: { ref: "https://player.vimeo.com/video/410677404" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Wenn wir Situationen wie wickeln oder anziehen als eine schöne Zeit der Zweisamkeit und Interaktion ansehen, können sie zu wertvollen Alltagsmomenten werden.`,
              },
              {
                id: 1,
                text: `Wenn wir etwas am Baby tun (z.B. wickeln, baden, in den Autositz einbinden), ist es wichtig, das Baby nicht wie ein Objekt (etwa eine Puppe) zu behandeln, sondern mit ihm als Subjekt in eine Interaktion zu treten.`,
              },
              {
                id: 2,
                text: `In dem wir vor unserer Handlung Kontakt herstellen, unsere Vorhaben ankünden und während dem Vorhaben die Handlung kommentieren, treten wir in eine Interaktion mit dem Baby. Wenn wir seine Reaktionen abwarten, können wir ihm die Möglichkeit geben, mitzuarbeiten. (→ Strategiekarte)`,
              },
              {
                id: 3,
                text: `Wenn das Baby sich wehrt und nicht kooperiert, können wir uns fragen, wie die Sicht des Babys aussieht und ob das Baby möglicherweise schon zu viel kooperiert hat. (→ Strategiekarte)`,
              },
              {
                id: 4,
                text: `Wenn sich das Baby wehrt, können wir versuchen, das Vorhaben spielerischer umzusetzen, nach Alternativen zu suchen oder wenn es nicht anders geht, das Baby abzulenken oder, wenn nichts anderes hilft, dich mit so wenig Kraft wie nötig durchzusetzen.`,
              },
              {
                id: 5,
                text: `Spielerische Aktivitäten (z.B. nichtdirektive kindzentrierte Spiele oder Machtumkehrspiele) in entspannten Situationen helfen, das Autonomiebedürfnis des Babys zu nähren, damit es in Situationen, in denen wir etwas an ihm tun, weniger danach streben muss.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so2-Übung-2.3a.pdf",
              text: "Übung 2.3a - Lina geht zum Arzt",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.3b.pdf",
              text: "Übung 2.3b - Ich nehme mir Zeit!",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.3c.pdf",
              text: "Übung 2.3c - Es kooperiert nicht!",
              type: "practice",
            },
            {
              href:
                "/documents/so2-Strategiekarte-Wenn-wir-etwas-am-Baby-tun.pdf",
              text:
                "Strategiekarte: ...wenn wir etwas am Baby tun – Kursblock 2",
              type: "strategy",
            },
            {
              href:
                "/documents/so2-Strategiekarte-Wenn-das-Baby-nicht-kooperiert.pdf",
              text:
                "Strategiekarte: ...wenn das Baby nicht kooperiert – Kursblock 2",
              type: "strategy",
            },
          ],
        },
        section25: {
          id: 4,
          title: {
            main: "...wenn wir etwas neben dem Baby tun",
            videoName: "(Video 2.4)",
          },
          video: { ref: "https://player.vimeo.com/video/410677798" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Wenn sich das Baby für unsere alltäglichen Handlungen (kochen, putzen, aufräumen) interessiert, können wir es in die Handlung miteinbeziehen, indem wir: unser Handeln kommentieren, ihm die Objekte, mit denen wir handeln, zu erforschen geben oder ihm die Möglichkeit geben, die Tätigkeit selbst zu erforschen. (→ Strategiekarte)`,
              },
              {
                id: 1,
                text: `Wenn wir das Baby mithelfen lassen, sollten wir uns mit Belehrungen zurückhalten. Durch Belehrungen kann das Baby das Interesse verlieren und sich als inkompetent wahrnehmen.`,
              },
              {
                id: 2,
                text: `Wenn wir das Baby mithelfen lassen, sollten wir uns auch mit Belohnungen (etwa Lob) zurückhalten. Durch eine Belohnung riskieren wir, dass das Baby nur noch hilft, wenn es eine Belohnung erwarten kann und dass es sich nur dann wertvoll fühlt, wenn es hilfsbereit ist.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so2-Übung-2.4a.pdf",
              text: "Übung 2.4a - Lina in der Küche",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.4b.pdf",
              text: "Übung 2.4b - Belehrungs- und Belohnungsfalle",
              type: "practice",
            },
            {
              href:
                "/documents/so2-Strategiekarte-Wenn-wir-etwas-neben-dem-Baby-tun.pdf",
              text:
                "Strategiekarte: ...wenn wir etwas neben dem Baby tun – Kursblock 2",
              type: "strategy",
            },
          ],
        },
        section26: {
          id: 5,
          title: {
            main: "...wenn wir das Baby verlassen",
            videoName: "(Video 2.5)",
          },
          video: { ref: "https://player.vimeo.com/video/410678171" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Trennungen sind für Babys oft sehr schlimm und lösen enormen Stress aus.`,
              },
              {
                id: 1,
                text: `Die Trennungsangst ist tief in seinen Genen verankert: Für ein Baby in einem Jäger- und Sammlerclan war jedes Alleinsein lebensbedrohlich.
                `,
              },
              {
                id: 2,
                text: `Trennungsangst kann man nicht abtrainieren, indem man das Baby allein weinen lässt: Babys, die oft allein gelassen werden, weinen zwar irgendwann nicht mehr, empfinden den Stress aber genauso weiter. Sie haben nur gelernt, dass niemand reagiert, wenn sie weinen.`,
              },
              {
                id: 3,
                text: `Die Trennungsangst nimmt ab dem 6. Monat entwicklungsbedingt oft zu.`,
              },
              {
                id: 4,
                text: `Nur durch ein grosses Vertrauen in die Verfügbarkeit seiner Bezugsperson (sichere Bindung), kann das Baby mit der Zeit mit einem guten Gefühl mutiger und selbständiger werden und die Trennungsangst überwinden.`,
              },
              {
                id: 5,
                text: `Ein immer gleich ablaufendes Muster bei einer Trennung kann dem Baby Verlässlichkeit und Sicherheit geben. Dazu können wir zum Beispiel Kontakt aufnehmen, die Trennung ankünden und uns nach der Trennung wieder zurückmelden. (→ Strategiekarte)`,
              },
              {
                id: 6,
                text: `Wenn wir das Baby einer anderen Bezugsperson zur Betreuung abgeben, sollten wir eine gewisse Zeit zur Eingewöhnung einplanen, damit das Baby Vertrauen aufbauen kann.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so2-Übung-2.5a.pdf",
              text: "Übung 2.5a - Linas Grosseltern",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.5b.pdf",
              text: "Übung 2.5b - Erziehungsmythen hinterfragen",
              type: "practice",
            },
            {
              href:
                "/documents/so2-Strategiekarte-Wenn-wir-das-Baby-verlassen.pdf",
              text:
                "Strategiekarte: ...wenn wir das Baby verlassen – Kursblock 2",
              type: "strategy",
            },
          ],
        },
        section27: {
          id: 6,
          title: {
            main: "Dos and Don'ts?",
            videoName: "(Video 2.6)",
          },
          video: { ref: "https://player.vimeo.com/video/418650809" },
          documents: [
            {
              href: "/documents/so2-Übung-2.6a.pdf",
              text: "Übung 2.6a - Step by Step... Schwerpunkte setzen",
              type: "practice",
            },
            {
              href: "/documents/so2-Übung-2.6b.pdf",
              text:
                "Übung 2.6b - Ich erinnere mich... Erinnerungshilfen schaffen",
              type: "practice",
            },
            {
              href: "/documents/so2-Lernprotokoll.pdf",
              text: "Lernprotokoll – Kursblocks 2",
              type: "practice",
            },
          ],
        },
        section28: {
          id: 7,
          title: {
            main: "Weitere Dokumente",
          },
          documents: [
            {
              href: "/documents/so2-Uebungsdossier.pdf",
              text: "Übungsdossier mit allen Übungen – Kursblock 2",
              type: "practice",
            },
            {
              href: "/documents/so2-Zusammenfassung.pdf",
              text: "Zusammenfassung – Kursblock 2",
              type: "further-information",
            },
          ],
        },
      },
    },
    block03: {
      sections: {
        section31: {
          id: 0,
          blocktitle: {
            supertitle: "Kursblock 3",
            main: "Das Baby verstehen...",
          },
          checklist: {
            pretext: "In diesem Kursblock…",
            entries: [
              {
                id: 0,
                text:
                  "…verbindest du dich mit deinem Baby, indem du dir überlegst, welche Reaktion du dir von einer Freundin wünschst, wenn es dir nicht gut geht (Video 3.1)",
              },
              {
                id: 1,
                text:
                  "…erfährst du welche Bedürfnisse Babys grundsätzlich haben und wie du darauf eingehen kannst (Video 3.2)",
              },
              {
                id: 2,
                text:
                  "…zeigen wir, wie wir die Bedürfnisse unseres Babys aufgrund seiner leisen Signale erkennen können (Video 3.3)",
              },
              {
                id: 3,
                text:
                  "…lernst du, warum Babys weinen und wie du feinfühlig und angemessen auf das Baby reagieren kannst, wenn das Baby weint (Video 3.4)",
              },
              {
                id: 4,
                text:
                  "…erfährst du, wie verschiedene Temperamente sowie kognitive Entwicklungssprünge mitbeeinflussen, wie anspruchsvoll unser Baby ist (Video 3.5)",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so3-Fahrplan.pdf",
              text: "Fahrplan – Kursblock 3",
              type: "roadmap",
            },
          ],
        },
        section32: {
          id: 1,
          title: {
            main: "Einstiegsübung – Was brauche ich?",
            videoName: "(Video 3.1)",
          },
          video: { ref: "https://player.vimeo.com/video/418114230" },
          documents: [
            {
              href: "/documents/so3-Übung-3.1.pdf",
              text: "Übung 3.1 - Was brauche ich?",
              type: "practice",
            },
          ],
        },
        section33: {
          id: 2,
          title: {
            main: "Die Bedürfnisse des Babys sind wichtig",
            videoName: "(Video 3.2)",
          },
          video: { ref: "https://player.vimeo.com/video/418114362" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Die Bedürfnisse von Babys lassen sich grob in drei Kategorien zuteilen (a) physiologische Bedürfnisse: z.B. Nahrung, Wärme, Schlaf, Gesundheit, Schmerzfreiheit, (b) Bindungs- und Nähebedürfnisse: z.B. Körpernähe, Interaktion, Schutz vor zu vielen Reizen und (c) Autonomie- und Erkundungsbedürfnisse: z.B. freies Spielen, Stillen nach Bedarf`,
              },
              {
                id: 1,
                text: `Babys können ihr Autonomie- und Erkundungsbedürfnis nur dann voll ausleben, wenn ihre Bindungs- und Nähebedürfnisse befriedigt sind. Erst so fühlen sie sich sicher genug, um mit einem guten Gefühl immer mutiger und selbständiger zu werden.`,
              },
              {
                id: 2,
                text: `Gute Möglichkeiten, die Bindungs- und Nähebedürfnisse des Babys zu stillen, sind z.B., rasch auf die physiologischen Bedürfnisse des Babys zu reagieren, das Baby nahe bei sich schlafen zu lassen, z.B. im Familienbett oder im Beistellbett (siehe dazu unser PDF «Sicherheitsregeln für Co‑Sleeping»), das Baby häufig in einem Tragetuch oder in einer Traghilfe zu tragen und immer mal wieder in spielerische und kommunikative Interaktionen mit dem Baby zu treten.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so3-Übung-3.2a.pdf",
              text: "Übung 3.2a - Lina ist müde",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.2b.pdf",
              text: "Übung 3.2b - Bindung vs. Autonomie, wie war es bei mir?",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.2c.pdf",
              text: "Übung 3.2c - Was gebe ich weiter?",
              type: "practice",
            },
            {
              href: "/documents/so3-Vertiefung-co-sleeping.pdf",
              text: "Vertiefung: Sicherheitsregeln Co‑Sleeping – Kursblocks 3",
              type: "further-information",
            },
          ],
        },
        section34: {
          id: 3,
          title: {
            main: "...wenn das Baby mit leisen Signalen kommuniziert",
            videoName: "(Video 3.3)",
          },
          video: { ref: "https://player.vimeo.com/video/418114671" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Babys kommunizieren von Anfang an nicht nur durch weinen, sondern auch durch leise Signale mit uns. Wenn wir auf die leisen Signale angemessen reagieren, benutzt das Baby sie mit der Zeit immer differenzierter.`,
              },
              {
                id: 1,
                text: `Um die leisen Signale zu verstehen, müssen wir sie aktiv entschlüsseln: Wir müssen sie bewusst wahrnehmen, vermuten was sie bedeuten könnten, unsere Vermutung durch eine Reaktion testen und dann wieder beobachten, ob wir richtig lagen oder ob wir eine neue Vermutung brauchen. (→Strategiekarte)`,
              },
              {
                id: 2,
                text: `Beim Entschlüsseln der Signale kann es uns helfen, über die Körpersprache des Babys zu verstehen, in welchem wachen Bewusstseinszustand es gerade ist. Man kann den ruhigen, den aktiven und den schläfrigen Wachzustand unterscheiden.`,
              },
              {
                id: 3,
                text: `Beim Entschlüsseln kann es auch helfen, häufige konkrete Signale zu kennen: Beispiele sind, dass viele Babys an ihrer Hand lutschen, wenn sie Hunger haben, an ihrem Kopf oder in den Augen reiben, wenn sie müde sind oder den Kopf wegdrehen und ins Leere starren wenn sie überreizt sind.`,
              },
              {
                id: 4,
                text: `Es ist für die gesunde Entwicklung des Babys zwar elementar, dass wir rasch, liebevoll und angemessen auf die Bedürfnisse des Babys eingehen. Doch wir müssen nicht zu jedem Wunsch ja sagen: Bedürfnisse und Wünsche sind nicht das gleiche.`,
              },
              {
                id: 5,
                text: `Wenn wir auf ein Bedürfnis reagieren, können wir dem Baby auch immer die Möglichkeit geben, das, was es bereits selbst tun kann, um sein Bedürfnis zu befriedigen, auch selbst beizutragen. Das ist nährend für das Autonomiebedürfnis.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so3-Übung-3.3a.pdf",
              text: "Übung 3.3a - Lina und die Rassel",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.3b.pdf",
              text: "Übung 3.3b - Die Signale meines Babys",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.3c.pdf",
              text: "Übung 3.3c - Aktives Lesen",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.3d.pdf",
              text: "Übung 3.3d - Bedürfnisse hinter Wünschen erkennen",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.3e.pdf",
              text: "Übung 3.3e - Kompromisse finden",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.3f.pdf",
              text: "Übung 3.3f - Mein Baby kann das allein",
              type: "practice",
            },
            {
              href: "/documents/so3-Strategiekarte-Aktives-Lesen.pdf",
              text: "Strategiekarte: Aktives Lesen – Kursblock 3",
              type: "strategy",
            },
          ],
        },
        section35: {
          id: 4,
          title: {
            main: "...wenn das Baby weint",
            videoName: "(Video 3.4)",
          },
          video: { ref: "https://player.vimeo.com/video/418115074" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Babys weinen nie ohne Grund und ganz sicher nie, um uns zu manipulieren, zu provozieren, zu testen oder zu erpressen. Dazu sind sie rein kognitiv noch gar nicht in der Lage.`,
              },
              {
                id: 1,
                text: `Die Gründe, warum Babys weinen, können wir grob in drei Kategorien einteilen: 1. Ankündigung eines Bedürfnisses: Nahrung, Schlaf, Schmerzlinderung, Schutz vor Reizen etc. 2. Stressabbau durch das Weinen: Kein unmittelbares Bedürfnis ausser Nähe und Präsenz 3. Reaktion auf Stress und Unruhe der Bezugsperson (Resonanzweinen)`,
              },
              {
                id: 2,
                text: `Das Weinen von Babys kann bei uns Stress verursachen. Damit wir auf das Weinen nicht hektisch mit einer Stressreaktion reagieren, haben wir den WARUM-Prozess entwickelt.`,
              },
              {
                id: 3,
                text: `Bei diesem Prozess geht es nicht darum, das Baby möglichst schnell ruhig zu stellen, sondern herauszufinden, warum das Baby weint und ruhig und angemessen darauf zu reagieren. Der Prozess besteht aus 4 Schritten: (→Strategiekarte). 1. WAHRNEHMEN: «ich höre, dass du weinst»; durchatmen, sich auf das Weinen einstellen. 2. AKZEPTIEREN: «es ist in Ordnung, dass du weinst»; sich einfühlen und mit dem Baby verbinden. 3. REAGIEREN: «ich will wissen, wie ich dir helfen kann»; aktives Entschlüsseln des Weinens. 4. UMSORGEN: «ich gebe dir, was du brauchst»; Bedürfnis befriedigen, Zuneigung schenken.`,
              },
              {
                id: 4,
                text: `Wir sollten vorsichtig sein mit schnellen Beruhigungsmethoden wie Schnuller, Stillen, obwohl das Baby keinen Hunger hat, Ablenkung durch Entertainment, wildes Herumhüpfen oder ähnliches. Damit teilen wir nämlich dem Baby mit, dass sein Weinen nicht sein darf. `,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so3-Übung-3.4a.pdf",
              text: "Übung 3.4a - Lina weint",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.4b.pdf",
              text: "Übung 3.4b - Erfahrungen mit dem WARUM-Prozess sammeln",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.4c.pdf",
              text: "Übung 3.4c - So weint mein Baby",
              type: "practice",
            },
            {
              href: "/documents/so3-Strategiekarte-WARUM-Prozess.pdf",
              text: "Strategiekarte: Der WARUM-Prozess – Kursblock 3",
              type: "strategy",
            },
          ],
        },
        section36: {
          id: 5,
          title: {
            main: "...wenn das Baby «schwierig» ist",
            videoName: "(Video 3.5)",
          },
          video: { ref: "https://player.vimeo.com/video/418115509" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text: `Wenn wir Babys als «schwierig» wahrnehmen, kann das an ihrem Temperament liegen. Etwa 10–20% der Babys kommen mit einem «hoch reaktiven» Temperament zur Welt. Hoch reaktive Babys nehmen ihre Umwelt sehr aktiv wahr und sind dadurch schnell überreizt und häufig unzufrieden.`,
              },
              {
                id: 1,
                text: `Ob wir unser Baby als «schwierig» empfinden, hängt natürlich auch davon ab, welche Vorstellungen wir von einem normalen Baby haben.`,
              },
              {
                id: 2,
                text: `Wenn wir ein Baby plötzlich als «schwieriger» wahrnehmen als sonst, kann es sein, dass es gerade einen Entwicklungssprung durchmacht.`,
              },
              {
                id: 3,
                text: `Bis zu seinem 20. Lebensmonat macht ein Baby zehn kognitive Entwicklungssprünge durch und zwar ungefähr in den Wochen 5, 8, 12, 19, 26, 37, 46, 55, 64 und 74.`,
              },
              {
                id: 4,
                text: `In den Tagen und Wochen vor diesen Entwicklungssprüngen ist das Baby meist anhänglicher, weinerlicher, fordernder, empfindlicher und insgesamt «anstrengender».`,
              },
              {
                id: 5,
                text: `Der Grund dafür ist, dass bei jedem Entwicklungssprung das bisherige Weltbild des Babys auf den Kopf gestellt wird, weil es dank Reifungsprozessen in seinem Gehirn neue Dinge wahrnehmen und verstehen kann. Es ist verunsichert und muss sich in der Welt neu orientierten. Bindungs- und Nähebedürfnisse sind stark ausgeprägt.`,
              },
              {
                id: 6,
                text: `Ist ein Sprung geschafft, ist ein Baby oft selbständiger und friedlicher als vorher. Es hat neue Fähigkeiten erworben und interessiert sich nun für neue Objekte oder Tätigkeiten. Autonomie- und Erkundungsbedürfnisse stehen nun wieder mehr im Fokus.`,
              },
            ],
          },
          documents: [
            {
              href: "/documents/so3-Übung-3.5a.pdf",
              text: "Übung 3.5a - Das normale Baby",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.5b.pdf",
              text: "Übung 3.5b - Entwicklungsschritte protokollieren",
              type: "practice",
            },
            {
              href: "/documents/so3-Vertiefung-Entwicklungsspruenge.pdf",
              text: "Vertiefung: Übersicht Entwicklungssprünge – Kursblocks 3",
              type: "further-information",
            },
          ],
        },
        section37: {
          id: 6,
          title: {
            main: "Dos & Don'ts",
            videoName: "(Video 3.6 - In Produktion)",
          },
          documents: [
            {
              href: "/documents/so3-Übung-3.6a.pdf",
              text: "Übung 3.6a - Step by Step... Schwerpunkte setzen",
              type: "practice",
            },
            {
              href: "/documents/so3-Übung-3.6b.pdf",
              text:
                "Übung 3.6b - Ich erinnere mich... Erinnerungshilfen schaffen",
              type: "practice",
            },
            {
              href: "/documents/so3-Lernprotokoll.pdf",
              text: "Lernprotokoll – Kursblock 3",
              type: "practice",
            },
          ],
        },
        section38: {
          id: 7,
          title: {
            main: "Weitere Dokumente",
          },
          documents: [
            {
              href: "/documents/so3-Uebungsdossier.pdf",
              text: "Übungsdossier mit allen Übungen – Kursblock 3",
              type: "practice",
            },
            {
              href: "/documents/so3-Zusammenfassung.pdf",
              text: "Zusammenfassung – Kursblock 3",
              type: "further-information",
            },
          ],
        },
      },
    },
    block04: {
      sections: {
        section41: {
          id: 0,
          blocktitle: {
            supertitle: "Kursblock 4",
            main: "Auf mich selbst achten...",
          },
          checklist: {
            pretext: "In diesem Kursblock…",
            entries: [
              {
                id: 0,
                text:
                  "...nimmst du dir selbst gegenüber eine wertschätzende Haltung ein, indem du dir überlegst, wie du mit einem guten Freund kommunizieren würdest (Video 4.1)",
              },
              {
                id: 1,
                text:
                  "...erfährst du warum es so anstrengend sein kann, ein Baby zu begleiten und warum es wichtig, ist dass du dich selbst nicht vernachlässigst (Video 4.2)",
              },
              {
                id: 2,
                text:
                  "...erhältst du Ideen, wie du dein Selbstbewusstsein in ruhigen Momenten, in stressigen Momenten und nach stressigen Momenten nähren kannst (Video 4.3)",
              },
              {
                id: 3,
                text:
                  "...lernst du Möglichkeiten kennen, wie du deinen Selbstwert in ruhigen Momenten, in stressigen Momenten und nach stressigen Momenten nähren kannst (Video 4.4)",
              },
              {
                id: 4,
                text:
                  "...zeigen wir dir, worauf es ankommt, wenn du deine eigenen Grenzen schützt, indem du Nein zu einem Wunsch oder einer Verhaltensweise deines Babys sagst (Video 4.5)",
              },
              {
                id: 5,
                text:
                  "...bekommst du Tipps, wie du dein Selbstvertrauen in ruhigen Momenten, in sehr stressigen Momenten und nach stressigen Momenten nähren kannst (Video 4.6)",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so4-Fahrplan.pdf",
              text: "Fahrplan – Kursblock 4",
              type: "roadmap",
            },
            {
              href: "/documents/so4-Zusammenfassung.pdf",
              text: "Zusammenfassung – Kursblock 4",
              type: "further-information",
            },
            {
              href: "/documents/so4-Uebungsdossier.pdf",
              text: "Übungsdossier (PDF) – Kursblock 4",
              type: "practice",
            },
          ],
        },
        section42: {
          id: 1,
          title: {
            main: "Mein guter Freund",
            videoName: "(Video 4.1)",
          },
          video: { ref: "https://player.vimeo.com/video/428741631" },
        },
        section43: {
          id: 2,
          title: {
            main: "Du bist wichtig!",
            videoName: "(Video 4.2)",
          },
          video: { ref: "https://player.vimeo.com/video/428741670" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Unser Baby ist genetisch ein Steinzeitbaby, das darauf programmiert ist, ständig die Nähe zu einer erwachsenen Person zu suchen.",
              },
              {
                id: 1,
                text:
                  "Die Idee, dass man ein so abhängiges Steinzeitbaby als Paar – und die meiste Zeit davon als Einzelperson betreut – ist sehr neu: Eltern waren die grösste Zeit der Menschheitsgeschichte in grössere Gruppen eingebunden.",
              },
              {
                id: 2,
                text:
                  "Unser Gehirn ist nicht dazu gemacht, mit der Menge an Stress umzugehen, die ein modernes Leben mit einem Baby potenziell mit sich bringt. ",
              },
              {
                id: 3,
                text:
                  "Wenn wir sowieso schon im Dauerstress sind (zu wenig Schlaf, zu viel Arbeit, zu viel Zeitdruck, zu wenig Vernetzung...), erscheinen uns Kleinigkeiten als riesige Bedrohung («Das schaff ich nicht auch noch!»).",
              },
              {
                id: 4,
                text:
                  "Fühlt sich unser Gehirn zu stark bedroht, setzt es eine Stressreaktion in Gang: Wir reagieren automatisch, ohne klar zu denken mit einer Kampfreaktion (z.B. herumschreien), einer Fluchtreaktion oder wir fallen in Schockstarre und sind unfähig überhaupt noch zu handeln.",
              },
              {
                id: 5,
                text:
                  "Damit wir nicht ständig im Stressmodus sind und uns liebevoll und feinfühlig um unser Baby kümmern können, ist es zentral, uns auch um uns selbst zu kümmern.",
              },
              {
                id: 6,
                text:
                  "Auch wir können uns innerlich stärken, indem wir unser Selbstbewusstsein, unseren Selbstwert und unser Selbstvertrauen nähren.",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so4-Strategiekarte-Ampelcheck.pdf",
              text: "Strategiekarte: Der Ampel-Check – Kursblock 4",
              type: "strategy",
            },
          ],
        },
        section44: {
          id: 3,
          title: {
            main: "...indem wir unser Selbstbewusstsein stärken",
            videoName: "(Video 4.3)",
          },
          video: { ref: "https://player.vimeo.com/video/428741838" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Wenn wir ein differenziertes Selbstbewusstsein haben, kennen wir uns selbst gut und wir können unsere Gefühle, Bedürfnisse und Grenzen bewusst wahrnehmen.",
              },
              {
                id: 1,
                text:
                  "Unser Selbstbewusstsein können wir in ruhigen Momenten nähren, z.B. indem wir unsere Vergangenheit analysieren, indem wir Achtsamkeitspausen einlegen, um unsere Selbstwahrnehmung zu trainieren, oder indem wir ein Familienleitbild für die Zukunft erstellen.",
              },
              {
                id: 2,
                text:
                  "Wenn wir in einer stressigen Situation in Alarmbereitschaft geraten, können wir unsere Selbstwahrnehmung z.B. mit der 5-E-Strategie stärken (erkennen, einordnen, empfinden, erforschen, entspannen).",
              },
              {
                id: 3,
                text:
                  "In stressigen Situationen hilft uns eine bewusste Selbstwahrnehmung, mit uns in Kontakt zu bleiben, anstatt die Kontrolle zu verlieren und in eine automatische Stressreaktion zu kippen.",
              },
              {
                id: 4,
                text:
                  "Wenn wir doch einmal in eine Stressreaktion geraten, können wir das nachträglich als Chance nutzen, unser Selbstbewusstsein zu differenzieren, indem wir unsere Reaktion reflektieren.",
              },
            ],
          },
          documents: [
            {
              href:
                "/documents/so4-Strategiekarte-Eigenes-Selbstbewusstsein-staerken.pdf",
              text:
                "Strategiekarte: Eigenes Selbstbewusstsein stärken – Kursblock 4",
              type: "strategy",
            },
            {
              href: "/documents/so4-Vertiefung-Gefuehlswortschatz.pdf",
              text: "Vertiefung: Gefühlswortschatz erweitern – Kursblock 4",
              type: "further-information",
            },
            {
              href: "/documents/so4-Vertiefung-Stressreaktionen.pdf",
              text: "Vertiefung: Stressreaktionen reflektieren – Kursblock 4",
              type: "further-information",
            },
            {
              href: "/documents/so4-Vertiefung-Familienleitbild.pdf",
              text: "Vertiefung: Werte für das Familienleitbild – Kursblock 4",
              type: "further-information",
            },
          ],
        },
        section45: {
          id: 4,
          title: {
            main: "...indem wir unseren Selbstwert stärken",
            videoName: "(Video 4.4)",
          },
          video: { ref: "https://player.vimeo.com/video/428741959" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Wenn wir einen starken Selbstwert haben, wertschätzen wir uns selbst als Person. Wir sind es uns wert, gut auf uns selbst zu achten, sodass wir im Alltag genügend Ressourcen für unsere Aufgaben haben.",
              },
              {
                id: 1,
                text:
                  "In ruhigen Momenten können wir unseren Selbstwert stärken, in dem wir uns bedingungslos immer wieder Dinge gönnen, die uns guttun und unsere Ressourcen aufladen. Die Übung «Energiebilanz» und «Sonnenbad» können uns dabei helfen.",
              },
              {
                id: 2,
                text:
                  "In stressigen Momenten ist es für unseren Selbstwert zentral, dass wir unsere Grenzen möglichst schützen können. Im nächsten Video gehen wir auf das Thema Nein sagen noch vertiefter ein.",
              },
              {
                id: 3,
                text:
                  "Nach einer Stressreaktion können wir Selbstkritik und Selbstvorwürfe ersetzen durch Selbstakzeptanz und Selbstumsorgung. Indem wir uns überlegen, was uns gut tut und wie wir uns wieder entspannen können, sorgen wir nicht nur für mehr Wohlbefinden in diesem Moment, wir beugen auch künftige Stressreaktionen vor.",
              },
              {
                id: 4,
                text:
                  "Aus der Haltung der Selbstakzeptanz können wir uns liebevoll beim Baby entschuldigen und ihm mitteilen, dass wir es immer noch lieben. Wir sollten dabei aber darauf verzichten, uns abzuwerten oder uns zu rechtfertigen.",
              },
            ],
          },
          documents: [
            {
              href:
                "/documents/so4-Strategiekarte-Eigenen-Selbstwert-staerken.pdf",
              text: "Strategiekarte: Eigenen Selbstwert stärken – Kursblock 4",
              type: "strategy",
            },
            {
              href: "/documents/so4-Vertiefung-Beduerfniswortschatz.pdf",
              text: "Vertiefung: Bedürfniswortschatz erweitern – Kursblock 4",
              type: "further-information",
            },
          ],
        },
        section46: {
          id: 5,
          title: {
            main: "...indem wir unsere Grenzen schützen",
            videoName: "(Video 4.5)",
          },
          video: { ref: "https://player.vimeo.com/video/428742084" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Manchmal geht unserer Stressreaktion eine Phase voraus, in der wir zugelassen haben, dass unser Baby (oder jemand anderes) unsere persönlichen Grenzen überschreitet.",
              },
              {
                id: 1,
                text:
                  "Wir können Stressreaktion daher auch vorbeugen, indem wir lernen, unsere Grenzüberschreibungen frühzeitig wahrzunehmen und wenn es möglich und sinnvoll ist, sie liebevoll zu verteidigen: Ein Nein zu einem Verhalten oder zu einem Wunsch des Babys als Ja zu unseren eigenen Bedürfnissen und Werten.",
              },
              {
                id: 2,
                text:
                  "Unser Nein ist dann besonders verständlich, wenn wir es positiv formulieren (sagen was zu tun ist, anstatt sagen, was verboten ist), wenn wir ich-Botschaften senden (anstatt du- oder man-Botschaften) und wenn wir konkret sind. (→ Strategiekarte)",
              },
              {
                id: 3,
                text:
                  "Das Nein-Sagen ist eher ein Prozess als ein einmaliges Ereignis. Zum Prozess gehört, dass wir dem Baby Zeit lassen, um unser Nein zu versehen und dass wir den Frust des Babys, der mit einem Nein einhergehen kann, aushalten und liebevoll begleiten können.",
              },
              {
                id: 4,
                text:
                  "Wenn wir unsere Grenze aufgezeigt haben, können wir den Blick auf das Baby richten und uns fragen, was eigentlich hinter dem Verhalten steckt, das wir nicht tolerieren können.",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so4-Strategiekarte-Nein-sagen.pdf",
              text: "Strategiekarte: Nein sagen – Kursblock 4",
              type: "strategy",
            },
            {
              href: "/documents/so4-Vertiefung-Inkonsequenz.pdf",
              text: "Vertiefung: Prinzip der Inkonsequenz – Kursblock 4",
              type: "further-information",
            },
          ],
        },
        section47: {
          id: 6,
          title: {
            main: "...indem wir unser Selbstvertrauen stärken",
            videoName: "(Video 4.6)",
          },
          video: { ref: "https://player.vimeo.com/video/447412269" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Ein grundlegendes Vertrauen in unsere Fähigkeiten als Eltern oder Bezugspersonen schenkt uns ein gutes Gefühl, Gelassenheit und den Mut, eigene Wege zu erkunden.",
              },
              {
                id: 1,
                text:
                  "In ruhigen Momenten können wir unser Selbstvertrauen einerseits dadurch stärken, dass wir uns weiterentwickeln, andererseits ist auch der Fokus auf schöne, gelungene Momente nährend.",
              },
              {
                id: 2,
                text:
                  "Unsere Weiterentwicklung können wir durch die Wahl sinnvoller Lernstrategien fördern (z.B. vertiefende Übungen, mentales Training, Erinnerungshilfen, Memokarten, Lerntagebuch, Austausch mit Gleichgesinnten, Repetition von Inhalten)",
              },
              {
                id: 3,
                text:
                  "Durch den Fokus auf gelungene und schöne Momente (z.B. mit der Kernübung, dem Schönwetteraustausch oder dem Sonnenstrahlenbuch) können wir der Negativitätstendenz unseres Gehirns aktiv begegnen und unser Selbstvertrauen nähren.",
              },
              {
                id: 4,
                text:
                  "In stressigen Momenten, wenn wir von starken Gefühlen überrumpelt werden, können uns verschiedene Überbrückungstechniken helfen, die freigesetzte Energie der Stressreaktion nicht an unserem Baby auszulassen. Indem wir neugierig mit Techniken experimentieren werden wir mit der Zeit Vertrauen in unsere Fähigkeit gewinnen, Stressreaktionen zu überbrücken. ",
              },
              {
                id: 5,
                text:
                  "Nach stressigen Momenten können wir zukunftsorientiert in den Lernprozess investieren, z.B. indem wir die Stressreaktion reflektieren. Wir können auch gegenwartsorientiert etwas tun, was uns das Gefühl gibt, kompetent zu sein, z.B. uns beim Baby entschuldigen. Oder wir können uns vergangenheitsorientiert schöne und gelungene Momente in Erinnerung rufen.",
              },
            ],
          },
          documents: [
            {
              href:
                "/documents/so4-Strategiekarte-Eigenes-Selbstvertrauen-staerken.pdf",
              text:
                "Strategiekarte: Eigenes Selbstvertrauen stärken – Kursblock 4",
              type: "strategy",
            },
            {
              href: "/documents/so4-Strategiekarte-3-Schritt-Plan.pdf",
              text:
                "Strategiekarte: 3-Schritt-Plan nach Stressreaktionen – Kursblock 4",
              type: "strategy",
            },
          ],
        },
      },
    },
    block05: {
      sections: {
        section51: {
          id: 0,
          blocktitle: {
            supertitle: "Kursblock 5 (in Produktion)",
            main: "Zurückhaltung üben...",
          },
          checklist: {
            pretext: "In diesem Kursblock... (in Produktion)",
          },
        },
        section52: {
          id: 1,
          title: {
            main: "Einstiegsübung: Lass mich doch!",
            videoName: "(Video 5.1)",
          },
          video: { ref: "https://player.vimeo.com/video/455767350" },
        },
        section53: {
          id: 2,
          title: {
            main: "Schritt 1 – eine anregende Umgebung schaffen",
            videoName: "(Video 5.2)",
          },
          video: { ref: "https://player.vimeo.com/video/455767387" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Für die gesunde Entwicklung brauchen Babys eine angemessen (also weder über- noch unterfordernde) Menge an Stimulation und Erkundungsmöglichkeiten.",
              },
              {
                id: 1,
                text:
                  "In einer anregenden Umgebung wollen Babys unter anderem spannende Gegenstände erforschen, sich vielfältig bewegen, mit anderen Menschen in (spielerische) Interaktion treten, Erwachsene und andere Kinder beobachten sowie mit zunehmendem Alter sich immer mehr an alltäglichen Aktivitäten beteiligen.",
              },
              {
                id: 2,
                text:
                  "Wenn wir beobachten, womit sich unser Baby beschäftigt, können wir uns überlegen, ob wir ihm Gegenstände oder Aktivitäten anbieten können, die gleiche oder ähnliche Komponente haben, wie die bekannte Erfahrung, die aber auch noch neue Komponenten mitbringen (Prinzip der Assimilation).",
              },
              {
                id: 3,
                text:
                  "Um ein anregendes Angebot bereitzustellen, können wir Haushaltsmaterial auf vielfältige Weise nutzen.",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so5-Vertiefung-Anregende-Umgebung.pdf",
              text:
                "Vertiefungsinput: Zuhause eine anregende Umgebung schaffen – Kursblock 5",
              type: "further-information",
            },
          ],
        },
        section54: {
          id: 3,
          title: {
            main: "Schritt 2 – eine ermöglichende Haltung einnehmen",
            videoName: "(Video 5.3)",
          },
          video: { ref: "https://player.vimeo.com/video/455767701" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Wenn das Baby bei seinen Erkundungsbestrebungen nicht ständig auf Verbote stossen und dadurch stark eingeschränkt werden soll, ist es wichtig, dass wir eine ermöglichende Haltung einnehmen. Eine solche Haltung zeigt sich daran, dass...",
              },
              {
                id: 1,
                text:
                  "...wir die Umgebung so einrichten, dass es nur wenig Verbot und Gefahren, dafür aber viele anregende Erkundungsmöglichkeiten gibt (vgl. Video 5.2).",
              },
              {
                id: 2,
                text:
                  "...wir grundsätzlich bestrebt sind, dafür zu sorgen, dass das Baby seinen Interessen nachgehen kann – auf eine Art und Weise, die für uns angenehm und akzeptabel ist.",
              },
              {
                id: 3,
                text:
                  "...wir auf unnötige Verbote verzichten und uns auf diejenigen fokussieren, die wirklich «Not-wenig» sind, also die wirklich für uns, für unser Baby oder für andere eine Not abwenden.",
              },
              {
                id: 4,
                text:
                  "...wir lernen, auch auf unerfüllbare Wünsche oder unakzeptables Verhalten mit einem «Ja» statt mit einem «Nein» zu antwortet, ohne dadurch unsere Grenze aufzugeben (z.B. «Ja, wir sehen uns dieses Buch nach dem Essen gemeinsam an. Ich freue mich darauf und jetzt gerade bereite ich das Abendessen vor!»).",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so5-Strategiekarte-Ermöglichende-Haltung.pdf",
              text:
                "Strategiekarte: Eine ermöglichende Haltung einnehmen – Kursblock 5",
              type: "strategy",
            },
          ],
        },
        section55: {
          id: 4,
          title: {
            main: "Schritt 3 – Zurückhaltung üben...",
            videoName: "(Video 5.4)",
          },
          video: { ref: "https://player.vimeo.com/video/455767853" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Um sich motorisch und kognitiv zu entwickeln brauchen Babys keine Lehrer oder Trainer, sondern Bezugspersonen, die ihnen in einer anregenden Umgebung und durch eine ermöglichende Haltung das freie Spielen und Forschen ermöglichen.",
              },
              {
                id: 1,
                text:
                  "Babys entwickeln sich in sehr unterschiedlichem Tempo und es gibt keinen Grund, die individuelle Entwicklung eines Babys beschleunigen zu wollen.",
              },
              {
                id: 2,
                text:
                  "Wenn Bezugspersonen stark in das Spielen und Lernen des Babys eingreifen, riskieren sie, alle drei Wurzeln des inneren Baumes zu schwächen.",
              },
              {
                id: 3,
                text:
                  "Das Selbstbewusstsein leidet, weil das Baby keine gute Körperwahrnehmung und Selbsteinschätzung aufbauen kann, wenn es immer dazu angehalten und dabei unterstützt wird, Dinge zu tun, für die es noch nicht bereit ist.",
              },
              {
                id: 4,
                text:
                  "Der Selbstwert leidet, weil das Baby seinen Selbstwert an seine Leistungsfähigkeit knüpft, wenn es dazu angehalten wird anders zu Spielen oder schneller zu lernen.",
              },
              {
                id: 5,
                text:
                  "Das Selbstvertrauen leidet, weil das Baby sein Interesse am Forschen sowie seine Spontanität und Eigeninitiative verliert, wenn ihm vorgeschrieben wird, womit und wie es spielen soll.",
              },
              {
                id: 6,
                text:
                  "Das ABC der Zurückhaltung (abwarten, beschreiben, coachen) kann uns als Leitfaden dabei helfen, zurückhaltend damit zu sein, uns in das Spielen und Lernen unseres Babys einzumischen.",
              },
              {
                id: 7,
                text:
                  "Um uns darin zu üben eine ermöglichende zurück-Haltung einzunehmen, können wir Zeiten der ungeteilten Aufmerksamkeit schaffen. In diesen Zeiten beobachten wir neugierig, wie das Baby spielt und forscht und halten uns mit Inputs, Hilfestellungen, Bewertungen usw. bewusst zurück.",
              },
            ],
          },
          documents: [
            {
              href: "/documents/so5-Strategiekarte-ABC-der-Zurückhaltung.pdf",
              text: "Strategiekarte: Das ABC der Zurückhaltung – Kursblock 5",
              type: "strategy",
            },
            {
              href:
                "/documents/so5-Strategiekarte-Ungeteilte-Aufmerksamkeit.pdf",
              text:
                "Strategiekarte: Die Zeit der ungeteilten Aufmerksamkeit – Kursblock 5",
              type: "strategy",
            },
          ],
        },
        section56: {
          id: 5,
          title: {
            main: "...wenn dem Baby etwas nicht gelingt",
            videoName: "(Video 5.4a)",
          },
          video: { ref: "https://player.vimeo.com/video/456236097" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Babys bringen von Geburt aus enorm viel Frustrationstoleranz mit. Immer wieder gelingt es ihnen, Frust in Motivation, Motivation in Anstrengung und Anstrengung in Erfolg umzuwandeln.",
              },
              {
                id: 1,
                text:
                  "Wenn wir einem Baby, dem etwas noch nicht gelingt, sehr schnell helfen, nehmen wir ihm nicht nur wertvolle Selbstwirksamkeitserfahrungen, wir riskieren auch, dass seine Frustrationstoleranz immer mehr sinkt.",
              },
              {
                id: 2,
                text:
                  "Wenn einem Baby etwas noch nicht gelingt, können wir gemäss dem ABC der Zurückhaltung in vielen Situationen einfach abwarten.",
              },
              {
                id: 3,
                text:
                  "Wenn ein Baby immer frustrierter wird, können wir ihm seine Situation beschreiben, damit es sie besser versteht. Oftmals reicht das schon, damit Babys ihren Fust überwinden können.",
              },
              {
                id: 4,
                text:
                  "Wenn eine Situation mehr Begleitung verlangt, können wir das Baby coachen, indem wir ihm kleine Tipps geben, ihm die Aufgabe etwas erleichtern oder ihm eine Alternative bieten.",
              },
              {
                id: 5,
                text:
                  "Vor allem können wir uns aber darauf konzentrieren, den Frust akzeptierend, verständnisvoll, geduldig und liebevoll zu begleiten und dem Baby unsere Zuversicht auszudrücken, dass es bestimmt irgendwann klappen wird.",
              },
            ],
          },
          documents: [
            {
              href:
                "/documents/so5-Strategiekarte-ABC-der-Zurückhaltung-Frust.pdf",
              text:
                "Strategiekarte: Zurückhaltung, wenn dem Baby etwas nicht gelingt – Kursblock 5",
              type: "strategy",
            },
          ],
        },
        section57: {
          id: 6,
          title: {
            main: "...wenn das Baby etwas gefährliches tut",
            videoName: "(Video 5.4b)",
          },
          video: { ref: "https://player.vimeo.com/video/457796136" },
          checklist: {
            pretext: "Das wichtigste in Kürze:",
            entries: [
              {
                id: 0,
                text:
                  "Beim Spielen und Forschen begeben sich Babys manchmal in gefährliche Situationen. Wenn die Gefahr gross ist, greifen wir natürlich sofort ein, um Schlimmeres zu verhindern.",
              },
              {
                id: 1,
                text:
                  "Insgesamt ist es aber nicht sinnvoll, das Baby vor allen kleinen Unfällen zu bewahren. Schmerz ist nämlich ein wichtiges Feedback im Lernprozess des Babys.",
              },
              {
                id: 2,
                text:
                  "Babys, die sehr oft gehalten oder gerettet werden, haben Schwierigkeiten, ein gutes Körpergefühl und eine realistische Selbsteinschätzung aufzubauen.",
              },
              {
                id: 3,
                text:
                  "Wenn sich das Baby in Gefahr begibt können wir zuerst einschätzen, ob wir abwarten können, weil das Risiko nicht sehr gross ist.",
              },
              {
                id: 4,
                text:
                  "Wenn wir nicht abwarten können oder wollen, können wir dem Baby seine Situation und die Gefahr ruhig beschreiben. Das reicht oft schon, damit das Baby «sich selbst retten» kann.",
              },
              {
                id: 5,
                text:
                  "Wenn die Situation mehr Begleitung verlangt, können wir das Baby coachen, indem wir ihm Anweisungen geben, uns so positionieren, dass wir Unfälle abfedern können oder indem wir Halt bieten.",
              },
              {
                id: 6,
                text:
                  "Wenn es doch zu einem Unfall kommt und das Baby weint, können wir dieses Weinen liebevoll begleiten und dem Baby anschliessend aufzeigen, was passiert ist, damit es die Situation besser einordnen und verarbeiten kann.",
              },
            ],
          },
          documents: [
            {
              href:
                "/documents/so5-Strategiekarte-ABC-der-Zurückhaltung-Gefahr.pdf",
              text:
                "Strategiekarte: Zurückhaltung, wenn das Baby in Gefahr ist – Kursblock 5",
              type: "strategy",
            },
          ],
        },
        section58: {
          id: 7,
          title: {
            main: "Weitere Inhalte sind in Produktion.",
          },
        },
      },
    },
    routes: {
      block01: routes.block01,
      block02: routes.block02,
      block03: routes.block03,
      block04: routes.block04,
      block05: routes.block05,
    },
  },
  buttons: {
    cta05Primary: {
      text: "Jetzt buchen",
      target: "index#prizing",
      logEvent: "Jetzt buchen",
      isPrimary: true,
    },
    cta05Secondary: {
      text: "Jetzt buchen",
      target: "index#prizing",
      logEvent: "Jetzt buchen",
      isPrimary: false,
    },
  },
  formEntries,
  standardNavRoutes: {
    kurs: { ...routes.kurs, isPrimary: true },
    landingPage: routes.landingPage,
  },
  routes,
};

export default appData;
