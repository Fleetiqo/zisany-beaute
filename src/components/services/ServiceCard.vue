<template>
  <li class="service-card-item service-card">
    <div class="service-name">{{ name }}</div>
    <p v-if="desc" class="service-desc">{{ desc }}</p>
  </li>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
})
</script>

<style scoped>
.service-card-item {
  list-style: none;
}

.service-name {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  color: var(--brun-elegant);
  margin-bottom: 6px;
}

.service-desc {
  font-size: 0.82rem;
  color: var(--taupe);
  line-height: 1.6;
}
</style>
