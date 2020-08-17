const db = require("./private/db");
const logging = require("./private/logging");
const responding = require("./private/responding");

exports.handler = function register(event, context, callback = () => {}) {
  logging.logStart("Start verify promo code");
  const respond = responding.responseHandlers(callback);

  const { promoCode } = JSON.parse(event.body);

  logging.log(`Request discount for promo codes ${promoCode}`);
  db.get
    .discount(promoCode)
    .catch(() => ({ data: { discount: 0 } }))
    .then((fetched) => {
      const { discount } = fetched.data;
      logging.log(`${promoCode} allows discount of ${fetched.data.discount}%.`);
      return JSON.stringify({ discount, promoCode });
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
