<template>
  <section class="hero" aria-label="Bienvenue chez Zisany Beauté">
    <div class="hero-inner container-max">
      <!-- Left: text -->
      <div class="hero-text fade-up" ref="heroText">
        <span class="badge" style="margin-bottom: 20px; display: inline-block;">Sainte-Adèle · Laurentides</span>
        <h1 class="hero-title">Votre beauté,<br>sublimée.</h1>
        <GoldDivider style="justify-content: flex-start;" />
        <p class="hero-subtitle">
          Salon de coiffure et d'esthétique à Sainte-Adèle.<br>
          Une atmosphère chaleureuse, des soins sur mesure.
        </p>
        <div class="hero-ctas">
          <a href="tel:4502290434" class="btn-primary" aria-label="Prendre rendez-vous — appel téléphonique">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Prendre rendez-vous
          </a>
          <RouterLink to="/services" class="btn-secondary">Découvrir nos services</RouterLink>
        </div>
        <p class="hero-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#C49A7A" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          5 étoiles Google · Sainte-Adèle, Laurentides
        </p>
      </div>

      <!-- Right: image -->
      <div class="hero-image-wrap fade-up" ref="heroImage" style="transition-delay: 0.15s;">
        <div class="hero-image-frame">
          <img
            src="https://www.institut351.com/components/com_gdwgestion/download.php?fileid=1087"
            alt="Ambiance chaleureuse du salon Zisany Beauté"
            class="hero-image"
            loading="eager"
          />
        </div>
        <div class="hero-image-deco" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import GoldDivider from '../shared/GoldDivider.vue'

const heroText = ref(null)
const heroImage = ref(null)

onMounted(() => {
  gsap.fromTo(heroText.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.1 }
  )
  gsap.fromTo(heroImage.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.3 }
  )
})
</script>

<style scoped>
.hero {
  position: relative;
  background:
    radial-gradient(ellipse 85% 70% at 15% 20%, rgba(255, 255, 255, 0.55), transparent 50%),
    linear-gradient(145deg, var(--rose-pale) 0%, var(--champagne) 45%, var(--champagne-fonce) 100%);
  padding: 80px 24px 80px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: -40% 55% auto -15%;
  height: 90%;
  background: radial-gradient(circle, rgba(196, 154, 122, 0.09) 0%, transparent 68%);
  pointer-events: none;
}

@media (min-width: 768px) {
  .hero {
    padding: 100px 48px;
  }
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
}

@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr minmax(240px, 0.68fr);
  }

  .hero-image-wrap {
    max-width: min(100%, 380px);
    justify-self: end;
    width: 100%;
  }
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  margin-bottom: 0;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--taupe);
  line-height: 1.8;
  margin-bottom: 32px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 24px;
}

.hero-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--taupe);
  font-family: 'Libre Baskerville', serif;
}

/* Image */
.hero-image-wrap {
  position: relative;
}

.hero-image-frame {
  border-radius: 22px;
  overflow: hidden;
  box-shadow:
    0 24px 56px rgba(74, 55, 40, 0.14),
    0 0 0 1px rgba(255, 255, 255, 0.65) inset;
  aspect-ratio: 4/5;
}

@media (min-width: 900px) {
  .hero-image-frame {
    aspect-ratio: 3/4;
  }
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-image-deco {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 120px;
  height: 120px;
  border: 2px solid var(--or-rose);
  border-radius: 16px;
  opacity: 0.3;
  z-index: -1;
}
</style>
