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
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="mb-4">
          <Text className="text-lg text-[#24786D] font-semibold mb-2">
            {label}
          </Text>
          <TextInput
            className="border-b border-gray-300 p-3 pl-0 w-80 text-base"
            placeholder={placeholder}
            placeholderTextColor="gray"
            {...rest}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default InputField;
