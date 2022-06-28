import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import NetInfo from "@react-native-community/netinfo";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function SyncData() {
  const [offlineValue, setOfflineValue] = useState();
  const [onlineValue, setOnlineValue] = useState();
  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
      if (isConnected) {
        setOnlineValue(offlineValue);
      }
    });
  });

  const changeValue = async (value) => {
    setOfflineValue(value);
  };

  return (
    <View style={styles.syncData.syncView}>
      <View style={styles.syncData.syncView2}>
        <Text style={styles.syncData.syncText}> Connection Status </Text>
        {isConnected ? (
          <MaterialIcons name="check" size={18} color="green" />
        ) : (
          <MaterialIcons name="clear" size={18} color="red" />
        )}
        <Slider
          style={{
            width: "90%",
          }}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#ffffff"
          thumbTintColor="#ffffff"
          minimumValue={1}
          maximumValue={100}
          step={1}
          onValueChange={changeValue}
        />
        <Text style={styles.syncData.syncText}>
          {" "}
          Offline Value <Text> {offlineValue} </Text>
        </Text>
        <Text style={styles.syncData.syncText}>
          {" "}
          Online Value <Text> {onlineValue} </Text>
        </Text>
      </View>
    </View>
  );
}