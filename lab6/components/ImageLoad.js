import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function ImageLoad() {
  return (
    <View style={styles.imagesLoad.imageView}>
      <Text style={styles.imagesLoad.imageText}>𝕀𝕞𝕒𝕘𝕖 𝕝𝕠𝕒𝕕𝕖𝕕 𝕨𝕚𝕥𝕙 𝕦𝕣𝕚 </Text>
      <Image
        style={styles.imagesLoad.imageImg}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/970px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        }}
      />
      <Text style={styles.imagesLoad.imageText}>𝕀𝕞𝕒𝕘𝕖 𝕝𝕠𝕒𝕕𝕖𝕕 𝕨𝕚𝕥𝕙 𝕒𝕤𝕤𝕖𝕥𝕤</Text>
      <Image
        style={styles.imagesLoad.imageImg}
        source={require("../assets/obrazek.png")}
      />
    </View>
  );
}