const appData = {
  block01: {
    supertitle: "Kursblock 1",
    title: "Innere Stärke und Gleichwürdigkeit",
    checklist: {
      pretext: "In diesem Kursblock…",
      entries: [
        {
          id: 0,
          // eslint-disable-next-line no-irregular-whitespace
          text: `…verbindest du dich mit deinem Baby, in dem du dir überlegst, was du ihm von Herzen für sein Leben wünschst (Video 1.1)`,
        },
        {
          id: 1,
          // eslint-disable-next-line no-irregular-whitespace
          text: `…erfährst du, was dein Baby braucht, um innerlich stark zu werden (Video 2.2)`,
        },
        {
          id: 2,
          // eslint-disable-next-line no-irregular-whitespace
          text: `…erklären wir, was es bedeutet, das Baby als gleichwürdiges Subjekt zu sehen (Video 2.3)`,
        },
        {
          id: 3,
          // eslint-disable-next-line no-irregular-whitespace
          text: `…zeigen wir anhand eines Praxisbeispiels auf, was subjektorientierte Kommunikation in der Praxis heissen kann (Video 2.4)`,
        },
        {
          id: 4,
          // eslint-disable-next-line no-irregular-whitespace
          text: `…lernst du anhand konkreter Sätzen den Unterschied zwischen einer gleichwürdigen und einer herablassenden Sprache kennen (Video 2.5)`,
        },
      ],
    },
  },
  buttons: {
    cta06Primary: {
      text: "Kursblock 2",
      target: "#header",
      logEvent: "Kursblock 2",
      activateBlock: "02",
      isPrimary: true,
    },
    cta06Secondary: {
      text: "Kursblock 2",
      target: "#header",
      logEvent: "Kursblock 2",
      activateBlock: "02",
      isPrimary: false,
    },
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
    cta07Secondary: {
      text: "Kursblock 1",
      target: "#header",
      logEvent: "Kursblock 1",
      activateBlock: "01",
      isPrimary: false,
    },
    cta08Secondary: {
      text: "Kursblock 3",
      target: "#header",
      logEvent: "Kursblock 3",
      activateBlock: "03",
      isPrimary: false,
    },
    cta09Secondary: {
      text: "Kursblock 4",
      target: "#header",
      logEvent: "Kursblock 4",
      activateBlock: "04",
      isPrimary: false,
    },
    cta10Secondary: {
      text: "Kursblock 5",
      target: "#header",
      logEvent: "Kursblock 5",
      activateBlock: "05",
      isPrimary: false,
    },
  },
  documents: {
    "so1-Zusammenfassung": {
      href: "/documents/so1-Zusammenfassung.pdf",
      text: "Zusammenfassung – Kursblock 1",
    },
    "so1-UebungsdossierDocx": {
      href: "/documents/so1-Uebungsdossier.docx",
      text: "Übungsdossier (Word) – Kursblock 1",
    },
    "so1-UebungsdossierPdf": {
      href: "/documents/so1-Uebungsdossier.pdf",
      text: "Übungsdossier (PDF) – Kursblock 1",
    },
  },
  state: {
    path: "",
  },
};

export default appData;
