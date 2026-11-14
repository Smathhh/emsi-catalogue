import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Articles" }}
      />

      <Tabs.Screen
        name="client"
        options={{ title: "Clients" }}
      />
       <Tabs.Screen
        name="profile"
        options={{ title: "PROFILES" }}
      />

    </Tabs>
  );
}