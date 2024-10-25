const selectNavbar = () => {
  const navbarBusinesses = {
    ".nav-item.florists": ".vendor.florists",
    ".nav-item.djs": ".vendor.djs",
    ".nav-item.catering": ".vendor.catering",
    ".nav-item.venues": ".vendor.venues",
    ".nav-item.hairdressers": ".vendor.hairdressers",
    ".nav-item.clothing": ".vendor.clothing",
  };

  for (const [selector, businessType] of Object.entries(navbarBusinesses)) {
    const navbarBusiness = document.querySelectorAll(selector);
    navbarBusiness.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        document.querySelectorAll(".business").forEach((businessCard) => {
          businessCard.classList.add("hidden");
          businessCard.classList.remove("visible");
        });

        document.querySelectorAll(".vendor").forEach((vendor) => {
          vendor.classList.remove("visible");
          vendor.classList.add("hidden");
        });

        document.querySelectorAll(businessType).forEach((vendorCard) => {
          vendorCard.classList.remove("hidden");
          vendorCard.classList.add("visible");
        });
      });
    });
  }
};
