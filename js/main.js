(function () {
  "use strict";

  const STORAGE_KEY = "itgonzo-lang";
  const THEME_KEY = "itgonzo-theme";
  const CONTACT_EMAIL = "support.manager@itgonzo.com";

  const translations = {
    uk: {
      nav_home: "Головна",
      nav_about: "Про компанію",
      nav_services: "Послуги",
      nav_contact: "Контакти",
      nav_cta: "Зв'язатися",
      hero_badge: "IT-послуги",
      hero_title: "Розробка, консалтинг та цифрові рішення для вашого бізнесу",
      hero_lead:
        "Повний цикл IT-послуг: програмування, публікація ПЗ, консультування, хостинг, веб-портали та інформаційні сервіси.",
      hero_cta: "Зв'язатися з нами",
      hero_metrics_aria: "Ключові переваги компанії",
      hero_metric_1_t: "24/7",
      hero_metric_1_s: "Завжди на зв’язку",
      hero_metric_2_t: "AI + Web",
      hero_metric_2_s: "Фокус на реалізації",
      hero_metric_3_t: "Повний цикл",
      hero_metric_3_s: "Від ідеї до запуску",
      about_title: "Про компанію",
      about_sub: "ITGONZO LLC — команда, яка допомагає бізнесу впевнено проходити цифрові зміни.",
      about_text:
        "Ми створюємо та розвиваємо веб‑продукти, налаштовуємо інфраструктуру й інтеграції, підсилюємо онлайн‑присутність компаній. Працюємо прагматично: від задачі та метрики — до стабільного результату.",
      about_ai_title: "AI-можливості для прискорення роботи",
      about_ai_1: "Швидкі відповіді клієнтам і попередня кваліфікація запитів",
      about_ai_2: "Створення контенту: описи послуг, пости, листи та шаблони",
      about_ai_3: "Інтелектуальний пошук по документах і базі знань компанії",
      about_ai_4: "Автоматизація повторюваних задач у CRM, підтримці та продажах",
      services_title: "Послуги",
      services_sub: "Рішення, які допомагають бізнесу рости швидше.",
      svc_badge_main: "Основне",
      svc_badge_fast: "Швидкий старт",
      svc_badge_growth: "Зростання",
      svc_badge_ai: "AI",
      svc_badge_reliable: "Надійність",
      svc_badge_support: "Супровід",
      svc_web_title: "Верстка та розробка сайтів",
      svc_web_text: "Лендінги, корпоративні сайти, каталоги. Швидко, адаптивно, з фокусом на конверсію.",
      svc_ui_title: "Дизайн та UI/UX",
      svc_ui_text: "Сучасний стиль, зрозуміла структура, прототипи. Щоб сайт виглядав і продавав.",
      svc_automation_title: "Автоматизація процесів",
      svc_automation_text: "Інтеграції, CRM-логіка, кабінети, заявки. Менше ручної роботи — більше результату.",
      svc_ai_title: "AI-функції для бізнесу",
      svc_ai_text: "Чат-боти, генерація контенту, пошук по базі знань, автоматизація звернень і підтримки.",
      svc_infra_title: "Хостинг та інфраструктура",
      svc_infra_text: "Налаштування домену, SSL, деплой, моніторинг. Стабільна робота й швидке завантаження.",
      svc_support_title: "Підтримка та розвиток",
      svc_support_text: "Оновлення, нові сторінки, оптимізація швидкості й безпеки. Ми на зв’язку після запуску.",
      contact_title: "Контакти",
      contact_sub: "Реквізити та спосіб зв'язку.",
      label_name: "Назва компанії",
      label_code: "Ідентифікаційний код",
      label_email: "Електронна пошта",
      label_address: "Місцезнаходження юридичної особи",
      label_address_short: "Адреса",
      value_address: "Україна, 04201, місто Київ, вул.Кульженків Сім'ї, будинок 35, приміщення 1",
      footer_legal: "Повна юридична назва (українською)",
      footer_foreign: '"ITGONZO" ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ',
      label_legal_en: "Юридична назва (англійською)",
      footer_rights: "Усі права захищені.",
      form_title: "Написати нам",
      form_hint:
        "Заповніть форму — заявка буде надіслана та продубльована на email.",
      form_name: "Ім’я",
      form_email: "Email",
      form_message: "Повідомлення",
      form_submit: "Надіслати",
      form_err_validation: "Заповніть усі поля коректно.",
      form_ok: "Дякуємо! Заявку надіслано.",
      form_err_send: "Не вдалося надіслати. Спробуйте ще раз.",
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_cta: "Contact us",
      hero_badge: "IT services",
      hero_title: "Development, consulting, and digital solutions for your business",
      hero_lead:
        "Full-cycle IT services: programming, software publishing, consulting, hosting, web portals, and information services.",
      hero_cta: "Contact us",
      hero_metrics_aria: "Key company strengths",
      hero_metric_1_t: "24/7",
      hero_metric_1_s: "Support window",
      hero_metric_2_t: "AI + Web",
      hero_metric_2_s: "Delivery focus",
      hero_metric_3_t: "Full cycle",
      hero_metric_3_s: "From idea to launch",
      about_title: "About the company",
      about_sub: "ITGONZO LLC helps teams move through digital change with confidence.",
      about_text:
        "We build and grow web products, set up infrastructure and integrations, and strengthen your online presence. We work pragmatically—from goals and metrics to stable delivery.",
      about_ai_title: "AI capabilities to speed up operations",
      about_ai_1: "Fast customer replies and initial lead qualification",
      about_ai_2: "Content creation: service copy, posts, emails, and templates",
      about_ai_3: "Smart search across internal documents and knowledge base",
      about_ai_4: "Automation of repetitive tasks in CRM, support, and sales",
      services_title: "Services",
      services_sub: "Solutions designed to help your business grow faster.",
      svc_badge_main: "Core",
      svc_badge_fast: "Quick start",
      svc_badge_growth: "Growth",
      svc_badge_ai: "AI",
      svc_badge_reliable: "Reliable",
      svc_badge_support: "Support",
      svc_web_title: "Website build & front-end",
      svc_web_text: "Landing pages, corporate sites, catalogs. Fast, responsive, conversion-focused.",
      svc_ui_title: "Design & UI/UX",
      svc_ui_text: "Modern visuals, clear structure, prototypes—so your site looks great and sells.",
      svc_automation_title: "Process automation",
      svc_automation_text: "Integrations, CRM logic, dashboards, lead flows. Less manual work—more output.",
      svc_ai_title: "AI features for business",
      svc_ai_text: "Chatbots, content generation, knowledge-base search, and support automation.",
      svc_infra_title: "Hosting & infrastructure",
      svc_infra_text: "Domain, SSL, deployment, monitoring. Stable performance and fast loading.",
      svc_support_title: "Support & growth",
      svc_support_text: "Updates, new pages, performance and security improvements. We stay with you after launch.",
      contact_title: "Contact",
      contact_sub: "Company details and how to reach us.",
      label_name: "Company name",
      label_code: "Identification code",
      label_email: "Email",
      label_address: "Legal address",
      label_address_short: "Address",
      value_address: "Ukraine, 04201, Kyiv, Kulzhenkiv Sim'yi St., building 35, office 1",
      footer_legal: "Full legal name (Ukrainian)",
      footer_foreign: '"ITGONZO" LIMITED LIABILITY COMPANY',
      label_legal_en: "Legal name (English)",
      footer_rights: "All rights reserved.",
      form_title: "Write to us",
      form_hint: "Fill the form — the request will be submitted and emailed to us.",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_submit: "Send",
      form_err_validation: "Please fill in all fields correctly.",
      form_ok: "Thanks! Your request has been sent.",
      form_err_send: "Could not send. Please try again.",
    },
  };

  function encodeFormData(fd) {
    const params = new URLSearchParams();
    fd.forEach(function (value, key) {
      params.append(key, String(value));
    });
    return params.toString();
  }

  function initContactForm() {
    const form = document.getElementById("gonzo-contact-form");
    const status = document.getElementById("gonzo-form-status");
    if (!form || !status) return;

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      const lang = getStoredLang();
      const dict = translations[lang] || translations.uk;

      const name = String(form.querySelector("#gonzo-name")?.value || "").trim();
      const email = String(form.querySelector("#gonzo-email")?.value || "").trim();
      const message = String(form.querySelector("#gonzo-message")?.value || "").trim();

      if (!name || !email || !message) {
        status.textContent = dict.form_err_validation;
        status.className = "form-status is-err";
        return;
      }

      const fd = new FormData(form);
      // Add a readable subject for Netlify dashboard entries
      fd.set("subject", lang === "en" ? "ITGONZO website request" : "Заявка з сайту ITGONZO");

      try {
        const postUrl =
          (typeof form.getAttribute === "function" && form.getAttribute("action")) ||
          window.location.pathname ||
          "/";
        const resp = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeFormData(fd),
        });

        if (!resp.ok) throw new Error("bad_status");

        status.textContent = dict.form_ok;
        status.className = "form-status is-ok";
        form.reset();
      } catch (_) {
        // Fallback: open mail client with a draft
        const subject = lang === "en" ? "ITGONZO — enquiry from website" : "ITGONZO — звернення з сайту";
        const body =
          (lang === "en" ? "Name" : "Ім'я") +
          ": " +
          name +
          "\n" +
          "Email: " +
          email +
          "\n\n" +
          message;
        window.location.href =
          "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body.slice(0, 1800));

        status.textContent = dict.form_ok;
        status.className = "form-status is-ok";
      }
    });
  }

  function getStoredLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "uk" || v === "en") return v;
    } catch (_) {}
    return "uk";
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }

  function getStoredTheme() {
    try {
      const v = localStorage.getItem(THEME_KEY);
      if (v === "dark" || v === "light") return v;
    } catch (_) {}
    return "dark";
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
  }

  function applyTheme(theme) {
    const t = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-switch button[data-theme]").forEach(function (btn) {
      const active = btn.getAttribute("data-theme") === t;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.uk;
    document.documentElement.lang = lang === "en" ? "en" : "uk";
    document.title =
      lang === "en" ? "ITGONZO LLC — IT services" : "ITGONZO LLC — IT-послуги";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] !== undefined) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll(".lang-switch button[data-lang]").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function closeMobileNav() {
    const panel = document.getElementById("nav-panel");
    const toggle = document.getElementById("nav-toggle");
    if (panel) panel.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function initLang() {
    let lang = getStoredLang();
    applyTranslations(lang);

    document.querySelectorAll(".lang-switch button[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        lang = btn.getAttribute("data-lang");
        if (lang !== "uk" && lang !== "en") return;
        setStoredLang(lang);
        applyTranslations(lang);
        closeMobileNav();
      });
    });
  }

  function initTheme() {
    let theme = getStoredTheme();
    applyTheme(theme);
    document.querySelectorAll(".theme-switch button[data-theme]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        theme = btn.getAttribute("data-theme");
        if (theme !== "dark" && theme !== "light") return;
        setStoredTheme(theme);
        applyTheme(theme);
        closeMobileNav();
      });
    });
  }

  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const panel = document.getElementById("nav-panel");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      const open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 767px)").matches) closeMobileNav();
      });
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) closeMobileNav();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initTheme();
      initLang();
      initNav();
      initContactForm();
    });
  } else {
    initTheme();
    initLang();
    initNav();
    initContactForm();
  }
})();
