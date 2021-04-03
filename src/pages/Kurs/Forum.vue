<template>
  <Layout :routes="navRoutes">
    <section>
      <h1>Mitgliederforum</h1>
      <p>
        Austausch von Fragen, Antworten, Gedanken, Angregendem allerlei
        Interessantem.
      </p>
      <h2>Neue Diskussion starten</h2>
      <FormVue :formData="submitCommentForm" />
    </section>
    <section>
      <h2>Diskussionen</h2>
      <div class="forum-entries">
        <ForumEntry
          :entry="{
            author: 'Xaver Fleer',
            text: 'Ich habe einen zweiten Gedanken.',
            timestamp: '2.4.2021 15:17',
          }"
        />
        <ForumEntry
          :entry="{
            author: 'Xaver Fleer',
            text: 'Ich habe dazu einen Gedanken.',
            timestamp: '2.4.2021 15:17',
          }"
          class="forum-entry--sub-entry"
        />
        <ForumEntry
          :entry="{
            author: 'Xaver Fleer',
            text: 'Ich habe dazu einen anderen Gedanken.',
            timestamp: '2.4.2021 15:17',
          }"
          class="forum-entry--sub-entry"
        />
        <ForumEntry
          :entry="{
            author: 'Xaver Fleer',
            text: 'Ich habe einen Gedanken.',
            timestamp: '2.4.2021 15:16',
          }"
        />
      </div>
      <div class="buttons">
        <RouteVue
          :info="{ ...appData.course.routes.block01, text: 'Zum Kurs' }"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";
import ForumEntry from "~/components/ForumEntry.vue";
import RouteVue from "~/components/RouteVue.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";

export default {
  components: { FormVue, ForumEntry, RouteVue },
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
        fields: [
          { ...appData.formEntries.message, label: "Neuer Eintrag", rows: 3 },
        ],
        goal: "Eintrag posten",
        name: "submit-forum-comment",
        preSubmit() {
          alert("Dieses Feature funktioniert leider noch nicht.");
        },
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
