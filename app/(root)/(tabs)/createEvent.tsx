import EnTete from "@/app/components/EnTete";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker"; // Importer ImagePicker
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateEvent = () => {
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState<string | null>(null); // État pour stocker l'image
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  const handlePost = async () => {
    const eventData = {
      date,
      lieu,
      description,
      image, // Inclure l'image dans les données envoyées
    };

    try {
      const response = await fetch("http://192.168.43.146:4012/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        resetForm();
        router.replace("/(root)/(tabs)/home");
      } else {
        setErrorMessage("Erreur lors de l'envoi. Réessayez.");
      }
    } catch (error) {
      setErrorMessage("Erreur de connexion au serveur");
      console.error("Erreur:", error);
    }
  };

  const resetForm = () => {
    setDate("");
    setLieu("");
    setDescription("");
    setImage(null); // Réinitialiser l'image
    setErrorMessage("");
  };

  // Fonction pour choisir une image
  const pickImage = async () => {
    // Demander la permission d'accéder à la galerie
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission d'accès à la galerie refusée !");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Utiliser le type explicite pour result
    if (!result.canceled) {
      setImage(result.assets[0].uri); // Mettre à jour l'état avec l'URI de l'image choisie
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <EnTete nomPage="Création d'évènements" />
      <KeyboardAvoidingView className="flex-1 bg-white rounded-t-[50px] p-12">
        <TouchableOpacity onPress={pickImage}>
          <Text className="text-2xl font-bold mb-4">Choisir une image</Text>
        </TouchableOpacity>
        {image && ( // Afficher un aperçu de l'image si elle est sélectionnée
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 20,
            }} // Style pour l'aperçu
          />
        )}
        <View>
          <Text className="text-2xl font-bold mb-4">Date</Text>
          <TextInput
            placeholder="JJ/MM/YY"
            className="bg-gray-200 rounded-xl h-16 p-4 text-xl mb-4"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View>
          <Text className="text-2xl font-bold mb-4">Lieu</Text>
          <TextInput
            className="bg-gray-200 rounded-xl h-16 mb-4 p-4 text-xl"
            placeholder="Entrer le lieu"
            value={lieu}
            onChangeText={setLieu}
          />
        </View>
        <View>
          <Text className="text-2xl font-bold mb-4">Description</Text>
          <TextInput
            className=" bg-gray-200 h-44 rounded-xl p-4 text-xl"
            placeholder="Ajouter une description"
            multiline={true}
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        {errorMessage ? (
          <Text className="text-red-600 text-lg text-center mt-4">
            {errorMessage}
          </Text>
        ) : null}
        <View className="flex flex-row justify-around mt-6">
          <TouchableOpacity
            className="w-24 bg-[#24786D] p-2 rounded-xl"
            onPress={resetForm}
          >
            <Text className="text-xl text-white text-center">Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-24 bg-[#24786D] p-2 rounded-xl"
            onPress={handlePost}
          >
            <Text className="text-xl text-white text-center">Poster</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateEvent;
