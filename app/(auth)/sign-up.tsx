import AsyncStorage from "@react-native-async-storage/async-storage"; // Importation d'AsyncStorage
import { useFocusEffect } from "@react-navigation/native"; // Importer useFocusEffect
import { router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  BackHandler, // Importer BackHandler
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const SignUp = () => {
  // Gestion de l'état du formulaire et des erreurs
  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "", // Pour les erreurs renvoyées par le serveur
  });

  // Validation de l'email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction de validation globale
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    if (!form.nom) {
      newErrors.nom = "Le nom est requis";
      valid = false;
    }

    if (!form.email || !validateEmail(form.email)) {
      newErrors.email = "Email invalide";
      valid = false;
    }

    if (form.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
      valid = false;
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
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

  // Soumettre le formulaire au serveur local

  const { confirmPassword, ...formToSend } = form;

  const submitForm = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(
          "http://192.168.43.146:4012/user/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formToSend),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Stocker le JWT dans AsyncStorage
          await AsyncStorage.setItem("token", data.token); // S'assurer que le serveur renvoie un champ 'token'
          Alert.alert("Succès", "Inscription réussie");
          // Rediriger vers la page d'accueil après l'inscription réussie
          router.replace("/(root)/(tabs)/home");
        } else {
          // Afficher le message d'erreur envoyé par le serveur
          setErrors({
            ...errors,
            general: data.message || "Erreur lors de l'inscription",
          });
        }
      } catch (error) {
        Alert.alert("Erreur", "Impossible de se connecter au serveur");
      }
    }
  };

  // Gestion de l'événement de retour
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.back(); // Retourner à la page précédente
        return true; // Retourner true pour indiquer que l'événement a été géré
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  return (
    <ScrollView className="flex-1 bg-[#060406]">
      <SafeAreaView className="flex-1 mt-5 p-5 rounded-lg bg-[#060406] bg-opacity-80">
        <View
          style={{
            position: "absolute",
            top: -100, // Ajustez pour positionner correctement
            left: 80,
            width: 500,
            height: 300,
            backgroundColor: "transparent",
            transform: [{ rotate: "-45deg" }],
            borderRadius: 250,
            shadowColor: "#43116A",
            shadowOffset: { width: 0, height: 0 }, // Aucun décalage
            shadowOpacity: 0.5,
            shadowRadius: 30, // Rayon de l'ombre pour un flou plus important
            elevation: 150, // Pour Android
          }}
        />

        <TouchableOpacity onPress={() => router.replace("/(auth)/welcome")}>
          <Image
            source={require("../../assets/icons/retour.png")}
            style={{ width: 28, height: 28, marginLeft: 20 }}
          />
        </TouchableOpacity>
        <View className="items-center">
          <Text className="text-center text-xl text-white font-bold">
            Bienvenue
          </Text>
          <Text className="text-center text-xl text-white font-bold">
            Inscrivez-vous pour commencer.
          </Text>
          <View className="mb-14">
            <InputField
              label="Nom"
              placeholder="Entrez votre nom"
              onChangeText={(value) => handleInputChange("nom", value)}
              error={errors.nom}
            />
            <InputField
              label="Adresse mail"
              placeholder="Entrer votre adresse mail"
              onChangeText={(value) => handleInputChange("email", value)}
              error={errors.email}
            />
            <InputField
              label="Mot de passe"
              placeholder="Entrer votre mot de passe"
              secureTextEntry
              onChangeText={(value) => handleInputChange("password", value)}
              error={errors.password}
            />
            <InputField
              label="Confirmer le mot de passe"
              placeholder="Confirmer le mot de passe"
              secureTextEntry
              onChangeText={(value) =>
                handleInputChange("confirmPassword", value)
              }
              error={errors.confirmPassword}
            />
          </View>
          {errors.general && (
            <Text className="text-red-500 mt-2">{errors.general}</Text>
          )}
          <CustomButton
            onPress={submitForm}
            textColor="#000"
            text="Créer le compte"
            bgColor="#fff"
          />
          <View className="flex flex-col justify-around items-center">
            <Text className="text-[#B9C1BE]">Ou</Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
              <Text className="text-[#24786D]">Connectez-vous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
