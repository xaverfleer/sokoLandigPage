<template>
  <div class="page">
    <HeaderVue :isLoggedIn="isLoggedIn" :routes="routes" />
    <main>
      <slot
        :isEarlyBird="isEarlyBird"
        :isFree="isFree"
        :isLoggedIn="isLoggedIn"
        :isPaidAccount="isPaidAccount"
      />
    </main>
    <footer class="footer">
      <div id="contact" class="footer__contact">
        Kontaktiere uns unter
        <a href="mailto:kurs@so-kommunizieren.ch" rel="nofollow"
          >kurs@so-kommunizieren.ch</a
        >
        oder
        <a href="tel:+41774466505" rel="nofollow"> +41 77 44 66 505</a>.
      </div>
      <div class="footer__copyright">
        © 2020 Fleer & Fleer |
        <g-link :to="appData.routes.impressum.to" rel="nofollow">
          {{ appData.routes.impressum.text }}
        </g-link>
      </div>
    </footer>
    <GdprNotice />
    <noscript>
      <img
        height="1"
        width="1"
        src="https://www.facebook.com/tr?id=253945996208376&ev=PageView&noscript=1"
      />
    </noscript>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { trackCampaign } from "~/scripts/analyticsMethods";
import "~/scripts/analyticsSnippets";
import GdprNotice from "~/components/GdprNotice";
import HeaderVue from "~/components/HeaderVue";
import LogRocket from "logrocket";
import appData from "~/data/appData";
import stateM8t from "~/stateManagement";

import { isEarlyBird } from "~/helpers";

export default {
  components: { GdprNotice, HeaderVue },
  computed: {
    appData() {
      return appData;
    },
    isEarlyBird() {
      return isEarlyBird(this);
    },
    isFree() {
      return !this.isPaidAccount;
    },
    isLoggedIn() {
      return stateM8t.isLoggedIn();
    },
    isPaidAccount() {
      return stateM8t.isPaidAccount() || this.isEarlyBird;
    },
  },
  data() {
    return { state: {} };
  },
  methods: {
    analyticsRelated() {
      typeof LogRocket === "object" && LogRocket.init("yxvjmb/soko");
      trackCampaign();
    },
  },
  mounted() {
    this.state = stateM8t.subscribe((state) => {
      this.state = state;
    });

    this.analyticsRelated();
  },
  props: ["routes"],
};
</script>
