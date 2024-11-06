import EnTete from "@/app/components/EnTete";
import Navigation from "@/app/components/Navigation";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <EnTete nomPage="Messages" />
      <Text>Chat</Text>
      <Navigation />
    </SafeAreaView>
  );
};

export default Chat;
