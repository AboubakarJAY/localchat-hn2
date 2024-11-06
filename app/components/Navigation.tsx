import { usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { BackHandler, Image, TouchableOpacity, View } from "react-native";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onBackPress = () => {
      if (pathname === "/(root)/(tabs)/home") {
        // L'utilisateur est sur la page d'accueil, ne pas revenir en arrière
        return true;
      } else {
        // Redirige vers la page d'accueil si le retour en arrière n'est pas possible
        router.replace("/(root)/(tabs)/home");
        return true;
      }
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, [pathname]);

  return (
    <View className="flex flex-row justify-around items-center bg-white h-16 absolute bottom-0 w-full">
      <TouchableOpacity onPress={() => router.replace("/(root)/(tabs)/home")}>
        <Image
          source={
            pathname === "/home"
              ? require("../../assets/icons/house-chimney2.png")
              : require("../../assets/icons/house-chimney.png")
          }
          className={"w-[26] h-[26] ml-10"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/(root)/(tabs)/chat")}>
        <Image
          source={
            pathname === "/chat"
              ? require("../../assets/icons/messages2.png")
              : require("../../assets/icons/messages.png")
          }
          className={"w-[26] h-[26] ml-10"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/(root)/(tabs)/contacts")}
      >
        <Image
          source={
            pathname === "/contacts"
              ? require("../../assets/icons/users2.png")
              : require("../../assets/icons/users.png")
          }
          className={"w-[26] h-[26] ml-10"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/(root)/(tabs)/events")}>
        <Image
          source={
            pathname === "/events"
              ? require("../../assets/icons/calendar-day2.png")
              : require("../../assets/icons/calendar-day.png")
          }
          className={"w-[26] h-[26] ml-10"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
