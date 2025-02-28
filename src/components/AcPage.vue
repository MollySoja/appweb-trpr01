<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Header from "./Header.vue";
import AcForm from "./AcForm.vue";
import AcGames from "./AcGames.vue";
import Footer from "./Footer.vue";
</script>

<!-- Chat GPT pour separer les differents composants enfants et pour le css-->
<template>
  <Header />
  <div class="d-flex">
    <div class="flex-fill p-2" style="max-width: 70%">
      <AcGames />
    </div>

    <div class="flex-fill p-2" style="max-width: 40%">
      <AcForm />
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
