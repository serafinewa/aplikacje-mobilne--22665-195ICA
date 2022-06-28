import { ActivityIndicator, View } from "react-native";
import { Image } from "@rneui/themed";
import { Entypo, Zocial, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function LazyLoading() {
  return (
    <View style={styles.lazyLoading.loadView}>
      <Image
        containerStyle={styles.lazyLoading.loadImg}
        source={{
          uri: "https://www.nationalgallery.org.uk/media/34076/n-3863-00-000126-hd.jpg?center=0.41459627329192544,0.514792899408284&mode=crop&width=720&height=720&rnd=132385890123800000",
        }}
        style={{ width: "100%", height: "100%" }}
        PlaceholderContent={<ActivityIndicator color="#fff" size="large" />}
      />
      <View style={styles.lazyLoading.loadIcons}>
        <AntDesign name="doubleright" size={40} color="#fcae05" />
        <Zocial name="appstore" size={40} color="#ffc132" />
        <AntDesign name="doubleleft" size={40} color="#feca5a" />

        <AntDesign name="right" size={40} color="#fdd774" />
        <Zocial name="spotify" size={40} color="#ffa300" />
        <AntDesign name="left" size={40} color="#a25b00" />

        <AntDesign name="caretright" size={40} color="#fcae05" />
        <AntDesign name="creditcard" size={40} color="#ffc132" />
        <AntDesign name="caretleft" size={40} color="#feca5a" />

        <AntDesign name="exclamationcircle" size={40} color="#fdd774" />
        <AntDesign name="star" size={40} color="#ffa300" />
        <AntDesign name="exclamationcircleo" size={40} color="#a25b00" />

        <AntDesign name="swapright" size={40} color="#fcae05" />
        <AntDesign name="pausecircleo" size={40} color="#ffc132" />
        <AntDesign name="swapleft" size={40} color="#feca5a" />

        <AntDesign name="shoppingcart" size={40} color="#fdd774" />
        <AntDesign name="user" size={40} color="#ffa300" />
        <AntDesign name="picture" size={40} color="#a25b00" />

        <AntDesign name="videocamera" size={40} color="#fcae05" />
        <AntDesign name="tags" size={40} color="#ffc132" />
        <AntDesign name="smileo" size={40} color="#feca5a" />

        <AntDesign name="hearto" size={40} color="#fdd774" />
        <AntDesign name="smile-circle" size={40} color="#ffa300" />
        <AntDesign name="heart" size={40} color="#a25b00" />

        <AntDesign name="github" size={40} color="#fcae05" />
        <AntDesign name="mobile1" size={40} color="#ffc132" />
        <AntDesign name="tablet1" size={40} color="#feca5a" />

        <AntDesign name="car" size={40} color="#fdd774" />
        <AntDesign name="idcard" size={40} color="#ffa300" />
        <AntDesign name="gift" size={40} color="#a25b00" />

        <AntDesign name="like1" size={40} color="#fcae05" />
        <AntDesign name="apple-o" size={40} color="#ffc132" />
        <AntDesign name="aliwangwang-o1" size={40} color="#feca5a" />

        <AntDesign name="wifi" size={40} color="#fdd774" />
        <AntDesign name="earth" size={40} color="#ffa300" />
        <Zocial name="windows" size={40} color="#a25b00" />

      </View>
      <View style={styles.lazyLoading.loadIcons}>
        <AntDesign name="youtube" size={40} color="#fcae05" />
        <AntDesign name="dribbble" size={40} color="#ffc132" />
        <AntDesign name="instagram" size={40} color="#feca5a" />

        <AntDesign name="slack" size={40} color="#fdd774" />
        <Entypo name="air" size={40} color="#ffa300" />
        <Entypo name="adjust" size={40} color="#a25b00" />

        <Entypo name="baidu" size={40} color="#fcae05" />
        <Entypo name="beamed-note" size={40} color="#ffc132" />
        <Entypo name="cake" size={40} color="#feca5a" />

        <Entypo name="brush" size={40} color="#fdd774" />
        <Entypo name="bucket" size={40} color="#ffa300" />
        <Entypo name="colours" size={40} color="#a25b00" />

        <Entypo name="chat" size={40} color="#fcae05" />
        <Entypo name="camera" size={40} color="#ffc132" />
        <Entypo name="controller-play" size={40} color="#feca5a" />

        <Entypo name="controller-record" size={40} color="#fdd774" />
        <Entypo name="controller-stop" size={40} color="#ffa300" />
        <Entypo name="credit" size={40} color="#a25b00" />

        <Entypo name="drink" size={40} color="#fcae05" />
        <Entypo name="drop" size={40} color="#ffc132" />
        <Entypo name="emoji-flirt" size={40} color="#feca5a" />

        <Entypo name="facebook-with-circle" size={40} color="#fdd774" />
        <Entypo name="feather" size={40} color="#ffa300" />
        <Entypo name="flash" size={40} color="#a25b00" />

        <Entypo name="heart-outlined" size={40} color="#fcae05" />
        <Entypo name="game-controller" size={40} color="#ffc132" />
        <Entypo name="heart" size={40} color="#feca5a" />

        <Entypo name="google-drive" size={40} color="#fdd774" />
        <Entypo name="github" size={40} color="#ffa300" />
        <Entypo name="home" size={40} color="#a25b00" />

        <Entypo name="icloud" size={40} color="#fcae05" />
        <Entypo name="instagram-with-circle" size={40} color="#ffc132" />
        <Entypo name="keyboard" size={40} color="#feca5a" />

        <Entypo name="laptop" size={40} color="#fdd774" />
        <Entypo name="light-up" size={40} color="#ffa300" />
        <Entypo name="location-pin" size={40} color="#a25b00" />
      </View>
    </View>
  );
}