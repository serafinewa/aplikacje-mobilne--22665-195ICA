import { Image, View } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { useState } from "react";

export default function ImageSlider() {
  const [imageScale, setImageScale] = useState(0.75);

  const resizeImage = (value) => {
    setImageScale(value);
  };

  return (
    <View style={styles.imagesSlider.sliderView}>
      <Image
        style={[
          styles.imagesSlider.sliderImg,
          { transform: [{ scale: imageScale }] },
        ]}
        source={{
          uri: "https://www.decormint.com/storage/thumbs/own/a1496019d531/thumbnw_8c19dd78807045dbdbe00f91f5f52bb6.jpg",
        }}
      />
      <Slider
        style={{
          width: "80%",
        }}
        value={0.75}
        maximumValue={1}
        minimumValue={0.1}
        minimumTrackTintColor="#ffcc26"
        maximumTrackTintColor="#ffffff"
        thumbTintColor="#ffcc26"
        onValueChange={resizeImage}
      />
    </View>
  );
}
