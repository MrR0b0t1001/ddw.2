// Map the selectors to the business types
const businessSelectors = {
  ".business.florists": ".vendor-florists",
  ".business.djs": ".vendor-djs",
  ".business.catering": ".vendor-catering",
  ".business.venues": ".vendor-venues",
  ".business.hairdressers": ".vendor-hairdressers",
  ".business.clothing": ".vendor-clothing",
};

const selectBusiness = () => {
  for (const [selector, businessTypeSelector] of Object.entries(
    businessSelectors,
  )) {
    const businessCards = document.querySelectorAll(selector);

    businessCards.forEach((card) => {
      card.addEventListener("click", () => {
        // Hide all business cards when any card is clicked
        document.querySelectorAll(".business").forEach((businessCard) => {
          businessCard.classList.add("hidden");
        });

        // Show the corresponding vendor cards
        document
          .querySelectorAll(businessTypeSelector)
          .forEach((vendorCard) => {
            vendorCard.classList.remove("hidden");
            vendorCard.classList.add("visible");
          });
      });
    });
  }
};
