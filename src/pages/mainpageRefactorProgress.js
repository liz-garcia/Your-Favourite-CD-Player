import { USER_INTERFACE_ID } from "../constants.js";
import { getPlaylist, updateCurrentPlaylistIndex, removeMusicPlayer } from "../functions.js";
import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";
import { getArtistData } from "../api/getArtistData.js";
import { musicData } from "../data.js";

export const initMusicPlayer = () => {
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

  //Enable PlaylistsButtons
  const playlistsButtons = [
    ...document.getElementsByClassName("playlist-option"),
  ];
  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPlaylist = getPlaylist(button);
      updateCurrentPlaylistIndex(selectedPlaylist);
      removeMusicPlayer();
      const newPlayer = createMusicPlayerElement(selectedPlaylist);
      musicPlayerContainer.appendChild(newPlayer);
    });
  });

};

// TODO Evaluate if this is working as expected?
document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});


