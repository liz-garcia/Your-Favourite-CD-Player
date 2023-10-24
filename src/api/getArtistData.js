import { getAccessToken } from "./auth.js";

// const artistId = "5VWxPzSlM3bEky01nXffoN";
// Replace with the artist's Spotify ID

// Create a function to fetch artist data by ID
export async function getArtistData(artistId) {
  try {
    const accessToken = await getAccessToken();
    const authHeader = `Bearer ${accessToken}`;
    const apiUrl = `https://api.spotify.com/v1/artists/${artistId}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("New Error at getArtistData");
      // console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    throw error;
    // console.error("Error:", error);
  }
};

// Call the function with an artist's Spotify ID
// getArtistData(artistId);