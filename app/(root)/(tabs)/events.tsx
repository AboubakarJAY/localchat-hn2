import EnTete from "@/app/components/EnTete";
import Navigation from "@/app/components/Navigation";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Events() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <EnTete nomPage="Événements " />
      <Text>History</Text>
      <Navigation />
    </SafeAreaView>
  );
}

export default Events;
