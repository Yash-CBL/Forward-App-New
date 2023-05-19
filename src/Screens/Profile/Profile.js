import { View, Text } from "react-native";
import Profilecomp from "../../Components/Profilecomp";
import ImagePath from "../../Constants/ImagePath";
import { sendstatus } from "../../redux/actions/stackAction";
import { ClearAsyncData } from "../../utils/utils";

import { styles } from "./ProfileStyle";
import { cleanLoginData } from "../../redux/actions/saveuserdata";
export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.profilehead}>Profile</Text>
      <Profilecomp
        title="Edit Profile"
        img={ImagePath.icUser1}
        onPress={() => navigation.navigate("EditProfile")}
      />
      <Profilecomp
        title="Change Password"
        img={ImagePath.icChangepwd}
        onPress={() => navigation.navigate("ChangePwd")}
      />
      <Profilecomp
        title="Signout"
        img={ImagePath.icSignout}
        onPress={() => {
          ClearAsyncData("Details").then(() => {
            ClearAsyncData("Userdata").then(() => {
            sendstatus(false);
            cleanLoginData()
          });
          });
         
        }}
      />
    </View>
  );
}
