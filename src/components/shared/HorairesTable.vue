<template>
  <table class="horaires-table" aria-label="Horaires d'ouverture">
    <tbody>
      <tr v-for="h in horaires" :key="h.jour" :class="{ closed: h.ferme, today: h.isToday }">
        <td class="jour">{{ h.jour }}</td>
        <td class="heures">{{ h.ferme ? 'Fermé' : h.heures }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const todayIndex = new Date().getDay()

const horaires = [
  { jour: 'Lundi', heures: '9h — 17h', ferme: true },
  { jour: 'Mardi', heures: '9h — 17h', ferme: false },
  { jour: 'Mercredi', heures: '9h — 17h', ferme: false },
  { jour: 'Jeudi', heures: '9h — 17h', ferme: false },
  { jour: 'Vendredi', heures: '9h — 17h', ferme: false },
  { jour: 'Samedi', heures: '9h — 15h', ferme: false },
  { jour: 'Dimanche', heures: '9h — 17h', ferme: true },
].map(h => ({ ...h, isToday: days[todayIndex] === h.jour }))
</script>

<style scoped>
.horaires-table {
  border-collapse: collapse;
  width: 100%;
  max-width: 360px;
}

.horaires-table tr {
  border-bottom: 1px solid var(--champagne-fonce);
}

.horaires-table td {
  padding: 10px 0;
  font-size: 0.9rem;
}

.jour {
  color: var(--taupe);
  width: 50%;
}

.heures {
  color: var(--brun-elegant);
  font-weight: 400;
}

.closed .heures {
  color: var(--taupe);
  opacity: 0.6;
}

.today .jour {
  color: var(--brun-elegant);
  font-weight: 500;
}

.today .heures {
  color: var(--or-rose);
  font-weight: 500;
}
</style>
