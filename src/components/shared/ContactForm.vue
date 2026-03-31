<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input id="prenom" v-model="form.prenom" type="text" placeholder="Marie" required autocomplete="given-name" />
      </div>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input id="nom" v-model="form.nom" type="text" placeholder="Tremblay" required autocomplete="family-name" />
      </div>
    </div>
    <div class="form-group">
      <label for="courriel">Courriel</label>
      <input id="courriel" v-model="form.courriel" type="email" placeholder="marie@exemple.com" required autocomplete="email" />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="5" placeholder="Bonjour, j'aimerais avoir de l'information sur..." required></textarea>
    </div>

    <div v-if="error" class="form-error" role="alert">{{ error }}</div>
    <div v-if="success" class="form-success" role="status">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
      Votre message a été envoyé. Nous vous répondrons sous peu.
    </div>

    <button type="submit" class="btn-primary" :disabled="loading" style="margin-top: 8px;">
      <span v-if="loading">Envoi en cours…</span>
      <span v-else>Envoyer le message</span>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ prenom: '', nom: '', courriel: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref('')

async function handleSubmit() {
  error.value = ''
  if (!form.prenom || !form.nom || !form.courriel || !form.message) {
    error.value = 'Veuillez remplir tous les champs.'
    return
  }
  loading.value = true
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error()
    success.value = true
    Object.assign(form, { prenom: '', nom: '', courriel: '', message: '' })
  } catch {
    error.value = 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--taupe);
}

input, textarea {
  background: var(--blanc-casse);
  border: 1px solid var(--champagne-fonce);
  border-radius: 6px;
  padding: 12px 16px;
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  color: var(--noir-doux);
  transition: border-color 0.2s ease;
  outline: none;
  resize: vertical;
}

input:focus, textarea:focus {
  border-color: var(--or-rose);
}

input::placeholder, textarea::placeholder {
  color: var(--taupe);
  opacity: 0.5;
}

.form-error {
  background: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 0.875rem;
}

.form-success {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 0.875rem;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
