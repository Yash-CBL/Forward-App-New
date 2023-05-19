import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters"
import colors from "../Constants/colors"
export default ({ title,onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}><Text style={styles.btntext}>{title}</Text></TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.RED_BTN,
        borderRadius: moderateScale(8),
        height: moderateVerticalScale(48),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:moderateScale(14), 
    },
    btntext: {
        color: colors.WHITE,
        fontSize: moderateVerticalScale(14),
        fontWeight: 'bold',
        letterSpacing: moderateScale(0.88)
    }
})