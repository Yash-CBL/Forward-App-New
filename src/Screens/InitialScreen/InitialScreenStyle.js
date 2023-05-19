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
    paddingHorizontal: moderateScale(24),
  },
  imglogo: {
    width: moderateScale(121),
    height: moderateScale(178),
    marginTop: moderateScale(128),
    marginHorizontal: moderateScale(127),
    alignSelf: "center",
  },
  toptext: {
    color: colors.INPUT_TEXT,
    marginTop: moderateScale(54),
    textAlign: "center",
    fontSize: moderateVerticalScale(13),
    marginBottom: moderateScale(24),
  },
  or: {
    color: colors.WHITE,
    textAlign: "center",
    marginTop: moderateScale(16),
    fontSize: moderateVerticalScale(16),
  },
  bottomtext: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: moderateScale(16),
  },
  signup: {
    color: colors.LIGHT_BLUE,
    fontSize: moderateVerticalScale(14),
  },
  newhere: {
    color: colors.WHITE,
    fontSize: moderateVerticalScale(14),
  },
});
