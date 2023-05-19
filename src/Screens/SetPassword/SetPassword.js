import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import StringContants from "../../Constants/StringContants";
import { styles } from "./SetpasswordStyle";
export default SetPassword = ({ navigation }) => {
  const [password, SetPassword] = useState("");
  const [Confirmpassword, SetConfrimPassword] = useState("");
  const [show, setShow] = useState(true);
  const [showconfirm, setShowconfirm] = useState(true);
  const [Hide, setHide] = useState("Show");
  const [ConfrimHide, setConfirmHide] = useState("Show");
  function gotologin() {
    if (!password.trim || !Confirmpassword.trim()) {
      alert("Password is Empty");
    } else if (password.trim() === Confirmpassword.trim()) {
      navigation.navigate(NavigationStrings.LOGIN);
    } else {
      alert("Password Missmatch");
    }
  }
  function showpass() {
    if (show === false) {
      setShow(true);
      setHide("Show");
      return;
    }
    if (show === true) {
      setShow(false);
      setHide("Hide");
      return;
    }
  }
  function showConfirmpass() {
    if (showconfirm === false) {
      setShowconfirm(true);
      setConfirmHide("Show");
      return;
    }
    if (showconfirm === true) {
      setShowconfirm(false);
      setConfirmHide("Hide");
      return;
    }
  }
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
          <Text style={styles.Setpass}>{StringContants.Set_password}</Text>
          <Text style={styles.Createandsecure}>
            {StringContants.Create_secure_and_unique_password}
          </Text>
        </View>
        <View style={styles.password}>
          <InputComp
            placeholder={StringContants.Password}
            onPress={showpass}
            Show={Hide}
            hide={show}
            value={password}
            onchange={(val) => {
              SetPassword(val);
            }}
          />
          <InputComp
            placeholder={StringContants.Password}
            onPress={showConfirmpass}
            Show={ConfrimHide}
            hide={showconfirm}
            value={Confirmpassword}
            onchange={(val) => {
              SetConfrimPassword(val);
            }}
          />
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <ButtonComp onPress={gotologin} title={StringContants.Signup} />
      </View>
    </View>
  );
};
