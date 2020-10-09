import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: 0.24 * height,
    backgroundColor: "#BFEAF5",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  part_1_footer: {
    backgroundColor: "#BFEAF5",
    ...StyleSheet.absoluteFillObject,
  },
  part_2_footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: width - 120,
    height: 45,
    fontSize: 14,
    borderRadius: 25,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "rgba(255,255,255,0.7)",
    marginVertical: 10,
  },
  forgetPassword: {
    color: "rgba(0,0,0,0.4)",
  },
  btnLogin: {
    width: width - 180,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#BFEAF5",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 14,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});
