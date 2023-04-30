import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { CustomNavigator } from "./src/navigation/CustomNavigator";

export default function App() {
  return (
    <NavigationContainer>
        <CustomNavigator />
    </NavigationContainer>
  );
}
