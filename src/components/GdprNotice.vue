<template>
  <div class="gdpr">
    <p>
      Wir verwenden Cookies, um die bestmögliche Erfahrung auf unserer Website
      zu ermöglichen. Wenn du diese Seite weiterhin nutzt, gehen wir davon aus,
      dass du damit einverstanden bist.
    </p>
    <button class="button button--primary gdpr__button" id="gdpr__accept">
      Ok
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    manageVisibility() {
      function hideGdpr() {
        document.querySelector(".gdpr").setAttribute("style", "display: none;");
      }

      const storageGdpr = localStorage.getItem("soko-gdpr");

      if (["accepted"].indexOf(storageGdpr) >= 0) {
        hideGdpr();
      } else {
        const elems = {
          accept: document.getElementById("gdpr__accept"),
        };
        const handle = {
          accept: () => {
            localStorage.setItem("soko-gdpr", "accepted");
            hideGdpr();
            handle.unbind();
          },
          unbind: () => {
            elems.accept.removeEventListener("click", handle.accept);
          },
        };

        elems.accept.addEventListener("click", handle.accept);
      }
    },
  },
  mounted() {
    this.manageVisibility();
  },
};
</script>
