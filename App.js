import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import ReduxProvider from "./redux/reducProvider";

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
}
