import EnTete from "@/app/components/EnTete";
import Navigation from "@/app/components/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      const storedUserData = await AsyncStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
        return;
      }

      try {
        const response = await fetch("http://192.168.43.146:4012/user/data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data = await response.json();
        if (!data.events || data.events.length === 0) {
          setErrorMessage("Aucun événement. Créer un nouveau.");
        } else {
          setEvents(data.events);
        }

        await AsyncStorage.setItem("userData", JSON.stringify(data));
      } catch (error) {
        setErrorMessage("Impossible de se connecter au serveur");
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  // Animation d'opacité qui disparaît après 50 pixels de scroll
  const opacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView className="flex-1 bg-black">
      <EnTete nomPage="Home" />
      <View className="flex-1 items-center justify-center">
        {errorMessage ? (
          <Text className="text-white">{errorMessage}</Text>
        ) : null}

        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          className="flex-1"
        >
          {/* {events.map((event) => (
            <EventCard
              key={event.eventId}
              description={event.description}
              eventImage={event.imageUrl}
              eventDate={event.date}
              authorName={event.authorName}
              authorProfileImage={event.authorProfileImage}
              timeElapsed={event.timeElapsed}
              eventId={event.eventId}
              isAdded={event.isAdded}
              onToggleEvent={(eventId, added) => {
                console.log(`Événement ${added ? "ajouté" : "retiré"} : ${eventId}`);
              }}
            />
          ))} */}
        </ScrollView>

        {/* Image flottante avec effet de disparition et navigation */}
        <TouchableOpacity
          onPress={() => router.push("/(root)/(tabs)/createEvent")}
        >
          <Animated.Image
            source={require("../../../assets/icons/add.png")}
            style={{
              opacity,
              position: "absolute",
              bottom: 100,
              right: -200,
              width: 50,
              height: 50,
            }}
          />
        </TouchableOpacity>

        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default Home;
