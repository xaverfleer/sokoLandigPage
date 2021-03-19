<template>
  <div class="order-flow">
    <h2>Einkaufswagen</h2>
    <CurrencySelector :currency="state.currency" />
    <div class="form-aligned shopping-cart">
      <p class="shopping-cart__label">Im Einkaufswagen:</p>
      <p>
        1x {{ offer.name }} – {{ currencyShown }} {{ price }}
        {{ discountMessage }}
      </p>
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
      <button @click="handleInvoiceButtonClick" class="payment-method">
        Rechnung
      </button>
      <div class="paypal-button-container"></div>
    </div>
  </div>
</template>

<script>
import CurrencySelector from "./CurrencySelector.vue";
import FormEntry from "./FormEntry.vue";
import FormVue from "./FormVue.vue";
import appData from "~/data/appData";
import stateM8t from "../stateManagement";

export default {
  components: { CurrencySelector, FormEntry, FormVue },
  computed: {
    compactData() {
      return this.formFields
        .concat(this.promoCodeForm.fields)
        .concat({ name: "paymentMethod", value: this.paymentMethod })
        .reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {});
    },
    currencyShown() {
      return this.state.currency === "EUR" ? "€" : "CHF";
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
      const exact = this.offer.price * (1 - this.discount);
      return Math.floor(exact / 5) * 5;
    },
    showPaypal() {
      return this.formIsValid && this.price > 0;
    },
    stringifiedData() {
      return JSON.stringify(this.compactData);
    },
  },
  data() {
    return {
      discountWasChecked: false,
      discount: 0,
      formFields: [
        { ...appData.formEntries.name, fullWidth: true },
        { ...appData.formEntries.email },
        { ...appData.formEntries.confirmEmail },
        { ...appData.formEntries.city },
        { ...appData.formEntries.address, optional: true },
        { ...appData.formEntries.phone, optional: true },
        { ...appData.formEntries.birthdays, optional: true },
      ],
      formIsValid: false,
      paymentMethod: undefined,
      promoCode: undefined,
      promoCodeForm: {
        fields: [{ ...appData.formEntries.promoCode }],
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
      state: {},
    };
  },
  methods: {
    createPaidUser() {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `/.netlify/functions/registerPaidUser`);
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
    handleInvoiceButtonClick() {
      this.paymentMethod = "invoice";
      this.createPaidUser();
    },
    handleSubmit() {
      this.updateHelp(this.formFields);
      if (this.isFormValid())
        if (this.price <= 0) this.createPaidUser();
        else this.waitForPaypal();
    },
    handleUserCreationSuccess(xhr) {
      if (xhr.response === "Account upgraded") {
        stateM8t.upgradeToPaidAccount();
        this.$router.push(appData.routes.upgradedAccount.to);
      } else this.$router.push(appData.routes.registered.to);
    },
    handleUserCreationFailure() {
      alert(
        `Hoppla, uns ist ein Fehler unterlaufen. Bitte wiederhole deine Aktion oder kontaktiere uns unter kurs@so-kommunizieren.ch oder +41 77 44 66 505`
      );
    },
    handlePaymentSuccess() {
      this.paymentMethod = "paypal/credit-card";
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
      const { price } = this;
      const { currency } = this.state;
      document.querySelector(".paypal-button-container").innerHTML = "";
      paypal
        .Buttons({
          createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: price,
                  },
                  description: "so* kommunizieren mit deinem Baby",
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(function(details) {
              vueThis.handlePaymentSuccess();
            });
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
  mounted() {
    this.state = stateM8t.subscribe((state) => {
      this.state = state;
    });
  },
  props: ["offer"],
};
</script>
