import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/Navigations/Routes";
import { sendstatus } from "./src/redux/actions/stackAction";
import { store } from "./src/redux/store";
import { GetAsyncData } from "./src/utils/utils";
export default function App() {
  useEffect(() => {
    GetAsyncData("Details").then((res) => {
      if (res) {
        sendstatus(true);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar style="inverted" />
    </View>
  );
}
