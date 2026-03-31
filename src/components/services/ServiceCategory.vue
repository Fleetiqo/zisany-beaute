<template>
  <section class="service-category" :aria-labelledby="`cat-${id}`">
    <div class="cat-header">
      <div class="cat-icon" aria-hidden="true" v-html="icon"></div>
      <div>
        <h2 :id="`cat-${id}`" class="cat-title">{{ title }}</h2>
        <p class="cat-desc">{{ description }}</p>
      </div>
    </div>
    <GoldDivider style="justify-content: flex-start; margin-bottom: 32px;" />
    <ul class="services-grid">
      <ServiceCard v-for="s in services" :key="s.name" :name="s.name" :desc="s.desc" />
    </ul>
    <div class="cat-cta">
      <a href="tel:4502290434" class="btn-primary" aria-label="Prendre rendez-vous pour ce service">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        Prendre rendez-vous
      </a>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import GoldDivider from '../shared/GoldDivider.vue'

defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  services: { type: Array, required: true },
})
</script>

<style scoped>
.service-category {
  padding: 56px 0;
  border-bottom: 1px solid var(--champagne-fonce);
}

.service-category:last-child {
  border-bottom: none;
}

.cat-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.cat-icon {
  width: 56px;
  height: 56px;
  background: var(--rose-pale);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cat-title {
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin-bottom: 6px;
}

.cat-desc {
  font-size: 0.9rem;
  color: var(--taupe);
  line-height: 1.7;
  max-width: 560px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 0;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.cat-cta {
  margin-top: 32px;
}
</style>
