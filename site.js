(function () {
  const root = document.documentElement;
  const body = document.body;
  const buttons = Array.from(document.querySelectorAll("[data-lang-switch]"));
  const defaultLang = localStorage.getItem("site-lang") || "id";
  const passwordKey = "site-access-protected-content";
  const accessPassword = "i love u";

  function applyLanguage(lang) {
    root.setAttribute("data-lang", lang);
    root.lang = lang === "en" ? "en" : "id";
    body.setAttribute("data-lang", lang);

    buttons.forEach((button) => {
      const isActive = button.dataset.langSwitch === lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const titleId = body.dataset.titleId;
    const titleEn = body.dataset.titleEn;
    if (titleId && titleEn) {
      document.title = lang === "en" ? titleEn : titleId;
    }

    localStorage.setItem("site-lang", lang);
  }

  function buildAccessGate() {
    if (!body.dataset.protected) {
      return;
    }

    if (sessionStorage.getItem(passwordKey) === "true") {
      return;
    }

    body.classList.add("site-locked");

    const gate = document.createElement("div");
    gate.className = "access-gate";
    gate.innerHTML = `
      <div class="access-card" role="dialog" aria-modal="true" aria-labelledby="access-title">
        <span class="eyebrow">
          <span class="lang-id">Akses Menu</span>
          <span class="lang-en">Menu Access</span>
        </span>
        <h2 id="access-title">
          <span class="lang-id">Masukkan password untuk membuka halaman.</span>
          <span class="lang-en">Enter the password to open the pages.</span>
        </h2>
        <p>
          <span class="lang-id">Gunakan password yang sudah diberikan untuk mengakses menu website.</span>
          <span class="lang-en">Use the provided password to access the website menu.</span>
        </p>
        <form class="access-form">
          <label class="access-label" for="site-password">
            <span class="lang-id">Password</span>
            <span class="lang-en">Password</span>
          </label>
          <input id="site-password" class="access-input" name="password" type="password" autocomplete="off" />
          <button class="button button-primary access-button" type="submit">
            <span class="lang-id">Buka Menu</span>
            <span class="lang-en">Unlock Menu</span>
          </button>
          <button class="button button-secondary access-close" type="button">
            <span class="lang-id">Close</span>
            <span class="lang-en">Close</span>
          </button>
          <p class="access-error" hidden>
            <span class="lang-id">Password belum sesuai.</span>
            <span class="lang-en">The password is not correct yet.</span>
          </p>
        </form>
      </div>
    `;

    body.appendChild(gate);

    const form = gate.querySelector(".access-form");
    const input = gate.querySelector(".access-input");
    const error = gate.querySelector(".access-error");
    const closeButton = gate.querySelector(".access-close");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const normalized = (input.value || "").trim().toLowerCase();

      if (normalized === accessPassword) {
        sessionStorage.setItem(passwordKey, "true");
        body.classList.remove("site-locked");
        gate.remove();
        return;
      }

      error.hidden = false;
      input.focus();
      input.select();
    });

    closeButton.addEventListener("click", function () {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      window.location.href = "index.html";
    });

    input.focus();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      applyLanguage(this.dataset.langSwitch || "id");
    });
  });

  applyLanguage(defaultLang);
  buildAccessGate();
})();
