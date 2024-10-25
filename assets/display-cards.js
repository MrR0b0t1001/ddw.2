const selectBusiness = () => {
  // Map the selectors to the business types
  const businessSelectors = {
    ".business.florists": ".vendor.florists",
    ".business.djs": ".vendor.djs",
    ".business.transportation": ".vendor.transportation",
    ".business.musicians": ".vendor.musicians",
    ".business.photographers": ".vendor.photographers",
    ".business.videographers": ".vendor.videographers",
    ".business.catering": ".vendor.catering",
    ".business.venues": ".vendor.venues",
    ".business.hairdressers": ".vendor.hairdressers",
    ".business.clothing": ".vendor.clothing",
  };

  for (const [selector, businessTypeSelector] of Object.entries(
    businessSelectors,
  )) {
    //
    //
    //
    const businessCards = document.querySelectorAll(selector);
    businessCards.forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".business").forEach((businessCard) => {
          businessCard.classList.add("hidden");
          businessCard.classList.remove("visible");
        });

        document
          .querySelectorAll(businessTypeSelector)
          .forEach((vendorCard) => {
            vendorCard.classList.remove("hidden");
            vendorCard.classList.add("visible");
          });
      });
    });
    //
    //
    //
  }
};
