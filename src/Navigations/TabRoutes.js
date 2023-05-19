import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import ImagePath from "../Constants/ImagePath";
import NavigationStrings from "../Constants/NavigationStrings";
import { AddPost, Home, Notification, Profile, Seacrh } from "../Screens";
const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.icHomeActive} />
            ) : (
              <Image source={ImagePath.icHome} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.SEARCH}
        component={Seacrh}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icSearch} />
            ) : (
              <Image source={ImagePath.icSearch} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.ADDPOST}
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.icAddActive} />
            ) : (
              <Image source={ImagePath.icAdd} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icNotify} />
            ) : (
              <Image source={ImagePath.icNotify} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icUser} />
            ) : (
              <Image source={ImagePath.icUser} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}
