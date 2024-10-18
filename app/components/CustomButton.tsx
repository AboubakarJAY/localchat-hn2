import { Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  onPress: () => void;
  disabled?: boolean; // Ajouter la propriété 'disabled' optionnelle
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  text,
  onPress,
  disabled = false, // Définir la valeur par défaut à 'false'
}) => {
  return (
    <View className="w-11/12">
      <TouchableOpacity
        onPress={onPress}
        className={`w-full py-4 rounded-xl border border-gray-300 ${bgColor}`}
        disabled={disabled} // Gérer l'état désactivé du bouton
        style={{
          backgroundColor: disabled ? "#aaa" : bgColor, // Si désactivé, changer la couleur de fond
          opacity: disabled ? 0.6 : 1, // Réduire l'opacité si désactivé
        }}
      >
        <Text
          className="text-center font-extrabold"
          style={{ color: textColor }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
