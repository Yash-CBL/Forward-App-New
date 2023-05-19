import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../Constants/colors";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK_GREY,
    flex: 1,
  },
  main: {
    backgroundColor: colors.DARK_GREY,
  },
  card: {
    height: moderateVerticalScale(647),
    width: moderateVerticalScale(315),
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    alignItems: "center",
    flex: 1,
    marginLeft: moderateScale(24),
    borderRadius: moderateScale(16),
    marginTop: moderateScale(57),
    paddingHorizontal: moderateScale(24),
  },
  card2: {
    height: moderateVerticalScale(647),
    width: moderateVerticalScale(315),
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    alignItems: "center",
    flex: 1,
    marginLeft: moderateScale(8),
    borderRadius: moderateScale(16),
    marginTop: moderateScale(57),
    paddingHorizontal: moderateScale(24),
  },
  img: {
    marginTop: moderateScale(100),
    marginHorizontal: moderateScale(53),
  },
  heading: {
    fontSize: moderateScale(22),
    color: colors.WHITE,
    lineHeight: moderateScale(32),
    marginTop: moderateScale(90),
    textAlign: "center",
  },
  text2: {
    fontSize: 13,
    color: colors.INPUT_TEXT,
    textAlign: "center",
    marginTop: moderateScale(8),
  },
  getstarted: {
    color: colors.WHITE,
    fontSize: moderateScale(15),
    fontWeight: 500,
    lineHeight: moderateVerticalScale(32),
    textAlign: "right",
    marginRight: moderateScale(15),
  },
  bottomarea: {
    margin: moderateScale(23),
  },
});
