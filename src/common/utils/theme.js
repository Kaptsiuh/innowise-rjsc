export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  const isValidTheme = savedTheme === "light" || savedTheme === "dark";

  let theme;
  if (isValidTheme) {
    theme = savedTheme;
  } else {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
