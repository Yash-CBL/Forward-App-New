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
  headcontainer: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    height: moderateScale(24),
    marginBottom: moderateScale(16),
    alignItems: "center",
    gap: 16,
  },
  btncontainer: {
    width: moderateVerticalScale(24),
    height: moderateVerticalScale(16),
  },
  profilehead: {
    color: colors.WHITE,
    height: moderateVerticalScale(24),
    fontSize: moderateVerticalScale(16),
    fontWeight: 600,
  },
  description: {
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    paddingBottom: 96,
    paddingLeft: 16,
    paddingTop: 8,
    color: colors.INPUT_TEXT,
    borderRadius: 8,
    marginBottom: moderateScale(16),
  },
  btn: {
    marginTop: "auto",
    marginBottom: moderateScale(44),
  },
  imagepicker: {
    marginBottom: moderateVerticalScale(16),
  },
});
