<script setup lang="ts">
import { ref } from "vue";
import { AC_Games } from "../scripts/ac_data";
import type { AC_Game } from "../scripts/types";

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

  // Assigner un ID unique
  newGame.value.id = Date.now(); // Utilisation de Date.now() pour créer un ID unique

  AC_Games.push({ ...newGame.value });

  // Réinitialiser le formulaire après l'ajout
  resetForm();
};

const resetForm = () => {
  newGame.value = {
    id: 0,
    title: "",
    description: "",
    main_character: "",
    setting: "",
    price: 0,
    quantity: 1,
    image: "",
  };
};
</script>

<template>
  <!-- Form et la plupart du Bootstrap généré par ChatGPT -->
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

      <div class="mb-3">
        <label for="quantity" class="form-label">Quantité :</label>
        <input
          id="quantity"
          type="number"
          v-model.number="newGame.quantity"
          min="1"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image :</label>
        <input id="image" v-model="newGame.image" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Ajouter le jeu</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
