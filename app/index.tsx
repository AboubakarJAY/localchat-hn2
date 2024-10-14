import { Redirect } from "expo-router";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index(): React.JSX.Element {
  return <Redirect href="/(auth)/welcome" />;
}
