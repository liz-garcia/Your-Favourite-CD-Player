import { USER_INTERFACE_ID } from "../constants.js";
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

  //TODO Artist ID const
  const currentArtistId = currentPlaylist.artistId;

  //TODO Assign DOMListener to GetArtistInfo Button
  const artistInfoButton = document.getElementById("artist-info-button");
  artistInfoButton.addEventListener("click", () => {
    async function getArtistInfo() {
      try {
        const artistInfo = await getArtistData(currentArtistId);
        console.log(artistInfo);
      } catch (error) {
        console.error("Error:", error);
      };
    };
    getArtistInfo();
  });

  //Assign DOMlistener to Playlists Buttons
  const playlistsButtons = [...document.getElementsByClassName("playlist-option")];
  const availablePlaylists = musicData.playlists;

  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availablePlaylists.filter((playlist) => {
        if (playlist.playlistName === button.id) {
          // console.log(playlist.playlistName);
          musicData.currentPlaylistIndex = playlist.index;
          const newCurrentPlaylist = availablePlaylists[playlist.index];
          
          const musicPlayer = document.getElementById("musicPlayer");
          musicPlayer.remove();
          
          const newMusicPlayerElement = createMusicPlayerElement(newCurrentPlaylist);
          musicPlayerContainer.appendChild(newMusicPlayerElement);

          // Get Artist Info Button!
          const newCurrentArtistId = newCurrentPlaylist.artistId;
          const artistInfoButton = document.getElementById("artist-info-button");
          artistInfoButton.addEventListener("click", () => {
            async function getArtistInfo() {
              try {
                const newArtistInfo = await getArtistData(newCurrentArtistId);
                console.log(newArtistInfo);
              } catch (error) {
                console.error("Error:", error);
              };
            };
            getArtistInfo();
          });
        }
      })
    });
  });
};

// TODO Evaluate if this is working as expected?
document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});
