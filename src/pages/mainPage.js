import { USER_INTERFACE_ID } from "../constants.js";
import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";

export const initMusicPlayer = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const musicPlayerContainer = document.createElement("div");
  musicPlayerContainer.classList.add("music-player-container");
  userInterface.appendChild(musicPlayerContainer);

  // Append playlist catalogue element
  const playlistsElement = createPlaylistsElement();
  musicPlayerContainer.appendChild(playlistsElement);

  //Append music player element
  const musicPlayerElement = createMusicPlayerElement();
  musicPlayerContainer.appendChild(musicPlayerElement);

};

document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});
