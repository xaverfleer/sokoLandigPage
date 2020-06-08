<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Zum Online-Meeting anmelden</h2>
        <h3 id="meetingDate">Datum: {{ nextMeeting }}</h3>
        <FormVue :formData="registerMeetingForm" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";

export default {
  components: {
    Footer,
    FormVue,
    Header,
  },
  computed: {
    nextMeeting() {
      const now = new Date();
      const dayOfWeek = 5;
      const months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "Septemper",
        "Oktober",
        "November",
        "Dezember",
      ];
      const meeting = new Date();

      meeting.setDate(now.getDate() + ((7 + dayOfWeek - now.getDay()) % 7));
      const formatted = `Freitag ${meeting.getUTCDate()} ${
        months[meeting.getMonth()]
      } ${meeting.getFullYear()}`;
      return formatted;
    },
  },
  created() {
    document.title = `Anmeldung Online-Meeting | so* kommunizieren`;
  },
  data() {
    return {
      textAreaText:
        "Soweit bin ich im Kurs:\n\n\nThemen, die bei mir aktuell sind:\n\n\nFeedback/Wünsche:\n",
      registerMeetingForm: {
        fields: [
          { ...this.$root.appData.formEntries.name },
          { ...this.$root.appData.formEntries.email },
          { ...this.$root.appData.formEntries.comment },
        ],
        goal: "Anmelden",
        submitLambdaFunction: "registerMeeting",
        successRoute: this.$root.appData.routes.registeredMeeting.to,
      },
    };
  },
};
</script>
