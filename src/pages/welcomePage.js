import { USER_INTERFACE_ID, ENTER_APP_BUTTON_ID } from "../constants.js";
import { createWelcomeElement } from "../views/welcomeView.js";
import { createAudio } from "../effects.js";
import { initMusicPlayer } from "../pages/mainPage.js";

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document.getElementById(ENTER_APP_BUTTON_ID).addEventListener("click", () => {
    enterApp();
    createAudio("public/assets/sound-effects/enter-button.mp3").play();
  });
};

const enterApp = () => {
  initMusicPlayer();
};
