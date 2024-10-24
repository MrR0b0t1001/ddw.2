const displayBusinesses = () => {
  // Map the selectors to the business types
  const businessSelectors = {
    ".business.florists": ".vendor.florists",
    ".business.djs": ".vendor.djs",
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
    businessCards.forEach(() => {
      document.querySelectorAll(".business").forEach((businessCard) => {
        businessCard.classList.add("visible");
        businessCard.classList.remove("hidden");
      });

      document.querySelectorAll(businessTypeSelector).forEach((vendorCard) => {
        vendorCard.classList.remove("visible");
        vendorCard.classList.add("hidden");
      });
    });
    //
    //
    //
  }
};
