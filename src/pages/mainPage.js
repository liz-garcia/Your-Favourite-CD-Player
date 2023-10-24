import { USER_INTERFACE_ID } from "../constants.js";
import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";
import { getArtistInfo, displayArtistInfo } from "../functions.js";
import { musicData } from "../data.js";

//Init Music Player
export const initMusicPlayer = () => {
  musicData.currentPlaylistIndex = 0;
  const currentPlaylist = musicData.playlists[musicData.currentPlaylistIndex];

  const availablePlaylists = musicData.playlists;

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
  // const currentArtistId = currentPlaylist.artistId;

  //TODO Assign EventListener to GetArtistInfo Button
  // let artistInfo;
  // const artistInfoButton = document.getElementById("artist-info-button");
  // async function getArtistInfo() {
  //   try {
  //     const artistData = await getArtistData(currentArtistId);
  //     console.log(artistData);
  //     artistInfo = artistData;
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  // artistInfoButton.addEventListener("click", () => {
  //   getArtistInfo();
  // });

  // const spotifyAccountLink = artistInfo.genres[0];
  // console.log(spotifyAccountLink);

  //Assign Eventlistener to Playlists Buttons
  const playlistsButtons = [
    ...document.getElementsByClassName("playlist-option"),
  ];

  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availablePlaylists.filter((playlist) => {
        if (playlist.playlistName === button.id) {
          // console.log(playlist.playlistName);
          musicData.currentPlaylistIndex = playlist.index;
          const newCurrentPlaylist = availablePlaylists[playlist.index];

          const musicPlayer = document.getElementById("musicPlayer");
          musicPlayer.remove();

          const newMusicPlayerElement =
            createMusicPlayerElement(newCurrentPlaylist);
          musicPlayerContainer.appendChild(newMusicPlayerElement);

          // TODO Get Artist Info Button!
          const newCurrentArtistId = newCurrentPlaylist.artistId;
          const artistInfoButton =
            document.getElementById("artist-info-button");
          artistInfoButton.addEventListener("click", async () => {
            try {
              const newArtistInfo = await getArtistInfo(newCurrentArtistId);
              console.log(`This is the info:`, newArtistInfo);

              displayArtistInfo(newArtistInfo);
            } catch (error) {
              console.error("Error:", error);
            }
          });
        }
      });
    });
  });
};

// TODO Evaluate if this is working as expected?
document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});

// TODO Assign EventListeners to PlaylistsButtons

// TODO Get Artist Info function
