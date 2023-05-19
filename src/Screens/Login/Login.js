import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import StringContants from "../../Constants/StringContants";
import { SendAsyncData } from "../../utils/utils";

import { styles } from "./Loginstyles";

export default Login = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [Hide, setHide] = useState("Show");

  async function validateLogin() {
    if (!mobile.trim()) {
      alert("Enter your mobile number");
    } else if (!password.trim()) {
      alert("Enter your password");
    } else {
      await SendAsyncData("Details", { Mobile: mobile, Password: password });
      navigation.navigate(NavigationStrings.SET_LOCATION);
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
          <Text style={styles.welcome}>{StringContants.Welcome}</Text>
          <Text style={styles.weAreHappy}>{StringContants.We_are_Happy}</Text>
        </View>
        <View style={styles.mobilebox}>
          <View style={styles.mobilecode}>
            <InputComp placeholder="+91" keyboardtype="numeric" />
          </View>
          <View style={styles.mobileno}>
            <InputComp
              placeholder={StringContants.Mobile_No}
              keyboardtype="numeric"
              value={mobile}
              maxLength={10}
              onchange={(val) => {
                if (val.match("^[0-9]*$")) {
                  setMobile(val);
                }
              }}
              maxln={10}
            />
          </View>
        </View>
        <View style={styles.password}>
          <InputComp
            placeholder={StringContants.Password}
            onPress={showpass}
            value={password}
            maxLength={8}
            onchange={(val) => {
              setPassword(val);
            }}
            
            Show={Hide}
            hide={show}
          />
        </View>
        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.useotp}>{StringContants.UseOTP}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotpass}>
              {StringContants.Forgot_password}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 0.1 }}>
        <ButtonComp title={StringContants.Login} onPress={validateLogin} />
      </View>
    </View>
  );
};
