import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isOffline ? (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>
            You are offline. Please check your internet connection.
          </Text>
        </View>
      ) : (
        <WebView
          source={{ uri: "https://www.credit-debit.com/" }}
          style={[styles.webview, { marginTop: 20 }]}
          startInLoadingState={true}
          onError={() => setIsOffline(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  offlineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  offlineText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
  },
});
