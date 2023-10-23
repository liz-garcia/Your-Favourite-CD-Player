import { musicData } from "../data.js";

// Creates the welcome screen
export const createPlaylistsElement = () => {
  const element = document.createElement("div");
  element.id = "playlists";

  const logo = createLogoElement();
  element.appendChild(logo);

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
        <span class="button-text">${playlistObject.playlistName}</span>
        <img src="${cdCaseImage}" alt="${playlistObject.playlistName}" />
    </div>
      `;

  return buttonElement;
};

const createLogoElement = () => {
  const logoElement = document.createElement("h1");
  logoElement.classList.add("logo");
  logoElement.id = "logo";
  logoElement.innerHTML = String.raw`
    <span>Lofi</span> CD Player`;

  return logoElement;
};
