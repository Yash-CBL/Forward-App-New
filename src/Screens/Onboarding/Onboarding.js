import { Image, Text, SafeAreaView } from "react-native";
import { View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import StringContants from "../../Constants/StringContants";
import { styles } from "./OnboardingStyles";

export default Onboarding = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.main}
        scrollEnabled={true}
        pagingEnabled
      >
        <View style={styles.card}>
          <Image style={styles.img} source={ImagePath.onboarding1} />
          <Text style={styles.heading}>
            {StringContants.Hendrerit_vulputate_sem}
          </Text>
          <Text style={styles.text2}>{StringContants.Aenean_et_aenean}</Text>
        </View>
        <View style={styles.card2}>
          <Image style={styles.img} source={ImagePath.onboarding1} />
          <Text style={styles.heading}>
            {StringContants.Hendrerit_vulputate_sem}
          </Text>
          <Text style={styles.text2}>{StringContants.Aenean_et_aenean}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomarea}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.INITIAL_SCREEN);
          }}
        >
          <Text style={styles.getstarted}>{StringContants.Get_Started}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
