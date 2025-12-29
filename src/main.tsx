import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./styles/index.css";

const rootElement = document.documentElement;
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const syncThemeWithSystem = (event?: MediaQueryListEvent) => {
  const isDark = event ? event.matches : mediaQuery.matches;
  rootElement.classList.toggle("dark", isDark);
  rootElement.style.colorScheme = isDark ? "dark" : "light";
};

syncThemeWithSystem();
if (typeof mediaQuery.addEventListener === "function") {
  mediaQuery.addEventListener("change", syncThemeWithSystem);
} else {
  mediaQuery.addListener(syncThemeWithSystem);
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
  
