<script setup lang="ts">
import { ref } from "vue"; //Revoir le path
import { type AC_Game } from "../scripts/types.ts";
const games = ref<AC_Game[]>([]); //tableau des jeux ajouter seulement

const newGame = ref<AC_Game>({
  id: 0,
  title: "",
  description: "",
  main_character: "",
  setting: "",
  price: 0,
  quantity: 1, // Valeur par défaut
  image: "",
});

const addGame = () => {
  if (newGame.value.title.trim() === "") return;
  if (newGame.value.main_character.trim() === "") return;
  if (newGame.value.setting.trim() === "") return;
  if (newGame.value.image.trim() === "") return;
};
</script>

<template>
  <!-- Form et plupart du Bootstrap generer par chat GPT -->
  <div class="container mt-4">
    <h2 class="mb-4">Ajouter un jeu Assassin's Creed</h2>

    <form @submit.prevent="addGame" class="mb-4">
      <div class="mb-3">
        <label for="title" class="form-label">Titre :</label>
        <input
          id="title"
          v-model="newGame.title"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description :</label>
        <textarea
          id="description"
          v-model="newGame.description"
          class="form-control"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="main_character" class="form-label"
          >Personnage principal :</label
        >
        <input
          id="main_character"
          v-model="newGame.main_character"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="setting" class="form-label">Lieu et période :</label>
        <input
          id="setting"
          v-model="newGame.setting"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Prix :</label>
        <input
          id="price"
          type="number"
          v-model.number="newGame.price"
          min="0"
          step="0.01"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Ajouter le jeu</button>
    </form>

    <h3>Liste des jeux ajoutés</h3>
    <ul class="list-group">
      <li v-for="AC_Game in games" :key="AC_Game.id" class="list-group-item">
        <strong>{{ AC_Game.title }}</strong> - {{ AC_Game.main_character }} -
        {{ AC_Game.setting }} - {{ AC_Game.price }}€
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
