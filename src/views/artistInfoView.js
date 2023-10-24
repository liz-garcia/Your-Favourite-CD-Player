export const createArtistInfoElement = (artistData) => {
    const element = document.createElement("div");
    element.id = "artistInfo";

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
      <h2 id="playlistName">${playlist.playlistName}</h2>
    </div>
    <button id="artist-info-button">Get Artist info</button>
  `;
  return element;
};