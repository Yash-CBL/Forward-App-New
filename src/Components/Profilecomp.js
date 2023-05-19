import { Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../Constants/colors";
export default ({ title, img, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={{ width: moderateScale(20) }} source={img} />
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: moderateScale(20),
    height: moderateVerticalScale(20),
    marginBottom: moderateScale(32),
    width: "100%",
  },
  txt: {
    color: colors.WHITE,
    fontSize: moderateVerticalScale(15),
  },
});
