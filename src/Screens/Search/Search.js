import { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import InputComp from "../../Components/InputComp";
import ImagePath from "../../Constants/ImagePath";
import StringContants from "../../Constants/StringContants";
import { styles } from "./SearchStyle";
export default Search = ({ navigation }) => {
  const locdata = [
    { id: 1, address: "Sector 22 , Chandigarh", imgpath: ImagePath.check },
    { id: 2, address: "Sector 24 , Chandigarh", imgpath: ImagePath.check },
    { id: 3, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 4, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 5, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
    { id: 6, address: "Sector 38 , Chandigarh", imgpath: ImagePath.check },
  ];
  const [state, setState] = useState({ locdata });
  const[address,setAddress]=useState('')
  onPressItem = (id) => {
    const newarr = locdata.map((val) => {
      if (val.id == id) {
        setAddress(val.address)
        return { ...val, imgpath: ImagePath.icBlueTick };
      } else {
        return val;
      }
    });
    setState({ locdata: newarr });
  };
  return (
    <View style={styles.container}>
      <InputComp placeholder={StringContants.Enter_Loc_Manually} value={address} onchange={(add)=>{setAddress(add)}}  />
      <Text style={styles.suggest}>{StringContants.Suggestions}</Text>
      <View>
        <FlatList
          data={state.locdata}
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
  );
};
