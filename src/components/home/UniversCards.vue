<template>
  <section class="univers section-padding" id="services" aria-labelledby="univers-title" ref="section">
    <div class="container-max">
      <SectionTitle
        id="univers-title"
        title="Nos univers beauté"
        subtitle="Tout ce dont vous avez besoin pour vous sentir bien dans votre peau, sous un même toit."
      />
      <div class="univers-grid">
        <article v-for="card in cards" :key="card.title" class="univers-card service-card">
          <div class="card-icon" aria-hidden="true" v-html="card.icon"></div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc">{{ card.desc }}</p>
          <RouterLink to="/services" class="card-link" :aria-label="`En savoir plus sur ${card.title}`">
            Voir les services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </RouterLink>
        </article>
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

const cards = [
  {
    title: 'Coiffure',
    desc: 'Coupe femme, homme et enfant, coloration, mèches, balayage, lissage brésilien, coiffure de mariage et événements spéciaux.',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.46 2.5 2.5 0 01-1.07-4.27L12 9.5"/><path d="M14.5 2A2.5 2.5 0 0112 4.5"/><path d="M16.5 15.5a2.5 2.5 0 01-4.96.46"/></svg>`,
  },
  {
    title: 'Esthétique',
    desc: 'Soins du visage, peeling, traitement acné, rajeunissement cutané, épilation, extensions de cils et rehaussement.',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8"/><path d="M8 17h8"/></svg>`,
  },
  {
    title: 'Corps & Ongles',
    desc: 'Manucure, pédicure, pose d\'ongles gel et résine, shellac, électro-stimulation, infrathérapie et lipocavitation.',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"/><path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"/><path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/><path d="M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"/></svg>`,
  },
]
</script>

<style scoped>
.univers {
  background-color: var(--blanc-casse);
}

.univers-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .univers-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.univers-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-icon {
  width: 56px;
  height: 56px;
  background: var(--rose-pale);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1.15rem;
  margin-top: 4px;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--taupe);
  line-height: 1.7;
  flex: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--or-rose);
  text-decoration: none;
  margin-top: 8px;
  transition: gap 0.2s ease;
}

.card-link:hover {
  gap: 10px;
}
</style>
