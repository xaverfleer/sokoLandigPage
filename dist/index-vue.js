Vue.component("secondary-nav-entry", {
  props: ["entry"],
  template: '<a class="nav__entry" :href="entry.href">{{ entry.text }}</a>',
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
      { id: 0, href: "#contents", text: "Inhalte" },
      { id: 1, href: "#offer", text: "Angebot" },
      { id: 2, href: "#about-us", text: "Über uns" },
    ],
  },
});
