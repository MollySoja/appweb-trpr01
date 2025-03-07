<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Header from "./Header.vue";
import AcForm from "./AcForm.vue";
import AcGames from "./AcGames.vue";
import Footer from "./Footer.vue";

const showGames = ref(true);
</script>
<template>
  <Header @toggle-view="showGames = $event" />
  <!--chat GPT pour le bootstrap-->
  <div class="d-flex justify-content-center bg-dark">
    <div v-if="showGames" class="flex-fill p-2" style="max-width: 80%">
      <!-- chat GPT fait en sorte que les cards sont plus petites-->
      <AcGames @toggle-view="showGames = $event" />
    </div>

    <div v-else class="flex-fill p-2">
      <!--chat GPT pour le bootstrap-->
      <AcForm />
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>
