import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../Constants/colors";

export default ({
  Show,
  keyboardtype,
  onPress,
  onchange,
  hide,
  value,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#FFFFFF"
        keyboardType={keyboardtype}
        onChangeText={onchange}
        secureTextEntry={hide}
        placeholder={placeholder}
        value={value}
        {...props}
      />
      {Show ? (
        <TouchableOpacity onPress={onPress} style={styles.show}>
          <Text style={{ color: "#FFFFFF" }}>{Show}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    color: colors.WHITE,
    opacity: 0.5,
  },
  inputcontainer: {
    height: moderateVerticalScale(48),
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    borderRadius: moderateScale(8),
    color: colors.WHITE,
    alignItems: "center",
    flexDirection: "row",
    padding: moderateScale(16),
    marginTop: moderateScale(16),
  },
  show: {
    marginLeft: "auto",
    opacity: 0.5,
  },
});
