const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AX-eg2skqjLMS3NXVcUI15ufrqmrc6-obxCsFasOYGwqgVJLjk35BnPejSMX8m-LesPA3aEhEwlK6RKn",
  client_secret: "EAUmd2Z9CRfi6A-VZkN5IjpI-LIPCJZCJAkJxW8cM2J-c0CnaUIYl-oZOpb81r96Q0I8h_mCb5LO1Ek7",
});

module.exports = paypal;
