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
  welcome: {
    height: moderateScale(40),
    color: colors.WHITE,
    fontSize: moderateVerticalScale(24),
    lineHeight: moderateScale(32),
    marginTop: moderateScale(16),
  },
  weAreHappy: {
    color: colors.INPUT_TEXT,
    fontSize: moderateVerticalScale(15),
    marginBottom: moderateScale(16),
  },
  forgotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(16),
    marginBottom: moderateScale(88),
  },
  useotp: {
    color: colors.WHITE,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
  },
  forgotpass: {
    color: colors.LIGHT_BLUE,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
  },
  mobilebox: {
    flexDirection: "row",
    gap: 16,
  },
  mobilecode: { flex: 0.3 },
  mobileno: {
    flex: 0.7,
  },
});
