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
    paddingHorizontal: moderateScale(24),
  },
  profilehead: {
    color: colors.WHITE,
    width: moderateScale(144),
    fontSize: moderateVerticalScale(16),
    fontWeight: 600,
    marginTop: moderateScale(56),
    marginBottom: moderateScale(34),
  },
});
