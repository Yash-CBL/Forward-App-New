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
    paddingBottom: moderateScale(33),
  },
  topcontainer: {
    flex: 0.9,
  },
  headcontainer: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    height: moderateScale(24),
    marginBottom: moderateScale(42),
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
});
