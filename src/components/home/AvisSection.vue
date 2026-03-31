<template>
  <section class="avis section-padding" aria-labelledby="avis-title" ref="section">
    <div class="container-max">
      <SectionTitle
        id="avis-title"
        title="Ce que disent nos clientes"
        label="Avis Google"
      />
      <div class="avis-grid">
        <article v-for="avis in avisList" :key="avis.nom" class="avis-card service-card">
          <div class="stars" aria-label="5 étoiles sur 5">
            <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="#C49A7A" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <blockquote class="avis-text">"{{ avis.texte }}"</blockquote>
          <footer class="avis-auteur">— {{ avis.nom }}</footer>
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

const avisList = [
  { nom: 'Sophie L.', texte: 'Personnel très accueillant et professionnel. Je recommande à toutes mes amies !' },
  { nom: 'Martine B.', texte: 'Excellente coupe de cheveux, je suis très satisfaite du résultat. Je reviendrai sans hésiter.' },
  { nom: 'Isabelle R.', texte: 'Belle ambiance, service impeccable. J\'y retourne à chaque fois, c\'est mon salon de confiance.' },
]
</script>

<style scoped>
.avis {
  background-color: var(--rose-pale);
}

.avis-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .avis-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.avis-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

.avis-card::before {
  content: '“';
  position: absolute;
  top: 18px;
  right: 22px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  line-height: 1;
  color: rgba(196, 154, 122, 0.18);
  pointer-events: none;
}

.stars {
  display: flex;
  gap: 3px;
}

.avis-text {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.06rem;
  color: var(--brun-moyen);
  line-height: 1.65;
  flex: 1;
  padding-right: 1.5rem;
  text-wrap: pretty;
}

.avis-auteur {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.78rem;
  color: var(--taupe);
  letter-spacing: 0.05em;
}
</style>
