import { USER_INTERFACE_ID } from "../constants.js";

export const initMusicPlayer = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});
