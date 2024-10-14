import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Onboarding() {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-[#060406]">
      <View
        style={{
          position: "absolute",
          top: -100, // Ajustez pour positionner correctement
          left: 80,
          width: 500, // Largeur plus grande pour l'effet d'ombre étendu
          height: 300, // Hauteur plus grande pour l'effet d'ombre étendu
          backgroundColor: "transparent", // Pas de couleur de fond
          transform: [{ rotate: "-45deg" }],
          borderRadius: 250, // Assurez-vous que c'est plus de la moitié de la hauteur
          shadowColor: "#43116A", // Couleur de l'ombre
          shadowOffset: { width: 0, height: 0 }, // Aucun décalage
          shadowOpacity: 0.5, // Opacité de l'ombre (ajustez comme nécessaire)
          shadowRadius: 30, // Rayon de l'ombre pour un flou plus important
          elevation: 150, // Pour Android
        }}
      />

      <View className="z-10 relative">
        {/* <Image source={require("../../assets/images/logo1.png")} /> */}
        <Text className="text-2xl font-extrabold text-white"> Lorem Ipsum</Text>
      </View>
      <View className="flex w-full items-center h-2/4 justify-between">
        <Text className="w-10/12 text-white text-center text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
        <Text className="w-11/12 text-center text-[#B9C1BE]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta
          fuga quia velit perspiciatis. Quis voluptate rerum aperiam ut nihil
          repellendus possimus, magni fugit nisi facere et dolores placeat ex.
        </Text>
      </View>
      <View className="flex w-full items-center h-1/5 justify-around">
        <View className="flex w-full flex-row justify-around">
          <View className="h-[1px] border-b w-40 border-gray-500" />
          <View className="h-[1px] border-b w-40 border-gray-500" />
        </View>
        <TouchableOpacity
          onPress={() => {
            router.replace("href: /(auth)/sign-up");
          }}
          className="bg-white w-11/12 py-4 rounded-xl border border-gray-300" //absolute bottom-8
        >
          <Text className="text-black text-center">S'inscrire</Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-around items-center">
          <Text className="text-[#B9C1BE]">Déjà un compte? </Text>
          <TouchableOpacity>
            <Text className="text-white">Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
