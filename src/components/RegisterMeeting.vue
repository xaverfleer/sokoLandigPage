<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Zum Online-Meeting anmelden</h2>
        <h3 id="meetingDate">Datum: {{ nextMeeting }}</h3>
        <form>
          <FormEntry :options="$root.appData.formEntries.email" />
          <div class="form-entry form-entry--fullwidth">
            <label class="form-entry__label" for="form__comment"
              >Kommentar</label
            >
            <textarea
              class="form-entry__input"
              name="comment"
              id="form__comment"
              rows="10"
              v-model="textAreaText"
            ></textarea>
          </div>
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
  data: () => ({
    textAreaText:
      "Soweit bin ich im Kurs: \n\n\nThemen, die bei mir aktuell sind: \n\n\nFeedback/Wünsche: ",
  }),
};
</script>

<style scoped></style>
