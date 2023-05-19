import { useState } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { styles } from "./ChnagePwdStyles";
export default ChangePwd = ({ navigation }) => {
  const [password, SetPassword] = useState("");
  const [Confirmpassword, SetConfrimPassword] = useState("");
  const [show, setShow] = useState(true);
  const [showconfirm, setShowconfirm] = useState(true);
  function goback() {
    if (!password.trim || !Confirmpassword.trim()) {
      alert("Password is Empty");
    } else if (password.trim() === Confirmpassword.trim()) {
      navigation.goBack();
    } else {
      alert("Password Missmatch");
    }
  }
  function showpass() {
    if (show === false) {
      setShow(true);
      return;
    }
    if (show === true) {
      setShow(false);
      return;
    }
  }
  function showConfirmpass() {
    if (showconfirm === false) {
      setShowconfirm(true);
      return;
    }
    if (showconfirm === true) {
      setShowconfirm(false);
      return;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.headcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btncontainer}
          >
            <Image source={ImagePath.backarrow} />
          </TouchableOpacity>
          <Text style={styles.profilehead}>Change Password</Text>
        </View>
        <View style={styles.password}>
          <InputComp
            placeholder={StringContants.Password}
            onPress={showpass}
            Show="Show"
            hide={show}
            value={password}
            onchange={(val) => {
              SetPassword(val);
            }}
          />
          <InputComp
            placeholder={StringContants.Password}
            onPress={showConfirmpass}
            Show="Show"
            hide={showconfirm}
            value={Confirmpassword}
            onchange={(val) => {
              SetConfrimPassword(val);
            }}
          />
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <ButtonComp onPress={goback} title={StringContants.Save} />
      </View>
    </View>
  );
};
