import { Drawer } from 'expo-router/drawer';

// Drawer : menu latéral contenant les Tabs, Paramètres et À propos.
export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ drawerActiveTintColor: '#1D4ED8' }}>

      <Drawer.Screen
        name="tabs"
        options={{ title: 'Application commerciale', drawerLabel: 'Accueil' }}
      />

  
    

    </Drawer>
  );
}