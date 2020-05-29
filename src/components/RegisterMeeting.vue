<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Zum Online-Meeting anmelden</h2>
        <h3 id="meetingDate">Datum: {{ nextMeeting }}</h3>
        <form>
          <FormEntry :options="$root.appData.formEntries.email" />
          <FormEntry :options="$root.appData.formEntries.password" />
          <div class="buttons form__buttons">
            <button class="button button--primary">Anmelden</button>
          </div>
        </form>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import FormEntry from "./FormEntry.vue";
import Header from "./Header.vue";

export default {
  components: {
    Footer,
    FormEntry,
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
};
</script>

<style scoped></style>
