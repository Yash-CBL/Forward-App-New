import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStrings from "../Constants/NavigationStrings";
import {
  InitialScreen,
  Login,
  Onboarding,
  OtpScreen,
  SetLocation,
  SetPassword,
  Signup,
} from "../Screens";
import MainStack from "./MainStack";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.ONBOARDING}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.OTP_SCREEN}
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.SET_PASSWORD}
        component={SetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.SET_LOCATION}
        component={SetLocation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{ headerShown: false }}
      />
    </>
  );
}
