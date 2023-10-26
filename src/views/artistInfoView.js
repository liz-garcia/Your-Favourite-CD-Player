export const createArtistInfoElement = (artistInfoObject) => {
  const element = document.createElement("div");
  element.classList.add("popup");
  element.id = "popup";

  element.innerHTML = String.raw`
      <div class="popup-content">
          <span class="close" id="closePopup">&times;</span>
          <img src="${artistInfoObject.imgUrl}" alt="${artistInfoObject.name}">
          <h2>${artistInfoObject.name}</h2>
          <p><span class="bold">Genres:</span> ${artistInfoObject.genres}</p>
          <p><span class="bold">Popularity:</span> ${artistInfoObject.popularity}</p>
          <p><span class="bold">Followers:</span> ${artistInfoObject.followers}</p>
          <p><a target="_blank" href="${artistInfoObject.spotifyUrl}">Spotify Account</a></p>
      </div>
  `;
  return element;
};
