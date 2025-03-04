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
<!-- Chat GPT pour separer les differents composants enfants et pour le css-->
<template>
  <Header @toggle-view="showGames = $event" />

  <div class="d-flex justify-content-center mt-4">
    <div v-if="showGames" class="flex-fill p-2" style="max-width: 70%">
      <AcGames @toggle-view="showGames = $event" />
    </div>

    <div v-else class="flex-fill p-2" style="max-width: 40%">
      <AcForm />
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
