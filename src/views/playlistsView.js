import { musicData } from "../data.js";

// Creates the welcome screen
export const createPlaylistsElement = () => {
  const element = document.createElement("div");
  element.id = "playlists";

  const availablePlaylists = musicData.playlists;
  availablePlaylists.forEach((playlist) => {
    const playlistButton = createButtonElement(playlist);
    element.appendChild(playlistButton);
  });

  return element;
};

const createButtonElement = (playlistObject) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("playlist-option");
  buttonElement.id = playlistObject.playlistName;

  const cdCaseImage = "public/assets/images/cd-case.png";

  buttonElement.innerHTML = String.raw`
    <div class="content-wrapper">
        <img src="${cdCaseImage}" alt="${playlistObject.playlistName}" />
        <span class="button-text">${playlistObject.playlistName}</span>
    </div>
      `;

  return buttonElement;
};
