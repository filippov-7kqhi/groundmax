/* ---------------------------------------------------------------------------
   Runtime configuration for GroundMaxx. Edited through /admin.html, or by hand.

   THIS FILE IS PUBLIC. Everything in it ships to every visitor.
   Payment Link URLs, business details and the admin hash are all fine to publish.
   A Stripe SECRET key (sk_live_... / sk_test_...) is NOT. Never put one here.
--------------------------------------------------------------------------- */
window.SITE_CONFIG = {
  admin: { passHash: "5b9e9741342f4f8a87a03b52634853031e9478d49220cadd57e189392e0b7bb3" },

  business: {
    company:   "",
    companyNo: "",
    vatNo:     "",
    street:    "",
    city:      "",
    state:     "",
    postcode:  "",
    phone:     ""
  },

  analyticsEndpoint: "https://agrimax-groundmax-collector.stellapark1141.workers.dev",

  checkoutEndpoint: "https://agrimax-groundmax-collector.stellapark1141.workers.dev/checkout",

  paymentLinks: {
    "GM-VHF71": "https://buy.stripe.com/5kQaEWewb6UYaBI1vPeZ204",
    "GM-LFS53": "https://buy.stripe.com/28EaEW2Ntgvy118cateZ205",
    "GM-PHD18": "https://buy.stripe.com/eVq9AS9bR1AE4dkcateZ206",
    "GM-RC72": "https://buy.stripe.com/5kQ6oG4VBcfi1185M5eZ207"
  }
};
