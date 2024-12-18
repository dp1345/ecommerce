const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "__",
  client_secret: "__",
});

module.exports = paypal;
