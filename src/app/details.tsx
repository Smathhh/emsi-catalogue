import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { articles, calculerTTC } from "@/app/data/Article";

export default function Details() {

  // 1. Récupérer le code de l'article
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const code = Array.isArray(params.code) ? params.code[0] : params.code;

  // 2. Rechercher l'article
  const article = articles.find(a => a.code === code);

  // 3. Mémoriser la quantité
  const [quantite, setQuantite] = useState(1);

  // Si l'article n'existe pas
  if (!article) {
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Article introuvable</Text>
        <Text style={{ marginBottom: 20, color: "#666" }}>
          {code ? `Aucun article trouvé pour la référence "${code}".` : "Aucun code d'article spécifié."}
        </Text>
        <Button title="Retour au catalogue" onPress={() => router.back()} />
      </View>
    );
  }

  // 4. Calculer le prix total
  const total = calculerTTC(article) * quantite;

  return (
    <View style={styles.container}>

      <Text style={styles.titre}>
        {article.nom}
      </Text>

      <Text>Code : {article.code}</Text>
      <Text>Marque : {article.marque}</Text>
      <Text>Prix HT : {article.prixHT} MAD</Text>
      <Text>TVA : {article.tva}%</Text>
      <Text>Stock : {article.stock} {article.unite}</Text>
      <Text style={styles.prix}>
        Prix TTC : {calculerTTC(article)} MAD
      </Text>

      <Text style={styles.quantite}>
        Quantité : {quantite}
      </Text>

      <View style={styles.boutons}>

        <Button
          title="-"
          onPress={() =>
            setQuantite(Math.max(1, quantite - 1))
          }
        />

        <Button
          title="+"
          onPress={() => setQuantite(quantite + 1)}
        />

      </View>

      <Text style={styles.total}>
        Total TTC : {total.toFixed(2)} MAD
      </Text>

      <Button
        title="Retour au catalogue"
        onPress={() => router.back()}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F6FA"
  },

  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  prix: {
    fontSize: 18,
    marginTop: 15
  },

  quantite: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15
  },

  boutons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 25
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 25
  }

});