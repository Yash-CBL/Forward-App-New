import { TextInput } from "react-native";
import { View, TouchableOpacity, Image, Text } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { ImagePickers } from "../../Components/ImagePicker";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { styles } from "./AddPostStyle";

export default AddPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btncontainer}
        >
          <Image source={ImagePath.backarrow} />
        </TouchableOpacity>
        <Text style={styles.profilehead}>{StringContants.Add_info}</Text>
      </View>
      <View style={styles.imagepicker}>
        <ImagePickers />
      </View>
      <View>
        <TextInput
          style={styles.description}
          placeholderTextColor="rgba(255,255,255,0.5)"
          placeholder={StringContants.Write_description}
        />
        <InputComp placeholder={StringContants.Add_location} />
      </View>
      <View style={styles.btn}>
        <ButtonComp title={StringContants.Post} />
      </View>
    </View>
  );
};
