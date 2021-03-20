<script>
import Buchen from "./Buchen.vue";

export default {
  ...Buchen,
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/buchen/" },
      {
        name: "description",
        content: "Buchen und unbeschränkten Zugriff sichern.",
      },
    ],
    script: [
      {
        async: true,
        src:
          // Production account
          "https://www.paypal.com/sdk/js?client-id=AVxs7MSWpOS4Dl88lLb4EPFLK0WVj2x38B69JlPVgtaHXlV5UAiosc_HXefejUgY0a_azV9ktFYclM5E&currency=EUR&integration-date=2020-08-03",
        // Sandbox account
        // "https://www.paypal.com/sdk/js?client-id=AU3WQ_fkz9T61156i3E3RGNIg0doaMBqq1FLMEhno702Tth_MZix5a3Dn1LUPsTqNRZ0NoaTobLuRAXE&currency=EUR&integration-date=2020-08-03&debug=true",
      },
    ],
    title: "Kurs buchen (Euro)",
  },
};
</script>
