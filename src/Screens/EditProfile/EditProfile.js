import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import Profilecomp from "../../Components/Profilecomp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { styles } from "./EditProfileSTyles";
export default function EditProfile({ navigation }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function validate() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!FirstName.trim()) {
      alert("Please Enter Your First Name");
    } else if (!LastName.trim()) {
      alert("Please Enter Your Last Name");
    } else if (!email.trim()) {
      alert("Please Enter Your Email");
    } else if (!email.match(emailRegex)) {
      alert("Please Enter Your Email properly");
    } else if (!mobile.trim()) {
      alert("Please Enter Your Mobile number");
    } else {
      navigation.navigate("Profile");
    }
  }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 0.9 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btncontainer}
          >
            <Image source={ImagePath.backarrow} />
          </TouchableOpacity>
          <Text style={styles.profilehead}>Edit Profile</Text>
        </View>
        <Image style={styles.userimg} source={ImagePath.googlelogo} />
        <View>
          <View style={styles.names}>
            <View style={styles.fname}>
              <InputComp
                placeholder={StringContants.First_Name}
                keyboardtype="default"
                value={FirstName}
                onchange={(val) => {
                  if (val.match("^[A-Za-z_-]*$")) {
                    setFirstName(val);
                  }
                }}
                maxLength={15}
              />
            </View>
            <View style={styles.lname}>
              <InputComp
                placeholder={StringContants.Last_Name}
                keyboardtype="default"
                value={LastName}
                onchange={(val) => {
                  if (val.match("^[A-Za-z_-]*$")) {
                    setLastName(val);
                  }
                }}
                maxLength={15}
              />
            </View>
          </View>
          <View>
            <InputComp
              placeholder={StringContants.Email}
              keyboardtype="email-address"
              value={email}
              onchange={(val) => setEmail(val)}
            />
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
                onchange={(val) => {
                  if (val.match("^[0-9]*$")) {
                    setMobile(val);
                  }
                }}
                maxLength={10}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={{ flex: 0.1 }}>
        <ButtonComp title={StringContants.Save_Changes} onPress={validate} />
      </View>
    </View>
  );
}
