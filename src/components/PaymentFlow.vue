<template>
  <div class="order-flow">
    <h2>Einkaufswagen</h2>
    <div class="form-aligned shopping-cart">
      <p class="shopping-cart__label">Im Einkaufswagen:</p>
      <p>1x Early-Bird-Packet: {{ price }}&nbsp;CHF{{ discountMessage }}</p>
    </div>
    <div class="step step--promo-code">
      <h2>Rabatt</h2>
      <div class="promo-code">
        <FormVue :formData="promoCodeForm" />
        <div class="form-aligned">{{ discountMessageShort }}</div>
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
          <button class="button button--primary">
            Weiter
          </button>
        </div>
      </form>
    </div>
    <div v-show="showPaypal" class="step step--payment">
      <div class="paypal-button-container"></div>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import FormEntry from "./FormEntry.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";
import stateManagement from "../stateManagement";

export default {
  components: { Footer, FormEntry, FormVue, Header },
  computed: {
    compactData() {
      return this.formFields
        .concat(this.promoCodeForm.fields)
        .reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {});
    },
    discountMessage() {
      return this.discount ? ` (inkl. ${this.discountMessageShort})` : "";
    },
    discountMessageShort() {
      return this.discount
        ? ` ${this.discount * 100}% Rabatt dank Rabattcode ${this.promoCode}`
        : this.discountWasChecked
        ? `Kein Rabatt mit Code ${this.promoCode}`
        : "";
    },
    price() {
      const exact = 180 * (1 - this.discount);
      return Math.floor(exact / 5) * 5;
    },
    showPaypal() {
      return this.formIsValid && this.price > 0;
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
      discountWasChecked: false,
      discount: 0,
      formFields: [
        { ...this.$root.appData.formEntries.name, fullWidth: true },
        { ...this.$root.appData.formEntries.email },
        { ...this.$root.appData.formEntries.confirmEmail },
        { ...this.$root.appData.formEntries.city },
        { ...this.$root.appData.formEntries.address, optional: true },
        { ...this.$root.appData.formEntries.phone },
        { ...this.$root.appData.formEntries.birthdays, optional: true },
      ],
      formIsValid: false,
      promoCode: undefined,
      promoCodeForm: {
        fields: [
          { ...this.$root.appData.formEntries.promoCode, value: "FEBRUAR50" },
        ],
        goal: "Verifizieren",
        layout: "small",
        name: "promo-code",
        postSubmit: (xhr) => {
          const response = JSON.parse(xhr.response);
          this.promoCode = response.promoCode;
          this.discount = response.granted / 100;
          this.discountWasChecked = true;
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
      if (this.isFormValid())
        if (this.price <= 0) this.createPaidUser();
        else this.waitForPaypal();
    },
    handleUserCreationSuccess(xhr) {
      if (xhr.response === "Account upgraded") {
        if (this.$root.hasSession) {
          const oldSession = this.$root.state.session;
          const newSession = { ...oldSession, isPaidAccount: true };
          stateManagement.updateSession(newSession);
        }
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
    isFormValid() {
      this.formIsValid = this.formFields.reduce(
        (acc, field) => acc && field.help === "",
        true
      );
      return this.formIsValid;
    },
    loadPaypalButton() {
      const vueThis = this;
      const { price, compactData } = this;
      document.querySelector(".paypal-button-container").innerHTML = "";
      paypal
        .Buttons({
          createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price,
                  },
                  description: "so* kommunizieren mit deinem Baby",
                },
              ],
            });
          },
          onApprove: () => {
            vueThis.handlePaymentSuccess();
          },
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
};
</script>
