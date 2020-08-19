export default {
  address: {
    inputId: "form__address",
    label: "Adresse",
    name: "address",
    type: "text",
    value: "",
  },
  city: {
    inputId: "form__city",
    label: "PLZ / Ort",
    name: "city",
    type: "text",
    value: "",
  },
  comment: {
    inputId: "form__comment",
    isTextArea: true,
    label: "Kommentar",
    name: "comment",
    value:
      "Soweit bin ich im Kurs:\n\n\nThemen, die bei mir aktuell sind:\n\n\nFeedback/Wünsche:\n",
  },
  confirm: {
    inputId: "form__confirm",
    label: "Bestätigen",
    name: "confirm",
    type: "password",
    help: "",
    checks: [
      {
        test: (val, allEntries) => val === allEntries.password,
        message: "Die Passwörter stimmen nicht überein.",
      },
    ],
    value: "",
  },
  confirmEmail: {
    inputId: "form__confirmEmail",
    label: "E-Mail-Adresse bestätigen",
    name: "confirmEmail",
    type: "email",
    help: "",
    checks: [
      {
        test: (val, allEntries) => val === allEntries.email,
        message: "Die E-Mail-Adressen stimmen nicht überein.",
      },
    ],
    value: "",
  },
  email: {
    inputId: "form__email",
    label: "E-Mail-Adresse",
    name: "email",
    type: "email",
    value: "",
  },
  name: {
    inputId: "form__name",
    label: "Name",
    name: "name",
    type: "text",
    value: "",
  },
  password: {
    inputId: "form__password",
    label: "Passwort",
    name: "password",
    type: "password",
    value: "",
  },
  phone: {
    inputId: "form__phone",
    label: "Telefonnummer",
    name: "phone",
    type: "tel",
    value: "",
  },
  promoCode: {
    inputId: "form__promo-code",
    label: "Rabattcode",
    name: "promoCode",
    type: "text",
    value: "",
  },
};
