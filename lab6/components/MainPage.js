import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MainPage({ navigation }) {
  return (
    <View style={styles.mainPage.mainView}>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("ImageLoad")}
      >
        <Text style={styles.mainPage.mainText}>Image Load</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("ImageSlider")}
      >
        <Text style={styles.mainPage.mainText}>Image Size Slider</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("LazyLoading")}
      >
        <Text style={styles.mainPage.mainText}>Lazy Loading</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("WebInfo")}
      >
        <Text style={styles.mainPage.mainText}>Web Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("AsyncStorage")}
      >
        <Text style={styles.mainPage.mainText}>Async Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainPage.mainButton}
        onPress={() => navigation.navigate("SyncData")}
      >
        <Text style={styles.mainPage.mainText}>Sync Data</Text>
      </TouchableOpacity>
    </View>
  );
}