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
      <slot />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <a href="chadcollins.net"><strong>Chad Collins</strong></a
          >. Powered by
          <a href="https://gridsome.org/"><strong>Gridsome</strong></a
          >.
        </p>
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
    isLoggedIn() {
      const activeUntil =
        this.hasSession && this.state.session.ts + 30 * 24 * 60 * 60 * 1000;
      const hasActiveSession = this.hasSession && Date.now() < activeUntil;
      return hasActiveSession;
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
