import { musicData } from "../data.js";

// Create the welcome screen
export const createMusicPlayerElement = () => {
  const element = document.createElement("div");
  element.id = "music-player";

  const cdPlayerImage = "public/assets/images/cd-player.png";

  element.innerHTML = String.raw`
    <div class="img-wrapper">
        <img src="${cdPlayerImage}" alt="CD player" />
    </div>
  `;
  return element;
};
