import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF"
        },
        headerTintColor: "#172B4D",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Catalogue" }}
      />

      <Stack.Screen
        name="details"
        options={{ title: "Détails article" }}
      />
    </Stack>
  );
}