<template>
  <div class="order-flow">
    <h2>Einkaufswagen</h2>
    <div class="shopping-cart">
      <p class="shopping-cart__label">Im Einkaufswagen:</p>
      <p>1x Early-Bird-Packet: {{ price }}&nbsp;CHF{{ discountMessage }}</p>
    </div>
    <div class="step step--promo-code">
      <h2>Rabatt</h2>
      <div class="promo-code">
        <FormVue :formData="promoCodeForm" />
      </div>
    </div>
    <div class="step step--recipient">
      <h2>Persönliche Angaben</h2>
      <form class="form" @submit.prevent="handleSubmit">
        <FormEntry
          v-for="field in formFields"
          :key="field.name"
          :options="field"
        />
        <div class="buttons form__buttons">
          <button v-if="price <= 0" class="button button--primary">
            Weiter
          </button>
        </div>
      </form>
    </div>
    <div class="step step--payment">
      <div v-show="price > 0" class="paypal-button-container"></div>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import FormEntry from "./FormEntry.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";
import routes from "../data/routes";

const vm = {
  components: { Footer, FormEntry, FormVue, Header },
  computed: {
    compactData() {
      return this.formFields
        .concat([this.promoCodeForm.fields])
        .reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {});
    },
    discountMessage() {
      return this.discount
        ? ` (inkl. ${this.discount * 100}% Rabatt dank Rabattcode ${
            this.promoCode
          })`
        : "";
    },
    price() {
      return 35 * (1 - this.discount);
    },
    stringifiedData() {
      return JSON.stringify(this.compactData);
    },
  },
  created() {
    document.title = `Early-Bird buchen | so* kommunizieren`;
  },
  data() {
    return {
      discount: 0,
      formFields: [
        { ...this.$root.appData.formEntries.name, fullWidth: true },
        { ...this.$root.appData.formEntries.email },
        { ...this.$root.appData.formEntries.confirmEmail },
      ],
      promoCode: undefined,
      promoCodeForm: {
        fields: [{ ...this.$root.appData.formEntries.promoCode }],
        goal: "Verifizieren",
        layout: "small",
        name: "promo-code",
        postSubmit: (xhr) => {
          const response = JSON.parse(xhr.response);
          this.promoCode = response.promoCode;
          this.discount = response.discount / 100;
          this.waitForPaypal();
        },
        submitLambdaFunction: "verifyPromoCode",
      },
    };
  },
  methods: {
    createPaidUser() {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `.netlify/functions/registerPaidUser`);
      xhr.send(this.stringifiedData);
      xhr.addEventListener("load", () => {
        switch (xhr.status) {
          case 200:
            this.handleUserCreationSuccess(xhr);
            break;
          case 500:
          case 504:
          default:
            this.handleUserCreationFailure();
            break;
        }
      });
      xhr.addEventListener("error", (xhrEventError) => {
        this.handleUserCreationFailure();
      });
    },
    handleSubmit() {
      this.updateHelp(this.formFields);
      if (this.isInputValid(this.formFields)) {
        this.createPaidUser();
      }
    },
    handleUserCreationSuccess(xhr) {
      if (xhr.response === "Account upgraded") {
        this.$router.push(this.$root.appData.routes.upgradedAccount.to);
      } else this.$router.push(this.$root.appData.routes.registered2.to);
    },
    handleUserCreationFailure() {
      alert(
        `Hoppla, uns ist ein Fehler unterlaufen. Bitte wiederhole deine Aktion oder kontaktiere uns unter kurs@so-kommunizieren.ch oder +41 77 44 66 505`
      );
    },
    handlePaymentSuccess() {
      this.createPaidUser();
    },
    isInputValid(fields) {
      return fields.reduce((acc, field) => acc && field.help === "", true);
    },
    loadPaypalButton() {
      paypal
        .Buttons({
          createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.price,
                  },
                  description: JSON.stringify({
                    compactData: this.compactData,
                    price: this.price,
                  }),
                },
              ],
            });
          },
          onApprove: () => vm.handlePaymentSuccess(),
        })
        .render(".paypal-button-container");
    },
    updateHelp(formFields) {
      formFields.forEach((field) => {
        const help = field.checks
          ? field.checks
              .filter((check) => !check.test(field.value, this.compactData))
              .reduce((acc, check) => acc.push(check.message) && acc, [])
              .join(" ")
          : "";
        field.help = help;
      });
    },
    waitForPaypal(i = 0) {
      if (i < 100) {
        if (window.paypal) {
          this.loadPaypalButton();
        } else {
          window.setTimeout(this.waitForPaypal.bind(this, i + 1), i * 100);
        }
      }
    },
  },
  mounted() {
    this.waitForPaypal();
  },
};

export default vm;
</script>
