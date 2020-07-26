window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let burger = document.querySelector(".humburger")[0];

  burger.addEventListener("clic", () => {
    if (burger.classList.contains("humburger_active")) {
      burger.classList.remove("humburger_active");
    } else {
      burger.classList.add("humburger_active");
    }
  });
});
