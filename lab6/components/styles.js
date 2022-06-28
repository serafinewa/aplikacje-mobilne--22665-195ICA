import { StyleSheet } from "react-native";

const styles = {};

styles.mainPage = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  mainButton: {
    flex: 1,
    backgroundColor: "#ffcc26",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 70,
    marginVertical: 20,
    borderRadius: 50,
  },
  mainText: {
    fontSize: 24,
  },
});

styles.imagesLoad = StyleSheet.create({
  imageView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageImg: {
    flex: 1,
    borderRadius: 50,
    borderColor: "#ffcc26",
    borderWidth: 1,
    margin: 5,
  },
  imageText: {
    fontSize: 24,
    color: "black",
    alignSelf: "center",
  },
});

styles.imagesSlider = StyleSheet.create({
  sliderView: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderImg: {
    flex: 2,
    width: "95%",
    borderRadius: 50,
    borderColor: "#ffcc26",
    borderWidth: 1,
    marginTop: 20,
  },
});

styles.lazyLoading = StyleSheet.create({
  loadView: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadImg: {
    flex: 1,
    width: "95%",
    borderRadius: 50,
    borderColor: "#ffcc26",
    borderWidth: 1,
    marginTop: 20,
  },
  loadIcons: {
    flexDirection: "row",
    margin: "2%",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

styles.webInfo = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  webBorder: {
    backgroundColor: "#ffcc26",
    borderRadius: 50,
    borderColor: "#ffcc26",
    borderWidth: 1,
    padding: 20,
  },
  webText: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
  },
});

styles.asyncStor = StyleSheet.create({
  asyncView: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  asyncView2: {
    backgroundColor: "#ffcc26",
    color: "white",
    height: "70%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
  },
  asyncInput: {
    color: "white",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "black",
    width: "90%",
    margin: 5,
    padding: 5,
  },
  asyncButton: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    margin: 5,
    padding: 10,
  },
});

styles.syncData = StyleSheet.create({
  syncView: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  syncView2: {
    backgroundColor: "#ffcc26",
    height: "70%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
  },
  syncText: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
  },
});

export default styles;