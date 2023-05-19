import React, { useState } from "react";
import {Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import ImagePath from "../Constants/ImagePath";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../Constants/colors";
export function ImagePickers() {
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection:true
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("Image Not Selected");
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.btn} />}
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Image source={ImagePath.icPlus} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.LIGHT_BACKGROUND_GREY,
    width: moderateScale(64),
    height: moderateVerticalScale(64),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  container: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
});