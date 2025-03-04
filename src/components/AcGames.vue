<script setup lang="ts">
import { ref } from "vue";
import { AC_Games } from "../scripts/ac_data.ts"; // Vérifie le bon chemin
import type { AC_Game } from "../scripts/types.ts";
import { defineEmits } from "vue";

const emit = defineEmits(["toggle-view"]);

const activeGameId = ref<number | null>(null);
const ExistingGames = ref<AC_Game[]>(AC_Games); // Jeux existants

// Fonction pour afficher/détails du jeu
const toggleDetails = (gameId: number) => {
  activeGameId.value = activeGameId.value === gameId ? null : gameId;
};
//Chat GPT pour le delete game
const deleteGame = (gameId: number) => {
  const index = ExistingGames.value.findIndex((game) => game.id === gameId);
  if (index !== -1) {
    ExistingGames.value.splice(index, 1); // Supprimer le jeu du tableau
    if (activeGameId.value === gameId) {
      activeGameId.value = null; // Masquer les détails si le jeu supprimé était actif
    }
  }
};

// Chat GPT pour le duplicate Game
const duplicateGame = (gameId: number) => {
  const gameToDuplicate = ExistingGames.value.find(
    (game) => game.id === gameId
  );
  if (gameToDuplicate) {
    // Créer une copie du jeu
    const duplicatedGame = { ...gameToDuplicate, id: Date.now() }; // Utilisation de `Date.now()` pour un nouvel ID unique
    ExistingGames.value.push(duplicatedGame); // Ajouter la copie à la liste des jeux
  }
};
</script>

<template>
  <h2>Liste des jeux Assassin's Creed</h2>

  <!-- Affichage des jeux existants sous forme de cartes -->
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
    <div v-for="game in ExistingGames" :key="game.id" class="col">
      <div class="card h-100 d-flex flex-column">
        <img
          :src="game.image"
          class="card-img-top clickable-image"
          :alt="game.title"
          @click="toggleDetails(game.id)"
        />
        <div
          class="card-body flex-grow-1 d-flex flex-column justify-content-between"
        >
          <h5 class="card-title">{{ game.title }}</h5>
          <div v-if="activeGameId === game.id" class="details mt-2">
            <p>
              <strong>Personnage principal :</strong> {{ game.main_character }}
            </p>
            <p><strong>Contexte :</strong> {{ game.setting }}</p>
            <p>{{ game.description }}</p>
            <p><strong>Prix :</strong> {{ game.price }}$</p>
            <div class="d-flex justify-content-start gap-1">
              <button class="btn btn-success" @click="duplicateGame(game.id)">
                <i class="bi bi-files"></i> Dupliquer le jeu
              </button>
              <button
                class="btn btn-warning"
                @click="emit('toggle-view', false)"
              >
                <i class="bi bi-pencil"></i> Modifier le jeu
              </button>
              <button class="btn btn-danger" @click="deleteGame(game.id)">
                <i class="bi bi-trash"></i> Supprimer le jeu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  min-height: 100%;
}

.card:hover {
  transform: scale(1.03);
}

.clickable-image {
  cursor: pointer;
  height: 200px; /* Ajuste la hauteur des images */
  object-fit: cover; /* Permet d'éviter les images étirées */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.details {
  background-color: #f8f9fa;
  padding: 10px;
  border-top: 5px solid #ddd;
}
</style>
