<template>
  <div class="page">
    <header class="header" id="header">
      <div class="header__emotion"></div>
      <div class="header__content">
        <g-link class="header__home" to="/">
          <g-image
            alt="so* kommunizieren Baum"
            class="header__logo"
            height="200"
            src="~/assets/imgs/so-kommunizieren.png"
            title="Zur Startseite"
            width="156"
          />
        </g-link>
        <Navigation :routes="routes" />
        <router-link
          :to="isLoggedIn ? appData.routes.account.to : appData.routes.login.to"
          class="profile"
        ></router-link>
      </div>
    </header>
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
import "~/scripts/analyticsSnippets";
import GdprNotice from "~/components/GdprNotice";
import LogRocket from "logrocket";
import Navigation from "~/components/Navigation";
import appData from "~/data/appData";
import stateM8t from "~/stateManagement";

import { isEarlyBird } from "~/helpers";

export default {
  components: { GdprNotice, Navigation },
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
