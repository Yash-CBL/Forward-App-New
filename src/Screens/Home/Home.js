import axios from "axios";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Text, Image, View } from "react-native";
import open from "react-native-open-maps";
import { useSelector } from "react-redux";
import { BASE_URL, LOGIN, GET_STATIC_DATA, POSTDATA } from "../../config/urls";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { GetApiData, LoginApi } from "../../redux/actions/apiAction";
import { styles } from "./Homestyles";
export default Home = ({ navigation }) => {
  const [postdata,setPostData]=useState()
 

  carddata = [
    {
      Id: "1",
      personimg: ImagePath.applelogo,
      personName: "Yash Chouhan",
      personaddress: "Sukhna Lake ,Sector 1, Chandigarh",
      bannerimg: ImagePath.banner,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1hr ago",
      comment: "124",
      like: "478",
      lat:30.744725190844328, 
      long:76.81061878237743
    },
    {
      Id: "2",
      personimg: ImagePath.googlelogo,
      personName: "Natesh Kumar",
      personaddress: "Elante Mall, Chandigarh",
      bannerimg: ImagePath.banner,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "4hr ago",
      comment: "24",
      like: "678",
      lat:30.705428401754855, 
      long:76.80119172285497
    },
    {
      Id: "3",
      personimg: ImagePath.googlelogo,
      personName: "Sheetal",
      personaddress: "Shimla,Himachal Pradesh",
      bannerimg: ImagePath.banner,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "2hr ago",
      comment: "714",
      like: "4678",
      lat:31.103203252248896,
      long: 77.17378309731714
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logoimg} source={ImagePath.homelogo} />
        <TouchableOpacity
          onPress={() =>
            open({ latitude: 30.71923776993991, longitude: 76.81066575861746 })
          }
        >
          <Image source={ImagePath.locationicon} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1, alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
        data={carddata}
        keyExtractor={(item) => item.Id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.personheader}>
              <Image style={styles.personimg} source={item.personimg} />
              <View>
                <Text style={styles.personname}>{item.personName}</Text>
                <Text style={styles.personaddress}>{item.personaddress}</Text>
              </View>
              <TouchableOpacity style={styles.dots}>
                <Image source={ImagePath.dots} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("PostDetails", { item })}
              >
                <Image style={styles.personbanner} source={item.bannerimg} />
              </TouchableOpacity>
              <Text style={styles.persondescription}>{item.description}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.bottomarea}>
              <Text style={styles.comment}>
                {StringContants.Comment} {item.comment}
              </Text>
              <Text style={styles.like}>
                {StringContants.Likes} {item.like}
              </Text>
              <Image style={styles.share} source={ImagePath.sharearrow} />
            </View>
          </View>
        )}
      />
      <View style={{ height: 80 }}></View>
    </View>
  );
};
