import { musicData } from "./data.js";
import { initWelcomePage } from "./pages/welcomePage.js";

export const loadApp = () => {
  musicData.currentPlaylistIndex = 0;
  initWelcomePage();
};

window.addEventListener("load", loadApp);
