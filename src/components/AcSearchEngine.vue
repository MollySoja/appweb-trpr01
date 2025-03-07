<script setup lang="ts">
import { ref, defineEmits } from "vue";

//chat GPT
const emit = defineEmits(["update-search"]);

const searchQuery = ref("");

//chat GPT
const handleInputChange = () => {
  emit("update-search", searchQuery.value);
};
</script>

<template>
  <div class="mb-4 d-flex">
    <!-- chat GPT pour le @input et le form control -->

    <input
      @input="handleInputChange"
      v-model="searchQuery"
      type="text"
      class="form-control"
      placeholder="Rechercher un jeu Assassin's Creed"
    />
  </div>
</template>

<style scoped></style>
