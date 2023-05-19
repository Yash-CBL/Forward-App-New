import { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { sendstatus } from "../../redux/actions/stackAction";
import { styles } from "./SetlocationStyle";
export default SetLocation = () => {
  const locdata = [
    { id: 1, address: "Sector 22 , Chandigarh", imgpath: ImagePath.check },
    { id: 2, address: "Sector 24 , Chandigarh", imgpath: ImagePath.check },
    { id: 3, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 4, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 5, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 6, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
  ];
  const [state, setState] = useState({ locdata });

  const onPressItem = (id) => {
    const newarr = locdata.map((val) => {
      if (val.id == id) {
        return { ...val, imgpath: ImagePath.icBlueTick };
      } else {
        return val;
      }
    });
    setState({ locdata: newarr });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9 }}>
        <View style={styles.locationcontainer}>
          <Text style={styles.devicelocation}>
            {StringContants.Device_location_is_off}
          </Text>
          <TouchableOpacity style={styles.turnonbtn}>
            <Text style={styles.btntext}>{StringContants.TURN_ON}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.turnondeviceloc}>
            {
              StringContants.Turning_on_device_location_will_ensure_accurate_road_alerts
            }
          </Text>
        </View>
        <Text style={styles.or}>{StringContants.Or}</Text>
        <InputComp placeholder="Enter location manually" />
        <Text style={styles.suggest}>{StringContants.Suggestions}</Text>
        <View>
          <FlatList
            data={state.locdata}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.addcontainer}
                onPress={() => onPressItem(item.id)}
              >
                <Text style={styles.address}>{item.address}</Text>
                <Image source={item.imgpath} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={styles.btncontainer}>
        <ButtonComp
          title="SELECT AND PROCEED"
          onPress={() => sendstatus(true)}
        />
      </View>
    </View>
  );
};
