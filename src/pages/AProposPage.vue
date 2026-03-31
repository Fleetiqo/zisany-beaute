<template>
  <div>
    <!-- Hero -->
    <section class="page-hero" aria-labelledby="apropos-title">
      <div class="container-max hero-inner">
        <div class="hero-text">
          <span class="badge" style="margin-bottom: 16px; display: inline-block;">Notre salon</span>
          <h1 id="apropos-title" class="page-title">Un endroit pensé pour vous.</h1>
          <GoldDivider style="justify-content: flex-start;" />
          <p class="hero-desc">
            Niché au cœur de Sainte-Adèle dans les Laurentides, Zisany Beauté est bien plus qu'un salon —
            c'est un espace de détente et de confiance où chaque cliente est accueillie avec chaleur et attention.
          </p>
          <p class="hero-desc">
            Notre équipe de professionnels passionnés vous accompagne dans tous vos besoins beauté :
            coiffure, esthétique, soins du corps et des ongles. Que vous veniez seule, en famille ou entre amies,
            vous repartez toujours avec le sourire.
          </p>
          <a href="tel:4502290434" class="btn-primary" style="margin-top: 24px;" aria-label="Prendre rendez-vous">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Prendre rendez-vous
          </a>
        </div>
        <div class="hero-image-wrap">
          <div class="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800"
              alt="Intérieur chaleureux du salon Zisany Beauté"
              class="hero-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="valeurs section-padding" aria-labelledby="valeurs-title">
      <div class="container-max">
        <SectionTitle
          id="valeurs-title"
          title="Nos valeurs"
          subtitle="Ce qui guide chacun de nos gestes, chaque jour."
        />
        <div class="valeurs-grid">
          <div v-for="v in valeurs" :key="v.title" class="valeur-item service-card">
            <div class="valeur-icon" aria-hidden="true" v-html="v.icon"></div>
            <h3 class="valeur-title">{{ v.title }}</h3>
            <p class="valeur-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="cta-section section-padding" aria-label="Prendre rendez-vous">
      <div class="container-max" style="text-align: center;">
        <h2 class="cta-title">Venez nous rendre visite</h2>
        <GoldDivider style="justify-content: center;" />
        <p class="cta-desc">936, rue Valiquette, Sainte-Adèle, QC J8B 2M3</p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 32px;">
          <a href="tel:4502290434" class="btn-primary" aria-label="Appeler le salon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (450) 229-0434
          </a>
          <RouterLink to="/contact" class="btn-secondary">Nous écrire</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GoldDivider from '../components/shared/GoldDivider.vue'
import SectionTitle from '../components/shared/SectionTitle.vue'

const valeurs = [
  {
    title: 'Écoute et personnalisation',
    desc: 'Chaque cliente est unique. Nous prenons le temps de comprendre vos envies pour vous offrir un résultat qui vous ressemble vraiment.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  },
  {
    title: 'Produits de qualité',
    desc: 'Nous sélectionnons des produits professionnels haut de gamme pour prendre soin de vos cheveux, de votre peau et de votre corps.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    title: 'Ambiance détendue et bienveillante',
    desc: 'Chez Zisany Beauté, vous êtes chez vous. Un espace chaleureux, une équipe souriante — votre bien-être est notre priorité.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--rose-pale) 0%, var(--champagne) 100%);
  padding: 80px 24px;
}

@media (min-width: 768px) {
  .page-hero {
    padding: 100px 48px;
  }
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
}

@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.page-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

.hero-desc {
  font-size: 0.95rem;
  color: var(--taupe);
  line-height: 1.8;
  margin-top: 16px;
}

.hero-image-frame {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(74, 55, 40, 0.12);
  aspect-ratio: 4/3;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Valeurs */
.valeurs {
  background-color: var(--blanc-casse);
}

.valeurs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .valeurs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.valeur-item {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.valeur-icon {
  width: 52px;
  height: 52px;
  background: var(--rose-pale);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.valeur-title {
  font-size: 1rem;
}

.valeur-desc {
  font-size: 0.875rem;
  color: var(--taupe);
  line-height: 1.7;
}

/* CTA section */
.cta-section {
  background: linear-gradient(135deg, var(--champagne), var(--rose-pale));
}

.cta-title {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.cta-desc {
  font-size: 0.9rem;
  color: var(--taupe);
  margin-top: 8px;
}
</style>
