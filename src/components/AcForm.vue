<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { AC_Games } from "../scripts/ac_data";
import { isEditing } from "../scripts/getFormState.ts";
import { isDuplicating } from "../scripts/getFormState.ts";
import { gameId } from "../scripts/getGameId.ts";
import type { AC_Game } from "../scripts/types";

//chat GPT
// Définir le nouvel objet de jeu
const newGame = ref<AC_Game>({
  id: 0,
  title: "",
  description: "",
  main_character: "",
  setting: "",
  price: 0,
  quantity: 1,
  image: "",
});

//chat GPT
// Validation des champs du formulaire
const isValidForm = ref({
  title: false,
  main_character: false,
  setting: false,
  price: false,
  quantity: false,
  image: false,
});

//chat GPT
// Fonction pour récupérer un jeu par son ID
const getGameById = (id: number) => {
  return AC_Games.find((game) => game.id === id);
};

//chat GPT
// Fonction pour ajouter ou modifier un jeu
const addGame = () => {
  // Validation des champs requis
  validateForm();

  // Si tous les champs sont valides, ajouter le jeu
  if (Object.values(isValidForm.value).every((valid) => valid)) {
    if (isEditing.value && newGame.value.id) {
      const index = AC_Games.findIndex((game) => game.id === newGame.value.id);
      if (index !== -1) {
        AC_Games[index] = { ...newGame.value }; // Mise à jour du jeu existant
      }
      formText.value = "Modification envoyé!";
      isEditing.value = false;
    } else if (isDuplicating.value && gameId.value) {
      // Mode duplication : dupliquer un jeu existant
      const gameToDuplicate = getGameById(gameId.value);
      if (gameToDuplicate) {
        const duplicatedGame = { ...gameToDuplicate, id: Date.now() };
        AC_Games.push(duplicatedGame);
      }
      formText.value = "Duplication envoyé!";
      isDuplicating.value = false;
    } else {
      newGame.value.id = Date.now(); // Nouveau jeu
      AC_Games.push({ ...newGame.value }); // Ajout du jeu à la liste
      formText.value = "Jeu ajouté!";
    }
    resetForm(); // Réinitialisation du formulaire après ajout ou modification
    showFormSentModal(); // Afficher le modal après soumission
  }
};

const validateForm = () => {
  isValidForm.value.title = newGame.value.title.trim() !== "";
  isValidForm.value.main_character = newGame.value.main_character.trim() !== "";
  isValidForm.value.setting = newGame.value.setting.trim() !== "";
  isValidForm.value.price =
    newGame.value.price >= 0 && newGame.value.price <= 200;
  isValidForm.value.quantity =
    newGame.value.quantity >= 0 && newGame.value.quantity <= 100;
  isValidForm.value.image = newGame.value.image.trim() !== "";
};

// Watcher pour récupérer le jeu à modifier si on est en mode édition
//chat GPT
watchEffect(() => {
  if (isEditing.value == true) {
    const gameToEdit = getGameById(gameId.value);
    if (gameToEdit) {
      newGame.value = { ...gameToEdit };
    }
  } else if (isDuplicating.value == true) {
    const gameToDuplicate = getGameById(gameId.value);
    if (gameToDuplicate) {
      newGame.value = { ...gameToDuplicate, id: 0 };
    }
  }
});

const formText = ref("");

//chat GPT
const showFormSentModal = () => {
  formSentModal.value = true;
  setTimeout(() => {
    formSentModal.value = false;
  }, 3000); // 3 secondes pour l'animation
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

//chat GPT
// Etat pour afficher le modal
const formSentModal = ref(false);
</script>

<template>
  <div class="container mt-4">
    <!-- chat GPT pour la syntaxe -->
    <h2>
      {{
        isEditing
          ? "Modifier le jeu"
          : isDuplicating
          ? "Dupliquer le jeu"
          : "Ajouter un jeu Assassin's Creed"
      }}
    </h2>

    <!-- chat pour le html du formulaire -->
    <form @submit.prevent="addGame" class="mb-4" novalidate>
      <div class="mb-3">
        <label for="title" class="form-label">Titre :</label>
        <input
          id="title"
          v-model="newGame.title"
          @input="validateForm"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.title,
            'is-valid': isValidForm.title,
          }"
          required
        />
        <div v-if="!isValidForm.title" class="invalid-feedback">
          Le titre est obligatoire.
        </div>
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
          @input="validateForm"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.main_character,
            'is-valid': isValidForm.main_character,
          }"
          required
        />
        <div v-if="!isValidForm.main_character" class="invalid-feedback">
          Le personnage principal est obligatoire.
        </div>
      </div>

      <div class="mb-3">
        <label for="setting" class="form-label">Lieu et période :</label>
        <input
          id="setting"
          v-model="newGame.setting"
          @input="validateForm"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.setting,
            'is-valid': isValidForm.setting,
          }"
          required
        />
        <div v-if="!isValidForm.setting" class="invalid-feedback">
          Le lieu et la période sont obligatoires.
        </div>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Prix :</label>
        <input
          id="price"
          type="number"
          v-model.number="newGame.price"
          @input="validateForm"
          min="0"
          max="200"
          step="0.01"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.price,
            'is-valid': isValidForm.price,
          }"
          required
        />
        <div v-if="!isValidForm.price" class="invalid-feedback">
          Le prix doit être entre 0 et 200$.
        </div>
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Quantité :</label>
        <input
          id="quantity"
          type="number"
          v-model.number="newGame.quantity"
          @input="validateForm"
          min="0"
          max="100"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.quantity,
            'is-valid': isValidForm.quantity,
          }"
        />
        <div v-if="!isValidForm.quantity" class="invalid-feedback">
          La quantité doit être entre 0 et 100.
        </div>
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image :</label>
        <input
          id="image"
          v-model="newGame.image"
          @input="validateForm"
          class="form-control"
          :class="{
            'is-invalid': !isValidForm.image,
            'is-valid': isValidForm.image,
          }"
          required
        />
        <div v-if="!isValidForm.image" class="invalid-feedback">
          L'image est obligatoire.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        {{
          isEditing
            ? "Sauvegarder modifications"
            : isDuplicating
            ? "Sauvegarder duplications"
            : "Ajouter le jeu"
        }}
      </button>
    </form>
  </div>

  <!-- chat GPT pour le modal -->
  <div
    v-if="formSentModal"
    class="modal fade show"
    tabindex="-1"
    style="display: block"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ formText }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="formSentModal = false"
          ></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center">
            <div class="checkmark-container">
              <div class="checkmark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- chat GPT pour le css -->
<style scoped>
.container {
  max-width: 600px;
  color: white;
}

.modal {
  background: rgba(0, 0, 0, 0.5);
}

.checkmark-container {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.checkmark {
  width: 0;
  height: 0;
  border-left: 5px solid #28a745;
  border-bottom: 5px solid #28a745;
  animation: checkmark-animation 0.5s ease-in-out forwards;
  transform: rotate(
    310deg
  ); /* Rotation essaie erreur pour mettre le checkmark droit*/
}

@keyframes checkmark-animation {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 30px;
    height: 15px;
  }
  100% {
    width: 30px;
    height: 15px;
    border-left-width: 10px;
    border-bottom-width: 10px;
  }
}
</style>
