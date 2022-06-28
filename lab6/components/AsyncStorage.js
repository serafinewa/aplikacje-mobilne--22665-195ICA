import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function AsyncStorageFunction() {
  const [asyncValue, setAsyncValue] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [readKey, setReadKey] = useState("");
  const storeData = async () => {
    try {
      await AsyncStorage.setItem(keyValue, asyncValue);
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(readKey);
      if (value !== null) {
        alert("𝕍𝕒𝕝𝕦𝕖 𝕗𝕠𝕣 𝕜𝕖𝕪: " + readKey + " 𝕚𝕤 " + value);
      }
    } catch (e) {
      alert("ℕ𝕠𝕥 𝕒 𝕡𝕣𝕠𝕡𝕖𝕣 𝕜𝕖𝕪");
    }
  };

  return (
    <View style={styles.asyncStor.asyncView}>
      <View style={styles.asyncStor.asyncView2}>
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setKeyValue(e.target.value)}
          placeholder="𝕂𝕖𝕪"
        />
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setAsyncValue(e.target.value)}
          placeholder="𝕍𝕒𝕝𝕦𝕖"
        />
        <TouchableOpacity
          style={styles.asyncStor.asyncButton}
          onPress={storeData}
        >
          <Text>Add Value</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.asyncStor.asyncInput}
          onChange={(e) => setReadKey(e.target.value)}
          placeholder="𝕂𝕖𝕪"
        />
        <TouchableOpacity
          style={styles.asyncStor.asyncButton}
          onPress={getData}
        >
          <Text>ℂ𝕙𝕖𝕔𝕜 𝕜𝕖𝕪 𝕧𝕒𝕝𝕦𝕖</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}