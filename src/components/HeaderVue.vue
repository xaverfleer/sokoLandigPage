<template>
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
</template>

<script>
import Navigation from "~/components/Navigation";
import appData from "~/data/appData";

export default {
  components: { Navigation },
  computed: {
    appData() {
      return appData;
    },
  },
  props: ["isLoggedIn", "routes"],
};
</script>
