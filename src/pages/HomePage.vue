<template>
  <div>
    <HeroSection />
    <UniversCards />
    <WhyUsSection />
    <AvisSection />
    <HorairesSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import UniversCards from '../components/home/UniversCards.vue'
import WhyUsSection from '../components/home/WhyUsSection.vue'
import AvisSection from '../components/home/AvisSection.vue'
import HorairesSection from '../components/home/HorairesSection.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.fade-up-scroll').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    )
  })
})
</script>
