let currentLang = localStorage.getItem("lang") || "en";

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

export function applyTranslations() {
  if (!currentLang) currentLang = "en"; // safety fallback

  if (window.globalTranslations) {
    document.querySelectorAll("[data-i18n-global]").forEach((el) => {
      const key = el.getAttribute("data-i18n-global");
      el.innerHTML = globalTranslations[currentLang][key] || "";
    });
  }

  if (window.pageTranslations) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = pageTranslations[currentLang][key] || "";
    });
  }
}
