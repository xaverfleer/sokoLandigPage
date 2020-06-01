<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto verwalten</h2>
        <h3>Konto löschen</h3>
        <form @submit.prevent="handleDeleteAccount" class="form">
          <FormEntry
            v-for="entry in deleteAccountForm.fields"
            :key="entry.name"
            :options="entry"
          />
          <div class="buttons form__buttons">
            <button class="button button--primary">Konto löschen</button>
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
  components: { Footer, FormEntry, Header },
  created() {
    document.title = `Konto | so* kommunizieren`;
  },
  computed: {
    deleteAccountFormData() {
      return this.deleteAccountForm.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: field.value }),
        {}
      );
    },
  },
  data() {
    return {
      deleteAccountForm: {
        fields: [
          { ...this.$root.appData.formEntries.email, fullWidth: true },
          { ...this.$root.appData.formEntries.password },
          {
            ...this.$root.appData.formEntries.confirm,
            help: "",
            checks: [
              {
                test: (val, allEntries) => val === allEntries.password,
                message: "Die Passwörter stimmen nicht überein.",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleDeleteAccount(event) {
      this.updateHelp(this.deleteAccountForm.fields);
      if (this.isInputValid(this.deleteAccountForm.fields)) {
        // delete the account
      }
    },
    isInputValid(fields) {
      return fields.reduce((acc, field) => acc && field.help === "", true);
    },
    updateHelp(formFields) {
      formFields.forEach((field) => {
        const help = field.checks
          ? field.checks
              .filter(
                (check) => !check.test(field.value, this.deleteAccountFormData)
              )
              .reduce((acc, check) => acc.push(check.message) && acc, [])
              .join(" ")
          : "";
        field.help = help;
      });
    },
  },
};
</script>
