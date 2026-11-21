// Blessed Gebremichael Catholic Secondary School website
// Opens and closes the menu on small screens, and shows the print button on the School Profile page.
(function () {
  var root = document.documentElement;
  var menuBtn = document.querySelector(".menu-btn");

  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!root.classList.contains("menu-open"));
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("menu-open")) {
      setMenu(false);
      if (menuBtn) menuBtn.focus();
    }
  });

  var printBtn = document.getElementById("print-profile");
  if (printBtn && typeof window.print === "function") {
    printBtn.hidden = false;
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }
})();
