import AsyncStorage from "@react-native-async-storage/async-storage"; // Importation d'AsyncStorage
import { router } from "expo-router"; // Importer router
import { useEffect } from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index(): React.JSX.Element {
  const checkUserAuthentication = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); // Remplace "token" par le nom que tu utilises pour stocker le JWT
      if (token) {
        // Si le token existe, l'utilisateur est connecté
        return "/home"; // Redirige vers la page d'accueil
      } else {
        // Sinon, l'utilisateur n'est pas connecté
        return "/(auth)/welcome"; // Redirige vers la page de bienvenue
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du token:", error);
      // En cas d'erreur, redirige vers la page de bienvenue
      return "/(auth)/welcome";
    }
  };

  useEffect(() => {
    const redirectTo = async () => {
      const destination = await checkUserAuthentication();
      // Effectue la redirection
      router.replace(destination); // Utiliser router.replace pour rediriger
    };

    redirectTo();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Chargement...</Text>
    </SafeAreaView>
  );
}
