import { USER_INTERFACE_ID } from "../constants.js";
import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";
import { musicData } from "../data.js";

export async function initMain() {
  await initMusicPlayer();
  await activatePlaylistsButtons();
};

async function initMusicPlayer() {
  musicData.currentPlaylistIndex = 0;
  const currentPlaylist = musicData.playlists[musicData.currentPlaylistIndex];

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const musicPlayerContainer = document.createElement("div");
  musicPlayerContainer.classList.add("music-player-container");
  userInterface.appendChild(musicPlayerContainer);

  // Append playlist catalogue element
  const playlistsElement = createPlaylistsElement();
  musicPlayerContainer.appendChild(playlistsElement);

  //Append music player element
  const musicPlayerElement = createMusicPlayerElement(currentPlaylist);
  musicPlayerContainer.appendChild(musicPlayerElement);

};

// TODO Evaluate if this is working as expected?
document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});

//TODO Assign DOMlisteners to Playlists Buttons
async function activatePlaylistsButtons() {
  const playlistsButtons = [...document.getElementsByClassName("playlist-option")];
  const availablePlaylists = musicData.playlists;

  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availablePlaylists.forEach((playlist) => {
        if (playlist.playlistName === button.id) {
          // console.log(playlist.playlistName);
          musicData.currentPlaylistIndex = playlist.index;
          const newCurrentPlaylist = availablePlaylists[playlist.index];
          
          const musicPlayer = document.getElementById(musicPlayer);
          musicPlayer.remove;
          
          const newMusicPlayerElement = createMusicPlayerElement(newCurrentPlaylist);
          musicPlayerContainer.appendChild(newMusicPlayerElement);
        };
      });
    });
  });
};