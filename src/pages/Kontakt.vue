<template>
  <Layout>
    <section>
      <h1>Kontakt</h1>
      <p>
        Hast du Fragen, Anregungen, Wünsche oder einfach etwas mitzuteilen? Ich
        freue mich über deine Nachricht.
      </p>
      <p>
        Auf Anfrage halte ich auch Vorträge oder leite Workshops rund um die
        Themen der subjektorientierten Kommunikation.
      </p>
      <FormVue :formData="contactForm" />
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";

import appData from "~/data/appData";
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  components: { FormVue },
  computed: {},
  data() {
    return {
      contactForm: {
        fields: [
          appData.formEntries.name,
          appData.formEntries.email,
          appData.formEntries.message,
        ],
        goal: "Nachricht senden",
        name: "sendMessage",
        postSubmit: this.postSubmit,
        submitLambdaFunction: "sendMessage",
      },
    };
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kontakt/",
      },
      {
        name: "description",
        content: "Ich freue mich über deine Nachricht.",
      },
    ],
    title: "Kontakt",
  },
  methods: {
    postSubmit() {
      this.contactForm.fields.forEach((field) => (field.value = ""));
      alert(
        "Vielen Dank für deine Nachricht. Ich melde mich sobald wie möglich bei dir."
      );
    },
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
