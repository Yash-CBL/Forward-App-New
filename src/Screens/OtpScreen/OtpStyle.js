import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  backarrow: {
    width: moderateVerticalScale(13),
    height: moderateVerticalScale(12),
    marginVertical: moderateScale(6),
  },
  btncontainer: {
    marginTop: moderateScale(56),
  },
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GREY,
    paddingHorizontal: moderateScale(24),
  },
  Heading: {
    color: colors.WHITE,
    fontSize: moderateVerticalScale(24),
    marginTop: moderateScale(16),
  },
  EditMyNo: {
    color: colors.LIGHT_BLUE,
    fontSize: moderateVerticalScale(15),
    lineHeight: moderateScale(32),
    height: moderateVerticalScale(24),
  },
  otpcontainer: {
    flexDirection: "row",
    gap: moderateScale(16),
    marginTop: moderateScale(32),
  },
  otpbox: { width: moderateScale(40) },
  resend: {
    color: colors.WHITE,
    marginTop: moderateScale(120),
    marginBottom: moderateScale(24),
  },
});
