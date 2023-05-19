import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GREY,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(56),
  },
  suggest: {
    color: colors.WHITE,
    fontSize: moderateVerticalScale(15),
    fontWeight: "600",
    marginVertical: moderateScale(16),
  },
  addcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScale(24),
  },
  address: {
    color: colors.ADDRESS_GREY,
    fontSize: moderateVerticalScale(15),
  },
});
