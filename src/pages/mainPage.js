import { createPlaylistsElement } from "../views/playlistsView.js";
import { createMusicPlayerElement } from "../views/musicPlayerView.js";
import { enableArtistInfoButton, createMusicPlayerContainer } from "../functions.js";
import { createAudio } from "../effects.js";
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

  // let selectedPlaylist = null;

  // playlistsButtons.forEach((button) => {
  //   availablePlaylists.filter((playlist) => {
  //     if (playlist.playlistName === button.id) {
  //         const audioId = playlist.playlistName;
  //         const audio = createAudio(`${playlist.tracks.track}`);
  //         audio.id = audioId;
  //     }
  //   });
  // });

  playlistsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availablePlaylists.filter((playlist) => {
        if (playlist.playlistName === button.id) {
          musicData.currentPlaylistIndex = playlist.index;
          const newCurrentPlaylist = availablePlaylists[playlist.index];

          // Get all <audio> elements
          let audioElements = document.querySelectorAll('audio');

          // Loop through each <audio> element and remove it
          audioElements.forEach(function(audioElement) {
              audioElement.parentNode.removeChild(audioElement);
          });
          const previousMusicPlayerElement = document.getElementById("musicPlayer");
          previousMusicPlayerElement.remove();

          const newMusicPlayerElement =
            createMusicPlayerElement(newCurrentPlaylist);
          musicPlayerContainer.appendChild(newMusicPlayerElement);
          
          const currentAudioId = playlist.playlistName;
          const currentAudio = document.getElementById(currentAudioId);

          createAudio(`${playlist.tracks.track}`).play();

          // const audio = createAudio(`${playlist.tracks.track}`);
          // audio.play();

          // if (selectedPlaylist !== newCurrentPlaylist) {
          //   currentAudio.pause();
          // }

          enableArtistInfoButton(newCurrentPlaylist);
        }
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
});
