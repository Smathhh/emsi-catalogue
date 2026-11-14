import { StyleSheet, Text, View } from "react-native";
import { users } from "@/app/data/Article";

export default function Profile() {
  const user = users[0];

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Profil Utilisateur</Text>
      <View style={styles.carte}>
        <Text style={styles.label}>Nom : <Text style={styles.valeur}>{user?.nom}</Text></Text>
        <Text style={styles.label}>Prénom : <Text style={styles.valeur}>{user?.prenom}</Text></Text>
        <Text style={styles.label}>Identifiant : <Text style={styles.valeur}>{user?.login}</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FA",
    padding: 20
  },
  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  carte: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    gap: 10
  },
  label: {
    fontSize: 16,
    color: "#666"
  },
  valeur: {
    fontWeight: "bold",
    color: "#172B4D"
  }
});
