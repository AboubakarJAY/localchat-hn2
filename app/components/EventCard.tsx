import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

interface EventCardProps {
  description: string;
  eventImage: string;
  eventDate: string;
  authorName: string;
  authorProfileImage: string;
  timeElapsed: string; // e.g., "2 heures ago"
  eventId: string; // Unique identifier for the event
  isAdded: boolean; // State to track if the event is added to the user's list
  onToggleEvent: (eventId: string, added: boolean) => void; // Callback for adding/removing events
}

const EventCard: React.FC<EventCardProps> = ({
  description,
  eventImage,
  eventDate,
  authorName,
  authorProfileImage,
  timeElapsed,
  eventId,
  isAdded,
  onToggleEvent,
}) => {
  const [added, setAdded] = useState(isAdded);

  const handleToggleEvent = async () => {
    try {
      // Toggle the added state
      const newAddedState = !added;
      setAdded(newAddedState);

      // Call the parent handler to update the server
      onToggleEvent(eventId, newAddedState);

      const response = await fetch(
        `http://192.168.43.146:4012/events/${newAddedState ? "add" : "remove"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour de l'événement");
      }
    } catch (error) {
      Alert.alert("Erreur", "Impossible de mettre à jour l'événement");
      setAdded(!added); // Revert state if there's an error
    }
  };

  return (
    <View className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 ml-10 w-10/12">
      <View className="flex flex-row items-center mb-4">
        <Image
          source={{ uri: authorProfileImage }}
          className="w-16 h-16 rounded-full"
        />
        <Text className="ml-2 font-bold text-white">{authorName}</Text>
        <Text className="ml-2 text-gray-300">{timeElapsed}</Text>
      </View>
      <Text className="text-white mb-2">{description}</Text>
      <Image
        source={{ uri: eventImage }}
        className="w-full h-48 rounded-lg mb-2"
      />
      <Text className="text-gray-300 mb-2">{eventDate}</Text>
      <View className="flex flex-row justify-between">
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Commentaires", "Ouvrir la section des commentaires")
          }
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          <Text className="text-white">Commenter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleToggleEvent}
          className={`py-2 px-4 rounded ${added ? "bg-red-500" : "bg-green-500"}`}
        >
          <Text className="text-white">{added ? "Retirer" : "Ajouter"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;
