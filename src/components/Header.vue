<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["toggle-view"]);
</script>

<template>
  <header class="bg-dark text-white py-2">
    <div class="container d-flex justify-content-center align-items-center">
      <img src="../assets/ac_logo.webp" alt="ac_logo" width="50" class="me-4" />
      <h1 class="h3">Magasin de Jeux Assassin's Creed</h1>
    </div>
  </header>

  <nav class="bg-light py-2">
    <div class="container d-flex justify-content-center">
      <button class="btn btn-primary mx-2" @click="emit('toggle-view', true)">
        Voir la liste de jeux
      </button>
      <button class="btn btn-success mx-2" @click="emit('toggle-view', false)">
        Ajouter un jeu
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
