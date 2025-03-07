<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { AC_Games } from "../scripts/ac_data.ts";
import AcSearchEngine from "./AcSearchEngine.vue";
import { isEditing } from "../scripts/getFormState.ts";
import { isDuplicating } from "../scripts/getFormState.ts";
import { gameId } from "../scripts/getGameId.ts";
import { defineEmits } from "vue";

const emit = defineEmits(["toggle-view"]);

const placeholderImage = "src/assets/acgamecovers/AC_PLACEHOLDER.png"; // Remplacez par le chemin réel de votre image de remplacement

const searchQuery = ref("");
//chat GPT
const gameToDelete = ref<number | null>(null);

const showNotification = ref(false); // Pour afficher la notification
const notificationMessage = ref(""); // Message de la notification

const updateSearchQuery = (query: string) => {
  searchQuery.value = query;
};

//chat GPT
const filteredGames = computed(() => {
  return AC_Games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Fonction pour vérifier si un jeu a atteint le stock critique
//chat GPT
const checkStock = (game: any) => {
  if (game.quantity === 0) {
    showNotification.value = true;
    notificationMessage.value = `Le jeu "${game.title}" est en rupture de stock !`;
  }
};

// Surveiller les changements de stock pour chaque jeu
//chat GPT
watch(
  filteredGames,
  (newGames) => {
    newGames.forEach((game) => checkStock(game));
  },
  { immediate: true }
);

//chat GPT
const activeGameId = ref<number | null>(null);

//chat GPT
const toggleDetails = (gameId: number) => {
  activeGameId.value = activeGameId.value === gameId ? null : gameId;
};

//chat GPT
const confirmDeleteGame = (gameId: number) => {
  gameToDelete.value = gameId;
};

//chat GPT
const deleteGame = () => {
  if (gameToDelete.value !== null) {
    const index = filteredGames.value.findIndex(
      (game) => game.id === gameToDelete.value
    );
    if (index !== -1) {
      filteredGames.value.splice(index, 1);
      if (activeGameId.value === gameToDelete.value) {
        activeGameId.value = null;
      }
    }
    gameToDelete.value = null;
  }
};

const validateImage = (imageUrl: string): boolean => {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"];
  const lowerCaseUrl = imageUrl.toLowerCase();
  return imageExtensions.some((ext) => lowerCaseUrl.endsWith(ext));
};

//chat GPT
const cancelDelete = () => {
  gameToDelete.value = null;
};

//chat GPT
const editGame = (_gameId: number) => {
  emit("toggle-view", false);
  isEditing.value = true;
  gameId.value = _gameId;
};

//chat GPT
const duplicateGame = (_gameId: number) => {
  emit("toggle-view", false);
  isDuplicating.value = true;
  gameId.value = _gameId;
};
</script>

<!-- Chat GPT pour les cards et le html-->
<template>
  <h2 class="text-white">Liste des jeux Assassin's Creed</h2>

  <AcSearchEngine @update-search="updateSearchQuery" />

  <div v-if="filteredGames.length === 0" class="alert alert-light mt-4">
    Aucun jeu Assassin's Creed correspond a cette recherche...
  </div>

  <div
    v-else
    class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 bg-dark"
  >
    <div
      v-for="game in filteredGames"
      :key="game.id"
      class="col"
      @click="toggleDetails(game.id)"
      :class="{ 'active-card': activeGameId === game.id }"
    >
      <div class="card h-100 d-flex flex-column">
        <img
          :src="validateImage(game.image) ? game.image : placeholderImage"
          class="card-img-top clickable-image"
          :alt="game.title"
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
            <p><strong> Quantité: </strong> {{ game.quantity }}</p>
            <div class="d-flex justify-content-start gap-1">
              <button class="btn btn-success" @click="duplicateGame(game.id)">
                <i class="bi bi-files"></i> Dupliquer le jeu
              </button>
              <button class="btn btn-warning" @click="editGame(game.id)">
                <i class="bi bi-pencil"></i> Modifier le jeu
              </button>
              <button
                class="btn btn-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                @click="confirmDeleteGame(game.id)"
              >
                <i class="bi bi-trash"></i> Supprimer le jeu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="showNotification"
    class="notification-toast"
    :class="{ show: showNotification }"
  >
    <div class="alert alert-danger">
      {{ notificationMessage }}
      <button class="btn-close" @click="showNotification = false"></button>
    </div>
  </div>

  <!-- Chat GPT pour le modal -->
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">
            Confirmer la suppression
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="cancelDelete"
          ></button>
        </div>
        <div class="modal-body">
          Êtes-vous sûr de vouloir supprimer "{{
            filteredGames.find((game) => game.id === gameToDelete)?.title
          }}" de la liste ?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="cancelDelete"
          >
            Non
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteGame"
            data-bs-dismiss="modal"
          >
            Oui, supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- chat GPT pour le css-->
<style scoped>
.card {
  transition: transform 0.3s ease-out;
  cursor: pointer;
  min-height: 100%;
}

.card:hover {
  transform: scale(1.03);
}

.clickable-image {
  cursor: pointer;
  height: 400px;
  object-fit: cover;
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

.alert {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.notification-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* Centrer l'élément horizontalement et verticalement */
  z-index: 1050;
  width: 250px;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optionnel, pour ajouter une ombre */
}

.notification-toast .alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-toast.show {
  opacity: 1;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  transform: translate(0, -50px);
  opacity: 0;
}

.modal.show .modal-dialog {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
