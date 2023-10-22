// import { musicData } from "../data.js";

// Create the welcome screen
export const createMusicPlayerElement = (playlist) => {
  const element = document.createElement("div");
  element.id = "music-player";

  // const cdPlayerImage = "public/assets/images/cd-player.png";
  // const playPauseButtonImg = "public/assets/images/play-pause.png";
  // const previousButtonImg = "public/assets/images/previous.png";
  // const nextButtonImg = "public/assets/images/next.png";
  const cdImage = playlist.cdImage;

  element.innerHTML = String.raw`
    <div id="cd-player" class="img-wrapper">
        <img src="${cdImage}" alt="CD player" />
    </div>
    <h2>${playlist.playlistName}</h2>
    <button>Artist info</button>
    <div id="playback-buttons">
        <img src="" alt="Previous track" />
        <img src="" alt="Play/Pause" />
        <img src="" alt="Next track" />
    </div>
    <hr>
  `;
  return element;
};

