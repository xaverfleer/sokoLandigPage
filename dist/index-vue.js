Vue.component("secondary-nav-entry", {
  props: ["entry"],
  template:
    '<a class="nav__entry" href="{{ entry.href }}">{{ entry.href }} {{ entry.text }}</a>',
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
      { href: "#contents", text: "Inhalte" },
      { href: "#offer", text: "Angebot" },
      { href: "#about-us", text: "Über uns" },
    ],
  },
});
