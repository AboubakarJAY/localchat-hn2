import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
  error?: string; // Propriété 'error' optionnelle
  inputStyle?: string; // Ajouter la propriété 'inputStyle' optionnelle
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  error,
  inputStyle, // Inclure 'inputStyle'
  ...rest
}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="mb-4">
          <Text className="text-lg text-[#24786D] font-semibold font-InterBlack mb-2">
            {label}
          </Text>
          <TextInput
            className={`border-b border-gray-300 p-3 pl-0 w-80 text-base ${inputStyle}`} // Appliquer inputStyle
            placeholder={placeholder}
            placeholderTextColor="gray"
            {...rest}
          />
          {error && <Text className="text-red-500">{error}</Text>}
          {/* Affichage de l'erreur */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
