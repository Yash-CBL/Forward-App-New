import NavigationStrings from "../Constants/NavigationStrings";
import { ChangePwd, EditProfile, Profile } from "../Screens";
import TabRoutes from "./TabRoutes";
NavigationStrings
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name='TabRoutes'
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen  options={{ headerShown: false }} name={NavigationStrings.POST_DETAILS} component={PostDetails} />
      <Stack.Screen options={{ headerShown: false }} name={NavigationStrings.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen options={{ headerShown: false }} name={NavigationStrings.CHANGE_PWD} component={ChangePwd} />
    </>
  );
}