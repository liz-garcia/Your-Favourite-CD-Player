// import { musicData } from "../data.js";

// Create the welcome screen
export const createMusicPlayerElement = (playlist) => {
  const element = document.createElement("div");
  element.id = "music-player";

  // const cdPlayerImage = "public/assets/images/cd-player.png";
  const playButtonImg = "public/assets/images/play.png";
  const pauseButtonImg = "public/assets/images/pause.png";
  const previousButtonImg = "public/assets/images/previous.png";
  const nextButtonImg = "public/assets/images/next.png";
  const playbackBgImg = "public/assets/images/playback-bg.png";
  const cdImage = playlist.cdImage;

  element.innerHTML = String.raw`
    <div id="cd-player-wrapper" class="img-wrapper">
        <img src="${cdImage}" alt="CD player" />
    </div>
    <div id="playback">
      <div id="playback-bg-wrapper" class="img-wrapper">
          <img src="${playbackBgImg}" alt="CD player" />
      </div>
      <div id="playback-buttons">
          <img class="small" src="${previousButtonImg}" alt="Previous track" />
          <img src="${playButtonImg}" alt="Play" />
          <img src="${pauseButtonImg}" alt="Pause" />
          <img class="small" src="${nextButtonImg}" alt="Next track" />
      </div>
      <h2 id="playlist-name">${playlist.playlistName}</h2>
    </div>
    <button id="artist-info-button">Get Artist info</button>
  `;
  return element;
};
