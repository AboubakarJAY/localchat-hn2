import AsyncStorage from "@react-native-async-storage/async-storage"; // Importer AsyncStorage
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "", // Pour les erreurs renvoyées par le serveur
  });

  // Validation de l'email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction de validation
  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "", general: "" };

    if (!form.email || !validateEmail(form.email)) {
      newErrors.email = "Email invalide";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Le mot de passe est requis";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  // Mettre à jour les champs du formulaire
  const handleInputChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });

    // Réinitialiser l'erreur associée dès que l'utilisateur tape quelque chose
    setErrors({ ...errors, [field]: "", general: "" });
  };

  // Soumettre le formulaire au serveur local pour la connexion
  const submitForm = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("http://192.168.1.X:3000/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const data = await response.json();

        if (response.ok) {
          // Stocker le JWT dans AsyncStorage
          await AsyncStorage.setItem("jwtToken", data.token);
          Alert.alert("Succès", "Connexion réussie");

          // Rediriger vers la page d'accueil après connexion réussie
          router.replace("/home");
        } else {
          // Afficher le message d'erreur envoyé par le serveur
          setErrors({
            ...errors,
            general: data.message || "Erreur de connexion",
          });
        }
      } catch (error) {
        Alert.alert("Erreur", "Impossible de se connecter au serveur");
      }
    }
  };

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
          <Text className="text-center text-xl text-black font-bold font-InterBlack">
            De retour
          </Text>
          <Text className="text-center text-xl text-black font-bold">
            Connectez-vous
          </Text>
          <View className="mb-80">
            <InputField
              label="Adresse mail"
              placeholder="Entrer votre adresse mail"
              onChangeText={(value) => handleInputChange("email", value)}
              error={errors.email} // Afficher l'erreur d'email si elle existe
            />
            <InputField
              label="Mot de passe"
              placeholder="Entrer votre mot de passe"
              secureTextEntry
              onChangeText={(value) => handleInputChange("password", value)}
              error={errors.password} // Afficher l'erreur de mot de passe si elle existe
            />
            {/* Message d'erreur général venant du serveur */}
            {errors.general ? (
              <Text className="text-red-500 mt-2">{errors.general}</Text>
            ) : null}
          </View>

          <CustomButton
            onPress={submitForm} // Le bouton soumet le formulaire lors du clic
            textColor="#fff"
            text="Se connecter"
            bgColor="#24786D"
          />
          <View className="flex flex-col justify-around items-center">
            <Text className="text-[#B9C1BE]">Ou</Text>
            <TouchableOpacity
              onPress={() => {
                router.replace("/(auth)/sign-up");
              }}
            >
              <Text className="text-black">Inscription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
