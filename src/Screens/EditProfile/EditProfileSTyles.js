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
    paddingBottom: moderateScale(44),
  },
  headcontainer: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    height: moderateScale(24),
    marginBottom: moderateScale(34),
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
  userimg: {
    height: moderateVerticalScale(100),
    width: moderateVerticalScale(100),
    alignSelf: "center",
    marginTop: moderateVerticalScale(42),
    borderRadius: moderateScale(100),
    marginBottom: 52,
  },
  mobileno: {
    marginBottom: moderateScale(88),
    flex: 0.7,
  },
  names: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
  fname: {
    flex: 1,
  },
  lname: {
    flex: 1,
  },
  mobilebox: {
    flexDirection: "row",
    gap: 16,
  },
  mobilecode: { flex: 0.3 },
});
