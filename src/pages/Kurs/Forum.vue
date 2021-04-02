<template>
  <Layout :routes="navRoutes">
    <section>
      <h1>Mitgliederforum</h1>
      <p>Austausch von Fragen, Antworten und allerlei Interessantem.</p>
      <div class="forum-entries"></div>
    </section>
    <section>
      <h2>Neuen Eintrag erfassen</h2>
      <FormVue :formData="submitCommentForm" />
    </section>
    <div class="buttons">
      <RouteVue
        :info="{ ...appData.course.routes.block01, text: 'Zum Kurs' }"
      />
    </div>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";
import RouteVue from "~/components/RouteVue.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";

export default {
  components: { FormVue, RouteVue },
  computed: {
    appData() {
      return appData;
    },
    navRoutes() {
      const crs = this.appData.courseRoutes;
      return isEarlyBird(this)
        ? Array.from(crs).map((cr) => kursToEarlyBird(cr))
        : crs;
    },
    submitCommentForm() {
      return {
        fields: [{ ...appData.formEntries.message }],
        goal: "Kommentar posten",
        name: "submit-forum-comment",
        // postSubmit: () => {
        // alert("Vielen Dank. Deine E-Mail-Adresse ist registriert.");
        // },
        // submitLambdaFunction: "submitForumComment",
      };
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/forum/",
      },
      {
        name: "description",
        content:
          "Austausch zur subjektorientierten Kommunikation unter Mitgliedern.",
      },
    ],
    title: "Forum unter Mitgliedern",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
