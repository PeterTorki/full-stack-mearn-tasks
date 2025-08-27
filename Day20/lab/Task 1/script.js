const toggleTheme = document.querySelector("#toggle");
const html = document.querySelector("html");

toggleTheme.addEventListener("click", () => {
  html.classList.toggle("dark");
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  html.classList.toggle("dark");
}
