// Create the welcome screen
export const createMusicPlayerElement = (playlist) => {
  const element = document.createElement("div");
  element.id = "musicPlayer";

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
      <h2 id="playlistName">${playlist.playlistName}</h2>
    </div>
    <button id="artist-info-button">Get Artist info</button>
  `;
  return element;
};

