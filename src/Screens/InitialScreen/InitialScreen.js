import { Image, Text, TouchableOpacity } from "react-native";
import {
  GoogleSignin,statusCodes
} from '@react-native-google-signin/google-signin';
import { Platform } from "react-native";
import { View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import SocialButton from "../../Components/SocialButton";
import ImagePath from "../../Constants/ImagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import StringContants from "../../Constants/StringContants";
import { styles } from "./InitialScreenStyle";
import { useEffect } from "react";
import { sendstatus } from "../../redux/actions/stackAction";
import { savelogindata, senduserdata } from "../../redux/actions/saveuserdata";

export default InitialScreen = ({ navigation }) => {
  useEffect(()=>{
GoogleSignin.configure()
  })
  const GoogleIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
  console.log("user info",userInfo) 
  if(!!userInfo){
    savelogindata(userInfo.user)
    sendstatus(true)
  }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={ImagePath.mainlogo} />
      <Text style={styles.toptext}>
        {StringContants.By_clicking_privacy_policy}
      </Text>
      <View>
        <ButtonComp
          title={StringContants.LogIn_Phone_No}
          onPress={() => {
            navigation.navigate(NavigationStrings.LOGIN);
          }}
        />
        <Text style={styles.or}>Or</Text>
      </View>
      <SocialButton
      onPress={GoogleIn}
        logoimg={ImagePath.googlelogo}
        title={StringContants.LogIn_Google}
      />
      <SocialButton
        logoimg={ImagePath.facebooklogo}
        title={StringContants.LogIn_Facebook}
      />
     {Platform.OS === 'ios' ? <SocialButton
        logoimg={ImagePath.applelogo}
        title={StringContants.LogIn_Apple}
      />:null}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NavigationStrings.SIGNUP);
        }}
        style={styles.bottomtext}
      >
        <Text style={styles.newhere}>{StringContants.New_here}</Text>
        <Text style={styles.signup}>{StringContants.Sign_Up}</Text>
      </TouchableOpacity>
    </View>
  );
};
