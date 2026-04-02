
(function () {
  var GA_MEASUREMENT_ID = window.CHATSWORTH_GA_ID || "G-XXXXXXXXXX";
  var analyticsReady = false;

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    script.onload = function () {
      analyticsReady = true;
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);
    };
    document.head.appendChild(script);
  }

  function emit(name, params) {
    try {
      window.gtag("event", name, params || {});
    } catch (err) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    emit("page_view", {
      page_title: document.title,
      page_path: location.pathname,
    });

    document.querySelectorAll('a.btn-primary, a.btn-outline, a.btn-ghost, .nav-cta, .drawer-cta, .pkg-cta, .micro-card-cta').forEach(function (el) {
      el.addEventListener("click", function () {
        emit("cta_click", {
          page_path: location.pathname,
          cta_text: (el.textContent || "").trim(),
          cta_target: el.getAttribute("href") || "",
        });
      });
    });

    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        emit("contact_attempt", { page_path: location.pathname });
      });
    }

    document.addEventListener("chatsworth:formSuccess", function () {
      emit("generate_lead", {
        page_path: location.pathname,
        form_name: "wedding_inquiry",
      });
    });
  });
})();
