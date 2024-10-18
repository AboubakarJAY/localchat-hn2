import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#121212] p-6">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl text-white font-bold mb-4">
          Bienvenue dans notre application !
        </Text>
        <Text className="text-lg text-gray-400 text-center mb-8">
          Nous sommes ravis de vous avoir ici. Explorez toutes les
          fonctionnalités que nous avons à offrir.
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-in")} // Redirection vers la page de connexion ou une autre page
          className="bg-[#24786D] py-3 px-6 rounded-full shadow-lg"
        >
          <Text className="text-white text-lg font-semibold">Commencer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
