<template>
  <section class="whyus section-padding" aria-labelledby="whyus-title" ref="section">
    <div class="container-max">
      <SectionTitle
        id="whyus-title"
        title="Pourquoi Zisany Beauté ?"
        subtitle="Un salon pensé pour vous, de la première visite à chaque retour."
      />
      <div class="whyus-grid">
        <div v-for="item in points" :key="item.title" class="whyus-item">
          <div class="whyus-icon" aria-hidden="true" v-html="item.icon"></div>
          <div>
            <h3 class="whyus-title">{{ item.title }}</h3>
            <p class="whyus-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../shared/SectionTitle.vue'

gsap.registerPlugin(ScrollTrigger)
const section = ref(null)

onMounted(() => {
  gsap.fromTo(section.value,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: section.value, start: 'top 85%', once: true } }
  )
})

const points = [
  {
    title: 'Atmosphère chaleureuse',
    desc: 'Un espace accueillant où vous vous sentez chez vous dès la première visite.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    title: 'Tout sous un même toit',
    desc: 'Coiffure, esthétique, soins du corps — une seule adresse pour tous vos besoins beauté.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    title: 'Équipe professionnelle',
    desc: 'Des spécialistes passionnés, à l\'écoute de vos envies et attentifs à chaque détail.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    title: 'Résultats personnalisés',
    desc: 'Chaque soin est adapté à votre type de peau, vos cheveux et vos préférences.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
]
</script>

<style scoped>
.whyus {
  background-color: var(--champagne);
}

.whyus-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 640px) {
  .whyus-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.whyus-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.whyus-icon {
  width: 48px;
  height: 48px;
  background: var(--rose-pale);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.whyus-title {
  font-size: 1rem;
  margin-bottom: 6px;
}

.whyus-desc {
  font-size: 0.875rem;
  color: var(--taupe);
  line-height: 1.7;
}
</style>
