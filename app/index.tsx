import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Index file here!</Text>
      <Link href="/home" className="font-normal color-blue-500">
        Go to Home
      </Link>
    </View>
  );
}
