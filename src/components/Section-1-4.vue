<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <div class="video-wrapper" id="video-01c-gleichwuerdigkeit">
        <script
          src="https://fast.wistia.com/embed/medias/va2sztbhjy.jsonp"
          type="application/javascript"
          async
        ></script>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          type="application/javascript"
          async
        ></script>
        <div
          class="wistia_responsive_padding"
          style="padding:56.25% 0 0 0;position:relative;"
        >
          <div
            class="wistia_responsive_wrapper"
            style="height:100%;left:0;position:absolute;top:0;width:100%;"
          >
            <div
              class="wistia_embed wistia_async_va2sztbhjy videoFoam=true"
              style="height:100%;position:relative;width:100%"
            >
              <div
                class="wistia_swatch"
                style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
              >
                <img
                  src="https://fast.wistia.com/embed/medias/va2sztbhjy/swatch"
                  style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
                  alt=""
                  aria-hidden="true"
                  onload="this.parentNode.style.opacity=1;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  props: ["documents", "section"],
  components: { Checklist, Document, SectionTitle },
};
</script>

<style scoped></style>
