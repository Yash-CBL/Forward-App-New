import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(46,46,46,1)",
    flex: 1,
    paddingLeft: moderateScale(24),
  },
  notification: {
    color: colors.WHITE,
    width: moderateScale(144),
    fontSize: moderateVerticalScale(16),
    fontWeight: 600,
    marginTop: moderateScale(56),
    marginBottom: moderateScale(24),
  },
  userimg: {
    height: moderateVerticalScale(40),
    width: moderateVerticalScale(40),
    borderRadius: 24,
    backgroundColor: "grey",
  },
  datatxt: {
    color: colors.RED_BTN,
    fontSize: moderateVerticalScale(15),
  },
  datatxt2: {
    color: colors.WHITE,
    fontSize: moderateVerticalScale(15),
  },
  notifycontainer: {
    flexDirection: "row",
    gap: moderateScale(16),
    paddingBottom: moderateScale(17),
  },
  timetxt: {
    color: colors.INPUT_TEXT,
    fontSize: moderateVerticalScale(12),
  },
  notifytext: {
    borderBottomWidth: 1,
    borderBottomColor: colors.INPUT_TEXT,
    paddingBottom: moderateScale(17),
    width: moderateScale(398),
  },
});
