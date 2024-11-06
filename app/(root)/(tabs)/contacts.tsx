import EnTete from "@/app/components/EnTete";
import Navigation from "@/app/components/Navigation";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Contacts = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <EnTete nomPage="Contacts" />
      <Text>Contacts</Text>
      <Navigation />
    </SafeAreaView>
  );
};

export default Contacts;
