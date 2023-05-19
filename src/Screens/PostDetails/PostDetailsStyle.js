import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../Constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  personheader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(48),
  },
  personimg: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(16),
  },
  personname: {
    width: moderateScale(144),
    color: colors.WHITE,
    fontWeight: "600",
    fontSize: 16,
  },
  personaddress: {
    width: moderateScale(144),
    color: colors.WHITE,
    fontSize: 13,
  },
  cross: {
    marginLeft: "auto",
  },
  bottomcontent: {
    marginTop: "auto",
  },
  description: {
    color: colors.WHITE,
    fontSize: moderateScale(15),
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
  },
  time: {
    marginLeft: moderateScale(16),
    fontSize: moderateScale(13),
    color: colors.INPUT_TEXT,
    marginTop: moderateScale(8),
  },
  viewmap: {
    marginTop: moderateScale(16),
    marginBottom: moderateScale(44),
  },
});
