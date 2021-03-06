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
        <Text style={styles.webInfo.webText}>βπ πππππ₯ππ π ππππ :</Text>
        <Text style={styles.webInfo.webText}>ππͺπ‘π: {connectionType}</Text>
        <Text style={styles.webInfo.webText}>
          βπ πππππ₯ππ: {isConnected ? "πππ€" : "βπ "}
        </Text>
        <Text style={styles.webInfo.webText}>
          πππ₯ππ£πππ₯ π£ππππππππ: {isInternetReachable ? "πππ€" : "βπ "}
        </Text>
        <Text style={styles.webInfo.webText}>
          πππ½π πππππππ: {isWifiEnabled ? "πππ€" : "βπ "}
        </Text>
        <Text style={styles.webInfo.webText}>
          πππ₯ππ£πππ₯ πΌπ©π‘πππ€ππ§π: {connectionDetails ? "πππ€" : "βπ "}
        </Text>
        <Text style={styles.webInfo.webText}>
          {ipAddress != null ? "πβ ππππ£ππ€π€: " + ipAddress : ""}
        </Text>
      </View>
    </View>
  );
}