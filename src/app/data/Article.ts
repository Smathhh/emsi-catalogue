export interface Article {
  code: string;
  nom: string;
  famille: string;
  gamme: string;
  marque: string;
  prixHT: number;
  tva: number;
  stock: number;
  seuilAlerte: number;
  unite: string;
  description: string;
  actif: boolean;
}

export const articles: Article[] = [
  {
    code: "ART001",
    nom: "PC Lenovo ThinkPad",
    famille: "Informatique",
    gamme: "PC portable",
    marque: "Lenovo",
    prixHT: 6500,
    tva: 20,
    stock: 15,
    seuilAlerte: 5,
    unite: "U",
    description: "Ordinateur portable professionnel",
    actif: true
  },
  {
    code: "ART002",
    nom: "Écran Dell 24 pouces",
    famille: "Informatique",
    gamme: "Écran",
    marque: "Dell",
    prixHT: 1900,
    tva: 20,
    stock: 3,
    seuilAlerte: 5,
    unite: "U",
    description: "Écran Full HD",
    actif: true
  },
  {
    code: "ART003",
    nom: "Souris Logitech",
    famille: "Périphériques",
    gamme: "Souris",
    marque: "Logitech",
    prixHT: 180,
    tva: 20,
    stock: 0,
    seuilAlerte: 5,
    unite: "U",
    description: "Souris sans fil",
    actif: true
  },
  {
    code: "ART004",
    nom: "Clavier HP",
    famille: "Périphériques",
    gamme: "Clavier",
    marque: "HP",
    prixHT: 250,
    tva: 20,
    stock: 2,
    seuilAlerte: 4,
    unite: "U",
    description: "Clavier USB",
    actif: true
  },
  {
    code: "ART005",
    nom: "Routeur TP-Link",
    famille: "Réseau",
    gamme: "Routeur",
    marque: "TP-Link",
    prixHT: 850,
    tva: 20,
    stock: 22,
    seuilAlerte: 6,
    unite: "U",
    description: "Routeur Wi-Fi professionnel",
    actif: true
  },
  {
    code: "ART006",
    nom: "Switch Cisco 24 ports",
    famille: "Réseau",
    gamme: "Switch",
    marque: "Cisco",
    prixHT: 3200,
    tva: 20,
    stock: 1,
    seuilAlerte: 3,
    unite: "U",
    description: "Switch réseau administrable",
    actif: true
  },
  {
    code: "ART007",
    nom: "SSD Samsung 1 To",
    famille: "Stockage",
    gamme: "SSD",
    marque: "Samsung",
    prixHT: 900,
    tva: 20,
    stock: 18,
    seuilAlerte: 5,
    unite: "U",
    description: "Disque SSD interne",
    actif: true
  },
  {
    code: "ART008",
    nom: "Disque dur Seagate 2 To",
    famille: "Stockage",
    gamme: "Disque dur",
    marque: "Seagate",
    prixHT: 750,
    tva: 20,
    stock: 0,
    seuilAlerte: 4,
    unite: "U",
    description: "Disque dur externe",
    actif: true
  },
  {
    code: "ART009",
    nom: "Imprimante HP LaserJet",
    famille: "Bureautique",
    gamme: "Imprimante",
    marque: "HP",
    prixHT: 2700,
    tva: 20,
    stock: 7,
    seuilAlerte: 3,
    unite: "U",
    description: "Imprimante laser",
    actif: true
  },
  {
    code: "ART010",
    nom: "Ramette papier A4",
    famille: "Bureautique",
    gamme: "Consommable",
    marque: "Generic",
    prixHT: 55,
    tva: 20,
    stock: 120,
    seuilAlerte: 20,
    unite: "RAM",
    description: "Papier A4, 500 feuilles",
    actif: true
  },
  {
    code: "ART011",
    nom: "Webcam Logitech HD",
    famille: "Périphériques",
    gamme: "Webcam",
    marque: "Logitech",
    prixHT: 590,
    tva: 20,
    stock: 4,
    seuilAlerte: 5,
    unite: "U",
    description: "Webcam pour visioconférence",
    actif: true
  },
  {
    code: "ART012",
    nom: "PC HP ProBook",
    famille: "Informatique",
    gamme: "PC portable",
    marque: "HP",
    prixHT: 7200,
    tva: 20,
    stock: 9,
    seuilAlerte: 3,
    unite: "U",
    description: "Ordinateur portable professionnel",
    actif: true
  }
];

// Calcul du prix TTC
export const calculerTTC = (article: Article): number => {
  return Number(
    (article.prixHT * (1 + article.tva / 100)).toFixed(2)
  );
};

// Déterminer l'état du stock
export const getEtatStock = (article: Article): "Rupture" | "Stock faible" | "Disponible" => {
  if (article.stock === 0) return "Rupture";
  if (article.stock <= article.seuilAlerte) return "Stock faible";
  return "Disponible";
};

export interface User {
  nom: string;
  prenom: string;
  login: string;
  pass: string;
}

export const users: User[] = [
  {
    nom: "aboub",
    prenom: "zakaria",
    login: "ABZ1",
    pass: "1004"
  }
];

export function check(login: string, pass: string): boolean {
  const found = users.find(u => u.login === login && u.pass === pass);
  return Boolean(found);
}

