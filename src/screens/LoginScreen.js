console.log("### LOGIN SCREEN ACILDI ###");


import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as AuthSession from "expo-auth-session";

const SPOTIFY_CLIENT_ID = "c1a79f1f71bb46b28cc6a899875a66b6"; 
const SPOTIFY_SCOPES = [
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
];

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function LoginScreen() {
  const redirectUri = AuthSession.makeRedirectUri({
    useProxy: true,
  });
  console.log("REDIRECT:", redirectUri);


  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID,
      scopes: SPOTIFY_SCOPES,
      responseType: AuthSession.ResponseType.Token,
      usePKCE: false,
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const token = response.params.access_token;
      console.log("ACCESS TOKEN:", token);
      // burada ana sayfaya yönlendirme gelecek (henüz yok)
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Spotify</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => promptAsync({ useProxy: true })}
      >
        <Text style={styles.btnText}>Login with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: "#1DB954",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
