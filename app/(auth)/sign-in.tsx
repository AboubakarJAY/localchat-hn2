import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

function SignIn() {
  return (
    <ScrollView className="flex-1 mt-2 bg-white">
      <SafeAreaView className="flex-1 bg-white mt-5">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/welcome");
          }}
        >
          <Image
            source={require("../../assets/icons/retour.png")}
            className="w-[26] h-[18] ml-10"
          />
        </TouchableOpacity>
        <View className="m-5 items-center">
          <Text className="text-center text-xl text-black font-bold">
            Bienvenue
          </Text>
          <Text className="text-center text-xl text-black font-bold">
            Inscrivez-vous pour commencer.
          </Text>
          <View className="mb-14">
            <InputField
              label="Adresse mail"
              placeholder="Entrer votre adresse mail"
            />
            <InputField
              label="Mot de passe"
              placeholder="Entrer votre mot de passe"
            />
            <CustomButton
              textColor="#fff"
              text="Créer le compte"
              title=""
              route=""
              bgColor="#24786D"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default SignIn;
