(() => {
  const root = document.documentElement;
  let preference = "system";

  try {
    const saved = localStorage.getItem("cv-theme");
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {}

  const theme =
    preference === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : preference;

  root.dataset.themePreference = preference;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
