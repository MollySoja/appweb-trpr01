<script setup lang="ts">
import { ref } from "vue";
import { AC_Games } from "../scripts/ac_data.ts"; // Vérifie le bon chemin

const activeGameId = ref<number | null>(null);

//Chat GPT pour la fonction toggle details
// Fonction pour afficher/cacher les détails
const toggleDetails = (gameId: number) => {
  activeGameId.value = activeGameId.value === gameId ? null : gameId;
};
</script>

<!-- Chat GPT et documentation bootstraps sur les cards-->
<template>
  <h2>Liste des jeux Assassin's Creed</h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-2">
    <div v-for="game in AC_Games" :key="game.id" class="col">
      <div class="card">
        <!-- Image cliquable pour afficher les détails -->
        <img
          :src="game.image"
          class="card-img-top clickable-image"
          :alt="game.title"
          @click="toggleDetails(game.id)"
        />
        <div class="card-body">
          <h5 class="card-title">{{ game.title }}</h5>
        </div>

        <div v-if="activeGameId === game.id" class="card-body details">
          <p>
            <strong>Personnage principal :</strong> {{ game.main_character }}
          </p>
          <p><strong>Contexte :</strong> {{ game.setting }}</p>
          <p>{{ game.description }}</p>
          <p><strong>Prix :</strong> {{ game.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.03);
}
.clickable-image {
  cursor: pointer;
}
.details {
  background-color: #f8f9fa;
  padding: 10px;
  border-top: 5px solid #ddd;
}
.card-img-top {
  display: block;
  margin: auto;
  padding-top: 10px;
}
</style>
