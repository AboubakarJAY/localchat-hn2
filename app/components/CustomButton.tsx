import { router } from "expo-router";
import { ButtonProps, Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps extends ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  route: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  text,
  route,
  ...rest
}) => {
  return (
    <View className="w-11/12">
      <TouchableOpacity
        onPress={() => {
          router.replace(route as any);
        }}
        style={{ backgroundColor: bgColor }}
        className="w-full py-4 rounded-xl border border-gray-300"
        {...rest} // Passer les autres props si nécessaire
      >
        <Text
          style={{ color: textColor }}
          className="text-black font-extrabold text-center"
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
