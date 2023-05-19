import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import colors from "../../Constants/colors";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK_GREY,
    flex: 1,
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(23),
    width: moderateScale(375),
  },
  header: {
    marginTop: moderateVerticalScale(56),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateVerticalScale(24),
  },
  logoimg: {
    width: moderateScale(80),
    height: moderateScale(24),
  },
  card: {
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    width: moderateScale(328),
    // height: moderateScale(520),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(24),
    flex: 1,
  },
  personheader: {
    flexDirection: "row",
    alignItems: "center",
    margin: moderateScale(16),
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
    color: colors.INPUT_TEXT,
    fontSize: 13,
  },
  dots: {
    marginLeft: "auto",
  },
  personbanner: {
    height: moderateScale(312),
    width: moderateScale(312),
    marginHorizontal: moderateScale(5),
    backgroundColor: "pink",
    alignSelf: "center",
  },
  persondescription: {
    color: colors.WHITE,
    fontSize: moderateScale(15),
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
  },
  time: {
    marginLeft: moderateScale(16),
    fontSize: moderateScale(13),
    color: "#BFBFBF",
    marginTop: moderateScale(8),
  },
  comment: {
    fontSize: moderateScale(15),
    color: colors.WHITE,
  },
  like: {
    fontSize: moderateScale(15),
    color: colors.WHITE,
    marginLeft: moderateScale(16),
  },
  share: {
    marginLeft: "auto",
  },
  bottomarea: {
    flexDirection: "row",
    margin: moderateScale(16),
    alignItems: "center",
  },
});
