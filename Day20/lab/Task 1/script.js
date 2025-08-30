const toggleBtn = document.getElementById("toggle");
const html = document.documentElement;

// Load theme from localStorage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-bs-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", newTheme); // Save theme to localStorage
});
