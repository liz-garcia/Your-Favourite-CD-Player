// import { musicData } from "./data.js";
import { getArtistData } from "../src/api/getArtistData.js";

// For the Get Artist Info Button
export async function getArtistInfo(id) {
  try {
    const newArtistData = await getArtistData(id);
    return newArtistData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export function displayArtistInfo(infoObject) {
  // Name
  const name = infoObject.name;
  console.log(`Name: ${name}`);

  // Image
  const imgUrl = infoObject["images"]["0"]["url"];
  console.log(imgUrl);

  // Popularity
  const popularity = infoObject.popularity;
  let popularityDescription;
  if (popularity >= 50) {
    popularityDescription = "Very Popular Artist";
  } else if (popularity >= 25) {
    popularityDescription = "Artist on the Rise";
  } else {
    popularityDescription = "Emerging Artist";
  }
  console.log(`Popularity: ${popularityDescription}`);

  // Spotify
  const spotifyUrl = infoObject.external_urls.spotify;
  console.log(spotifyUrl);

  // Followers
  const followers = infoObject.followers.total;
  console.log(followers);

  // Genres
  let genres = infoObject.genres.join(', ');
  if (infoObject.genres.length === 0) {
    const defaultGenre = 'lofi';
    genres = defaultGenre;
  }
  console.log(genres);
};

