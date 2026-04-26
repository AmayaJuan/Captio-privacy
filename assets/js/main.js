const DEFAULT_LANGUAGE = "es";
const TRANSLATIONS_URL = "assets/data/translations.json?v=20260426";

let translations = {};

function setLanguage(lang) {
  const dictionary = translations[lang];

  if (!dictionary) {
    return;
  }

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

async function loadTranslations() {
  try {
    const response = await fetch(TRANSLATIONS_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${TRANSLATIONS_URL}`);
    }

    translations = await response.json();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations();

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll("[data-scroll-target]").forEach((element) => {
    element.addEventListener("click", () => scrollToSection(element.dataset.scrollTarget));
  });

  setLanguage(DEFAULT_LANGUAGE);
});
