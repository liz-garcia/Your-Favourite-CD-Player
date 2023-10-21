import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "./constants.js";

export async function getAccessToken() {
  const authHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const authData = new URLSearchParams();
  authData.append("grant_type", "client_credentials");
  authData.append("client_id", SPOTIFY_CLIENT_ID);
  authData.append("client_secret", SPOTIFY_CLIENT_SECRET);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: authHeaders,
      body: authData,
    });

    if (!response.ok) {
      throw new Error("Authorization failed");
    }

    const data = await response.json();
    const accessToken = data.access_token;
    console.log("Access Token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error for the calling function to handle
  }
}
