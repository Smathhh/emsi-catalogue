import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { articles } from "../../data/Article";


export default function Accueil() {

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titre}>
        Catalogue EMSI
      </Text>

      {articles.map(a => (
        <Pressable key={a.code}
          onPress={() => router.push({
            pathname: "/details", params: { code: a.code }
          })}
          style={styles.carte}>
          <Text style={{ fontWeight: "bold" }}>{a.nom}</Text>
          <Text>{a.famille} — {a.gamme}</Text>
        </Pressable>
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
  }

});