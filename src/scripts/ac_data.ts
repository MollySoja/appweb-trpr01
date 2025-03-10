import { type AC_Game } from "../scripts/types";
import AC1 from "../assets/AC1.jpg";
import AC2 from "../assets/AC2.jpg";
import AC3 from "../assets/AC3.webp";
import AC4 from "../assets/AC4.jpg";
import ACROGUE from "../assets/ACROGUE.jpeg";
import ACBROTHERHOOD from "../assets/ACBROTHERHOOD.jpg";
import ACREVELATIONS from "../assets/ACREVELATIONS.jpg";
import ACUNITY from "../assets/ACUNITY.jpg";
import ACSYNDICATE from "../assets/ACSYNDICATE.jpg";
import ACORIGINS from "../assets/ACORIGINS.jpg";
import ACODYSSEY from "../assets/ACODYSSEY.webp";
import ACVALLHALLAH from "../assets/ACVALLHALLA.jpg";
import ACMIRAGE from "../assets/ACMIRAGE.jpg";
import ACSHADOWS from "../assets/ACSHADOWS.avif";

//Tableau de donnes aidez de chat GPT pour l'utilisation de ac_datas (idee originelle de moi et Jimmy)
export const AC_Games: AC_Game[] = [
  {
    id: 1,
    title: "Assassin's Creed",
    description:
      "Le premier jeu de la saga, mettant en scène Altaïr Ibn-La'Ahad dans sa lutte contre les Templiers durant la Troisième Croisade.",
    main_character: "Altaïr Ibn-La'Ahad",
    setting: "Terre Sainte (Jérusalem, Damas, Acre) - 1191",
    price: 19.99,
    quantity: 1,
    image: AC1,
  },
  {
    id: 2,
    title: "Assassin's Creed II",
    description:
      "Ezio Auditore da Firenze découvre la Confrérie des Assassins et se venge des Templiers responsables de la mort de sa famille.",
    main_character: "Ezio Auditore da Firenze",
    setting: "Italie (Florence, Venise, Forli, Rome) - 1476-1499",
    price: 5.0,
    quantity: 1,
    image: AC2,
  },
  {
    id: 3,
    title: "Assassin's Creed Brotherhood",
    description:
      "Ezio continue son combat contre les Borgia et tente de reconstruire la Confrérie à Rome.",
    main_character: "Ezio Auditore da Firenze",
    setting: "Rome - 1500-1507",
    price: 19.99,
    quantity: 1,
    image: ACBROTHERHOOD,
  },
  {
    id: 4,
    title: "Assassin's Creed Revelations",
    description:
      "Ezio voyage à Constantinople pour découvrir les secrets d'Altaïr et du Credo des Assassins.",
    main_character: "Ezio Auditore da Firenze",
    setting: "Constantinople - 1511",
    price: 19.99,
    quantity: 1,
    image: ACREVELATIONS,
  },
  {
    id: 5,
    title: "Assassin's Creed III",
    description:
      "Connor Kenway se bat pour la liberté pendant la Révolution américaine, découvrant les enjeux entre Assassins et Templiers.",
    main_character: "Connor Kenway (Ratonhnhaké:ton)",
    setting: "Amérique coloniale - 1754-1783",
    price: 19.99,
    quantity: 1,
    image: AC3,
  },
  {
    id: 6,
    title: "Assassin's Creed IV: Black Flag",
    description:
      "L'histoire suit Edward Kenway, un pirate devenant Assassin, naviguant dans les Caraïbes à l'âge d'or de la piraterie.",
    main_character: "Edward Kenway",
    setting: "Caraïbes - 1715-1722",
    price: 15.0,
    quantity: 1,
    image: AC4,
  },
  {
    id: 7,
    title: "Assassin's Creed Rogue",
    description:
      "Shay Cormac, un ancien Assassin devenu Templier, traque la Confrérie à travers l'Amérique du Nord.",
    main_character: "Shay Patrick Cormac",
    setting: "Amérique du Nord, Atlantique Nord - 1752-1760",
    price: 19.99,
    quantity: 1,
    image: ACROGUE,
  },
  {
    id: 8,
    title: "Assassin's Creed Unity",
    description:
      "Arno Dorian tente de venger la mort de son père adoptif pendant la Révolution française.",
    main_character: "Arno Dorian",
    setting: "Paris - 1789-1794",
    price: 7.5,
    quantity: 1,
    image: ACUNITY,
  },
  {
    id: 9,
    title: "Assassin's Creed Syndicate",
    description:
      "Les jumeaux Jacob et Evie Frye combattent les Templiers pour libérer Londres de leur emprise.",
    main_character: "Jacob & Evie Frye",
    setting: "Londres - 1868",
    price: 19.99,
    quantity: 1,
    image: ACSYNDICATE,
  },
  {
    id: 10,
    title: "Assassin's Creed Origins",
    description:
      "L'histoire des origines de la Confrérie des Assassins à travers le parcours de Bayek de Siwa en Égypte ancienne.",
    main_character: "Bayek de Siwa",
    setting: "Égypte antique - 49-44 av. J.-C.",
    price: 19.5,
    quantity: 1,
    image: ACORIGINS,
  },
  {
    id: 11,
    title: "Assassin's Creed Odyssey",
    description:
      "Pendant la guerre du Péloponnèse, un mercenaire spartiate explore la Grèce antique et découvre ses origines.",
    main_character: "Kassandra ou Alexios",
    setting: "Grèce antique - 431-422 av. J.-C.",
    price: 16.0,
    quantity: 1,
    image: ACODYSSEY,
  },
  {
    id: 12,
    title: "Assassin's Creed Valhalla",
    description:
      "Eivor, un Viking, mène son clan en Angleterre et découvre le lien entre Assassins et Templiers.",
    main_character: "Eivor Varinsdottir",
    setting: "Angleterre et Norvège - IXe siècle",
    price: 20.0,
    quantity: 1,
    image: ACVALLHALLAH,
  },
  {
    id: 13,
    title: "Assassin's Creed Mirage",
    description:
      "Basim Ibn Ishaq, un voleur devenu Assassin, explore Bagdad et découvre la vérité sur son passé.",
    main_character: "Basim Ibn Ishaq",
    setting: "Bagdad - 861",
    price: 28.0,
    quantity: 1,
    image: ACMIRAGE,
  },
  {
    id: 14,
    title: "Assassin's Creed Shadows",
    description:
      "Un nouvel épisode au Japon féodal mettant en scène un ninja et une samouraï.",
    main_character: "Yasuke et Naoe",
    setting: "Japon - Époque Sengoku",
    price: 89.99,
    quantity: 1,
    image: ACSHADOWS,
  },
];

//TOTALEMENT GENERER PAR CHAT GPT
export const exportToCSV = () => {
  // Définit les en-têtes du CSV
  const headers = [
    "ID",
    "Titre",
    "Description",
    "Personnage principal",
    "Lieu",
    "Prix",
    "Quantité",
  ];

  // Convertit les données en format CSV
  const rows = AC_Games.map((game) => [
    game.id,
    `"${game.title}"`, // Ajout de guillemets pour éviter les problèmes de virgules dans les titres
    `"${game.description}"`,
    `"${game.main_character}"`,
    `"${game.setting}"`,
    game.price.toFixed(2), // Format prix avec 2 décimales
    game.quantity,
  ]);

  // Construit le contenu du CSV
  const csvContent = [
    headers.join(";"), // Utilisation du point-virgule comme séparateur (modifiable selon besoin)
    ...rows.map((row) => row.join(";")),
  ].join("\n");

  // Crée un Blob et un lien de téléchargement
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // Crée et clique sur un lien invisible pour télécharger le fichier
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "liste_jeux_AC.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
