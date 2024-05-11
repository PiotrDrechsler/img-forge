import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-center font-bold p-4">Tab TWO!</Text>
      <View />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
