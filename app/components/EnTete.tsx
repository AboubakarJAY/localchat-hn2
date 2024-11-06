import React from "react";
import { Image, Text, View } from "react-native";

interface EnTeteProps {
  nomPage: string;
  notifications?: number;
}

const EnTete: React.FC<EnTeteProps> = ({ nomPage, notifications = 0 }) => {
  return (
    <View className="flex flex-row items-center justify-between p-4 bg-black h-28 border-b border-gray-400">
      {/* Image de profil à gauche */}
      <Image
        source={require("../../assets/images/abou.jpeg")}
        className="w-16 h-16 rounded-full"
      />

      {/* Titre centré */}
      <Text className="text-white text-2xl font-bold text-center flex-1 ml-4">
        {nomPage}
      </Text>

      {/* Notifications à droite */}
      <View className="w-16 h-16 flex items-center border border-gray-400 rounded-full bg-transparent justify-center">
        <View className="w-10 h-10 bg-red-600 border border-red-600 rounded-full flex items-center justify-center">
          <Text className="text-white text-lg">{notifications}</Text>
        </View>
      </View>
    </View>
  );
};

export default EnTete;
