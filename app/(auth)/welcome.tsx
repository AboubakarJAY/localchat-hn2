import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

function Onboarding() {
  const handleRedirect = (route: string) => {
    router.push(route as any);
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-[#060406]">
      <View
        style={{
          position: "absolute",
          top: -100, // Ajustez pour positionner correctement
          left: 80,
          width: 500,
          height: 300,
          backgroundColor: "transparent",
          transform: [{ rotate: "-45deg" }],
          borderRadius: 250,
          shadowColor: "#43116A",
          shadowOffset: { width: 0, height: 0 }, // Aucun décalage
          shadowOpacity: 0.5,
          shadowRadius: 30, // Rayon de l'ombre pour un flou plus important
          elevation: 150, // Pour Android
        }}
      />

      <View className="z-10 relative">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-48 h-10 mt-2"
        />
        {/* <Text className="text-2xl font-extrabold text-white"> Lorem Ipsum</Text> */}
      </View>
      <View className="flex w-full items-center h-2/4 justify-between">
        <Text className="w-10/12 text-white text-center text-4xl">
          Connectez vous et vos amis facilement sur un réseau local
        </Text>
        <Text className="w-11/12 text-center text-[#B9C1BE]">
          Notre application de messagerie et gestion d’événements est le moyen
          idéal pour rester connecter avec des amis en local
        </Text>
      </View>
      <View className="flex w-full items-center h-1/5 justify-around">
        <View className="flex w-full flex-row justify-around">
          <View className="h-[1px] border-b w-40 border-gray-500" />
          <View className="h-[1px] border-b w-40 border-gray-500" />
        </View>
        <CustomButton
          text="S'inscrire"
          onPress={() => {
            handleRedirect("/(auth)/sign-up");
          }}
          bgColor="#fff"
          textColor="#000"
        />
        <View className="flex flex-row justify-around items-center">
          <Text className="text-[#B9C1BE]">Déjà un compte? </Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-in");
            }}
          >
            <Text className="text-white">Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
