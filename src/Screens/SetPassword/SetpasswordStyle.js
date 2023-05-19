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
  Setpass: {
    height: moderateScale(40),
    color: colors.WHITE,
    fontSize: moderateVerticalScale(24),
    lineHeight: moderateScale(32),
    marginTop: moderateScale(16),
  },
  Createandsecure: {
    color: colors.INPUT_TEXT,
    fontSize: moderateVerticalScale(15),
    marginBottom: moderateScale(16),
  },
  password: {
    marginBottom: moderateScale(136),
  },
});
