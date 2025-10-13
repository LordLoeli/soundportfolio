// translation
import { setLanguage, applyTranslations } from "./transl_manager.js";

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();

    document.getElementById("lang-en")?.addEventListener("click", () => setLanguage("en"));
    document.getElementById("lang-de")?.addEventListener("click", () => setLanguage("de"));
});

// light-dark mode
const themeLink = document.getElementById("theme-link");
const savedTheme = localStorage.getItem("theme") || "dark";

themeLink.href = `./assets/stylesheets/${savedTheme}.css`;

document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const newTheme = themeLink.href.includes("dark.css") ? "light" : "dark";
    themeLink.href = `./assets/stylesheets/${newTheme}.css`;
    localStorage.setItem("theme", newTheme);
});
