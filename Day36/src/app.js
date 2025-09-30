if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then(() => console.log("Service Worker registered"))
      .catch((err) => console.error("SW registration failed:", err));
  });
}

let promptEvent;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  promptEvent = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  if (promptEvent) {
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    promptEvent = null;
    installBtn.style.display = "none";
  }
});

window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
  installBtn.style.display = "none";
});
