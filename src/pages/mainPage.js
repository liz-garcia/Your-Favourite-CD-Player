import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";
import { enableArtistInfoButton, createMusicPlayerContainer } from "../functions.js";
import { musicData } from "../data.js";

//Init Music Player
export const initMusicPlayer = () => {
  musicData.currentPlaylistIndex = 0;
  const currentPlaylist = musicData.playlists[musicData.currentPlaylistIndex];

  const availablePlaylists = musicData.playlists;

  // Create Music Player Container
  const musicPlayerContainer = createMusicPlayerContainer();

  // Append playlist catalogue element
  const playlistsElement = createPlaylistsElement();
  musicPlayerContainer.appendChild(playlistsElement);

  //Append music player element
  const musicPlayerElement = createMusicPlayerElement(currentPlaylist);
  musicPlayerContainer.appendChild(musicPlayerElement);

  // Enable Artist Info Button
  enableArtistInfoButton(currentPlaylist);

  //Assign Eventlistener to Playlists Buttons
  const playlistsButtons = [
    ...document.getElementsByClassName("playlist-option"),
  ];

  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availablePlaylists.filter((playlist) => {
        if (playlist.playlistName === button.id) {
          musicData.currentPlaylistIndex = playlist.index;
          const newCurrentPlaylist = availablePlaylists[playlist.index];

          const previousMusicPlayerElement = document.getElementById("musicPlayer");
          previousMusicPlayerElement.remove();

          const newMusicPlayerElement =
            createMusicPlayerElement(newCurrentPlaylist);
          musicPlayerContainer.appendChild(newMusicPlayerElement);

          enableArtistInfoButton(newCurrentPlaylist);
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
