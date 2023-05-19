import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import open from "react-native-open-maps";
import ButtonComp from "../../Components/ButtonComp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { styles } from "./PostDetailsStyle";
export default PostDetails = ({ navigation, route }) => {
  const item = route.params.item;
  function goToLocation() {
    open({ latitude: 30.71923776993991, longitude: 76.81066575861746 });
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={item.bannerimg}>
        <View style={styles.personheader}>
          <Image style={styles.personimg} source={item.personimg} />
          <View>
            <Text style={styles.personname}>{item.personName}</Text>
            <Text style={styles.personaddress}>{item.personaddress}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cross}
          >
            <Image source={ImagePath.cross} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomcontent}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.viewmap}>
          <ButtonComp onPress={goToLocation} title={StringContants.VIEW_MAP} />
        </View>
      </ImageBackground>
    </View>
  );
};
