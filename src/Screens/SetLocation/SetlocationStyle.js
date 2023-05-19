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
  },
  locationcontainer: {
    marginTop: moderateScale(56),
    flexDirection: "row",
    justifyContent: "center",
    height: moderateVerticalScale(40),
    gap: moderateScale(8),
  },
  devicelocation: {
    color: colors.WHITE,
    height: moderateVerticalScale(40),
    fontSize: moderateVerticalScale(24),
    fontWeight: "bold",
  },
  turnonbtn: {
    backgroundColor: colors.RED_BTN,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(8),
    height: moderateVerticalScale(32),
    width: moderateVerticalScale(80),
  },
  btntext: {
    color: colors.WHITE,
  },
  turnondeviceloc: {
    height: moderateVerticalScale(40),
    width: moderateVerticalScale(248),
    color: "#C7C8C7",
    fontSize: moderateScale(14),
  },
  or: {
    alignSelf: "center",
    color: colors.WHITE,
    fontSize: moderateVerticalScale(15),
    marginVertical: moderateScale(16),
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
    color: colors.WHITE,
    fontSize: moderateVerticalScale(15),
  },
  btncontainer: {
    flex: 0.1,
  },
});
