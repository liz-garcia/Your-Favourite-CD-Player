import { musicData } from "./data.js";

//FOR PLAYLISTS BUTTONS
const availablePlaylists = musicData.playlists;

export const getPlaylist = (button) => {
    availablePlaylists.filter((playlist) => {
    if (playlist.playlistName === button.id) {
      console.log(playlist);
        return playlist;
    }
  });
};

export const updateCurrentPlaylistIndex = (playlist) => {
  const newIndex = availablePlaylists.indexOf(playlist);
  musicData.currentPlaylistIndex = newIndex;
};

export const removeMusicPlayer = () => {
  const musicPlayer = document.getElementById("musicPlayer");
  musicPlayer.remove();
}