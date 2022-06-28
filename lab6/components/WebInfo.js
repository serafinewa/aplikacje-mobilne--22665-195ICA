import NetInfo from "@react-native-community/netinfo";
import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function WebInfo() {
  const [connectionType, setConnectionType] = useState("");
  const [isConnected, setIsConnected] = useState();
  const [isInternetReachable, setIsInternetReachable] = useState();
  const [isWifiEnabled, setIsWifiEnabled] = useState();
  const [connectionDetails, setConnectionDetails] = useState();
  const [ipAddress, setIpAddress] = useState();

  NetInfo.fetch().then((state) => {
    setIsConnected(state.isConnected);
    setConnectionType(state.type);
    setIsInternetReachable(state.isInternetReachable);
    setIsWifiEnabled(state.isWifiEnabled);
    setConnectionDetails(state.details.isInternetExpensive);
    setIpAddress(state.details.ipAddress);
  });
  return (
    <View style={styles.webInfo.webView}>
      <View style={styles.webInfo.webBorder}>
        <Text style={styles.webInfo.webText}>ℂ𝕠𝕟𝕟𝕖𝕔𝕥𝕚𝕠𝕟 𝕀𝕟𝕗𝕠:</Text>
        <Text style={styles.webInfo.webText}>𝕋𝕪𝕡𝕖: {connectionType}</Text>
        <Text style={styles.webInfo.webText}>
          ℂ𝕠𝕟𝕟𝕖𝕔𝕥𝕖𝕕: {isConnected ? "𝕐𝕖𝕤" : "ℕ𝕠"}
        </Text>
        <Text style={styles.webInfo.webText}>
          𝕀𝕟𝕥𝕖𝕣𝕟𝕖𝕥 𝕣𝕖𝕒𝕔𝕙𝕒𝕓𝕝𝕖: {isInternetReachable ? "𝕐𝕖𝕤" : "ℕ𝕠"}
        </Text>
        <Text style={styles.webInfo.webText}>
          𝕎𝕚𝔽𝕚 𝕖𝕟𝕒𝕓𝕝𝕖𝕕: {isWifiEnabled ? "𝕐𝕖𝕤" : "ℕ𝕠"}
        </Text>
        <Text style={styles.webInfo.webText}>
          𝕀𝕟𝕥𝕖𝕣𝕟𝕖𝕥 𝔼𝕩𝕡𝕖𝕟𝕤𝕚𝕧𝕖: {connectionDetails ? "𝕐𝕖𝕤" : "ℕ𝕠"}
        </Text>
        <Text style={styles.webInfo.webText}>
          {ipAddress != null ? "𝕀ℙ 𝕒𝕕𝕕𝕣𝕖𝕤𝕤: " + ipAddress : ""}
        </Text>
      </View>
    </View>
  );
}