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
    .catch(() => ({ data: { discount: 0, expires: "2020-01-01" } }))
    .then((fetched) => {
      const { discount, expires } = fetched.data;
      const granted = Date.now() <= Date.parse(expires) ? discount : 0;
      logging.log(`${promoCode} allows discount of ${granted}%.`);
      return JSON.stringify({ granted, promoCode });
    })
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed);
};
