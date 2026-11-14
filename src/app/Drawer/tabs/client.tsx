import { ScrollView, StyleSheet, Text, View } from "react-native";
import { clients } from "../../data/Client";

export default function Clients() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titre}>
        Liste des Clients
      </Text>

      {clients.map(c => (
        <View key={c.id} style={styles.carte}>
          <Text style={styles.nom}>{c.nom}</Text>
          <Text style={styles.info}>Ville : {c.ville}</Text>
          <Text style={styles.info}>Téléphone : {c.telephone}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FA",
    padding: 15
  },
  titre: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20
  },
  carte: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10
  },
  nom: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  info: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4
  }
});