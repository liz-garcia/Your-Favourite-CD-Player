import { ENTER_APP_BUTTON_ID } from "../constants.js";

// Creates the welcome screen
export const createWelcomeElement = () => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
    <h1 id="welcome-title">Welcome!</h1>
    <p id="welcome-message">Do you like lofi? Listen to some nice tracks with our app!</p>
    <button id="${ENTER_APP_BUTTON_ID}">Enjoy :)</button>
  `;
  return element;
};
