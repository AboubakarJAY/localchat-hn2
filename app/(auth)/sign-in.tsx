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
    general: "",
  });

  // Validation de l'email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation du mot de passe
  const validatePassword = (password: string) => {
    return password.length >= 8; // Exemple de condition pour la longueur du mot de passe
  };

  // Fonction de validation
  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "", general: "" };

    if (!form.email || !validateEmail(form.email)) {
      newErrors.email = "Email invalide";
      valid = false;
    }

    if (!form.password || !validatePassword(form.password)) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
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
        const response = await fetch("http://192.168.43.146:4012/user/login", {
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
          router.replace("/(root)/(tabs)/home");
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
    <ScrollView className="flex-1 bg-[#060406]">
      <SafeAreaView className="flex-1 mt-5 bg-[#060406]">
        <View
          style={{
            position: "absolute",
            top: -100,
            left: 80,
            width: 500,
            height: 300,
            backgroundColor: "transparent",
            transform: [{ rotate: "-45deg" }],
            borderRadius: 250,
            shadowColor: "#43116A",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 30,
            elevation: 150,
          }}
        />

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
          <View className="flex flex-row items-center">
            <Text className="text-center text-xl text-white">
              Connectez-vous à Localchat
            </Text>
          </View>
          <View className="mb-64 mt-16">
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
            textColor="#000"
            text="Se connecter"
            bgColor="#fff"
          />
          <View className="flex flex-col justify-around items-center">
            <Text className="text-[#B9C1BE]">Ou</Text>
            <TouchableOpacity
              onPress={() => {
                router.replace("/(root)/(tabs)/home"); //Ajouter pour rediriger vers la page d'acceuil meme sans etre connecter
                //router.replace("/(auth)/sign-up");
              }}
            >
              <Text className="text-[#24786D]">Inscription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
