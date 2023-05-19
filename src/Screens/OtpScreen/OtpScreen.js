import { View, TouchableOpacity, Image, Text } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import StringContants from "../../Constants/StringContants";
import { styles } from "./OtpStyle";
export default OtpScreen = ({ navigation, route }) => {
  const mobile = route.params.mobile;
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9 }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btncontainer}
          >
            <Image source={ImagePath.backarrow} style={styles.backarrow} />
          </TouchableOpacity>
          <Text style={styles.Heading}>
            {StringContants.Enter_4_Digit} {mobile}
          </Text>
          <Text style={styles.EditMyNo}>{StringContants.Edit_My_Number}</Text>
        </View>
        <View style={styles.otpcontainer}>
          <View style={styles.otpbox}>
            <InputComp autoFocus={true} keyboardtype="numeric" />
          </View>
          <View style={styles.otpbox}>
            <InputComp keyboardtype="numeric" />
          </View>
          <View style={styles.otpbox}>
            <InputComp keyboardtype="numeric" />
          </View>
          <View style={styles.otpbox}>
            <InputComp keyboardtype="numeric" />
          </View>
        </View>
        <Text style={styles.resend}>{StringContants.Resend_Otp_in}0:14</Text>
      </View>
      <View style={{ flex: 0.1 }}>
        <ButtonComp
          onPress={() => {
            navigation.navigate(NavigationStrings.SET_PASSWORD);
          }}
          title="VERIFY"
        />
      </View>
    </View>
  );
};
