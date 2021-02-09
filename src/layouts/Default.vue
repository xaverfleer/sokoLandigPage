<template>
  <div class="page">
    <header class="header" id="header">
      <div class="header__emotion"></div>
      <div class="header__content">
        <g-link class="header__home" to="/">
          <img
            alt="Kleiner Baum"
            class="header__logo"
            src="/imgs/logo.png"
            title="Zur Startseite"
          />
        </g-link>
        <nav :class="navClasses" @click="toggleNav">
          <NavEntry
            v-for="route in appliedRoutes"
            :key="route.to"
            :route="route"
          />
        </nav>
        <router-link
          :to="isLoggedIn ? appData.routes.account.to : appData.routes.login.to"
          class="profile"
        ></router-link>
      </div>
    </header>
    <main>
      <slot
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
import NavEntry from "~/components/NavEntry";
import appData from "~/data/appData";
import stateM8t from "~/stateManagement";

export default {
  components: { NavEntry },
  computed: {
    appData() {
      return appData;
    },
    appliedRoutes() {
      return this.routes || this.defaultRoutes;
    },
    defaultRoutes() {
      return appData.standardNavRoutes;
    },
    hasSession() {
      return this.state.session != null;
    },
    isEarlyBird() {
      return document.location.pathname.indexOf("early-bird") > -1;
    },
    isFree() {
      return !this.isPaidAccount;
    },
    isLoggedIn() {
      const activeUntil =
        this.hasSession && this.state.session.ts + 30 * 24 * 60 * 60 * 1000;
      const hasActiveSession = this.hasSession && Date.now() < activeUntil;
      return hasActiveSession;
    },
    isPaidAccount() {
      return (
        (this.hasSession && this.state.session.isPaidAccount) ||
        this.isEarlyBird ||
        false
      );
    },
    navClasses() {
      return [
        "nav",
        Object.values(this.appliedRoutes).length > 3 && "nav--kurs",
        this.isNavActive && "nav--active",
      ];
    },
  },
  data() {
    return { isNavActive: false, state: {} };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
  mounted() {
    this.state = stateM8t.subscribe((state) => {
      this.state = state;
    });
  },
};
</script>
