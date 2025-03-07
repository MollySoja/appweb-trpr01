<script setup lang="ts">
import { defineEmits } from "vue";
import { isDuplicating, isEditing } from "../scripts/getFormState.ts";
import { exportToCSV } from "../scripts/ac_data.ts";

//Partiellement chat GPT (voir readme)
const resetForm = () => {
  emit("toggle-view", false); // Émet l'événement pour changer de vue (CHAT GPT)
  isEditing.value = false; // Desactive le mode edit
  isDuplicating.value = false; //Desactive le mode duplicate
};

const emit = defineEmits(["toggle-view"]);
</script>

<template>
  <header class="bg-dark text-white py-2">
    <div class="container d-flex justify-content-center align-items-center">
      <img src="../assets/ac_logo.webp" alt="ac_logo" width="50" class="me-4" />
      <h1 class="h3">Magasin de Jeux Assassin's Creed</h1>
    </div>
  </header>

  <nav class="bg-dark py-2">
    <div class="container d-flex justify-content-center">
      <button class="btn btn-primary mx-2" @click="emit('toggle-view', true)">
        Voir la liste de jeux
      </button>
      <button class="btn btn-success mx-2" @click="resetForm()">
        Ajouter un jeu
      </button>
      <button class="btn btn-primary mx-2" @click="exportToCSV">
        Exporter
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
