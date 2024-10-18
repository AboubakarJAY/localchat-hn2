import { router } from "expo-router";
import { ButtonProps, Text, TouchableOpacity, View } from "react-native";

interface OAthProps extends ButtonProps {
  page: string;
  route: string;
}

const OAth: React.FC<OAthProps> = ({ page, route, ...rest }) => {
  return (
    <View className="flex items-center">
      <View className="flex flex-row">
        <View className="h-[1px] border-b w-40 border-gray-500" />
        <Text>Ou</Text>
        <View className="h-[1px] border-b w-40 border-gray-500" />
      </View>
      <TouchableOpacity
        onPress={() => {
          router.replace(route as any);
        }}
      >
        <Text>{page}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OAth;
