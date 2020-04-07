Vue.component("secondary-nav-entry", {
  template: '<a class="nav__entry" href="blah">blih</a>',
});

var app = new Vue({
  el: "#primary-nav-entry",
  data: {
    text: "Zum Kurs",
  },
});

new Vue({
  el: "#nav",
  data: {
    navEntries: [
      { text: "Inhalte" },
      { text: "Angebot" },
      { text: "Über uns" },
    ],
  },
});
