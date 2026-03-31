<template>
  <div>
    <!-- Page hero -->
    <section class="page-hero" aria-labelledby="services-page-title">
      <div class="container-max" style="text-align: center;">
        <span class="badge" style="margin-bottom: 16px; display: inline-block;">Nos services</span>
        <h1 id="services-page-title" class="page-title">Des soins pour chaque facette de vous.</h1>
        <GoldDivider style="justify-content: center;" />
        <p class="page-subtitle">
          Coiffure, esthétique, soins du corps — tout ce dont vous avez besoin<br>
          pour vous sentir bien dans votre peau.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="services-content section-padding">
      <div class="container-max">
        <ServiceCategory
          v-for="cat in categories"
          :key="cat.id"
          v-bind="cat"
        />

        <!-- Note tarifs -->
        <div class="tarifs-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>
            Les prix sont disponibles sur demande. Contactez-nous au
            <a href="tel:4502290434" class="tarifs-link">(450) 229-0434</a>
            pour connaître les tarifs et prendre rendez-vous.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GoldDivider from '../components/shared/GoldDivider.vue'
import ServiceCategory from '../components/services/ServiceCategory.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.service-category').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
    )
  })
})

const iconCoiffure = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.46 2.5 2.5 0 01-1.07-4.27L12 9.5"/><path d="M14.5 2A2.5 2.5 0 0112 4.5"/></svg>`
const iconVisage = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
const iconEpilation = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
const iconCils = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
const iconOngles = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"/><path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"/><path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/><path d="M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"/></svg>`
const iconCorps = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`

const categories = [
  {
    id: 'coiffure',
    title: 'Coiffure',
    description: 'De la coupe du quotidien à la coiffure de mariage, notre équipe prend soin de vos cheveux avec expertise et passion.',
    icon: iconCoiffure,
    services: [
      { name: 'Coupe femme', desc: 'Coupe personnalisée adaptée à votre morphologie et style.' },
      { name: 'Coupe homme', desc: 'Coupe classique ou tendance, avec finition soignée.' },
      { name: 'Coupe enfant', desc: 'Coupe douce et rapide pour les petits.' },
      { name: 'Coloration', desc: 'Couleur pleine, racines ou fantaisie selon vos envies.' },
      { name: 'Mèches', desc: 'Mèches classiques pour un effet naturel et lumineux.' },
      { name: 'Balayage', desc: 'Technique douce pour un dégradé soleil parfait.' },
      { name: 'Permanente', desc: 'Boucles durables et définies.' },
      { name: 'Lissage brésilien', desc: 'Lissage longue durée pour des cheveux soyeux.' },
      { name: 'Traitement kératine', desc: 'Soin restructurant pour cheveux abîmés.' },
      { name: 'Coiffure de mariage', desc: 'Mise en beauté complète pour votre grand jour.' },
      { name: 'Chignon', desc: 'Chignon élégant pour toutes occasions.' },
      { name: 'Haute coiffure', desc: 'Créations sophistiquées pour événements spéciaux.' },
    ],
  },
  {
    id: 'visage',
    title: 'Soins du visage',
    description: 'Des soins ciblés pour révéler l\'éclat naturel de votre peau, adaptés à chaque type et chaque besoin.',
    icon: iconVisage,
    services: [
      { name: 'Soin du visage (facial)', desc: 'Soin complet nettoyant, hydratant et revitalisant.' },
      { name: 'Peeling', desc: 'Exfoliation en profondeur pour un teint unifié.' },
      { name: 'Nettoyage de peau', desc: 'Élimination des impuretés et points noirs.' },
      { name: 'Traitement antiâge', desc: 'Soin ciblé pour atténuer les signes du temps.' },
      { name: 'Traitement acné', desc: 'Protocole adapté pour peaux à tendance acnéique.' },
      { name: 'Rajeunissement cutané', desc: 'Techniques avancées pour une peau plus jeune et ferme.' },
    ],
  },
  {
    id: 'epilation',
    title: 'Épilation',
    description: 'Des solutions d\'épilation pour tous les types de peau, du temporaire au permanent.',
    icon: iconEpilation,
    services: [
      { name: 'Épilation à la cire — visage', desc: 'Sourcils, lèvre supérieure, menton et plus.' },
      { name: 'Épilation à la cire — corps', desc: 'Jambes, aisselles, maillot et corps complet.' },
      { name: 'Épilation laser', desc: 'Réduction permanente du poil par laser.' },
      { name: 'Électrolyse', desc: 'Épilation permanente par courant électrique.' },
      { name: 'Thermocoagulation', desc: 'Traitement ciblé pour une épilation définitive.' },
    ],
  },
  {
    id: 'cils',
    title: 'Extensions et regard',
    description: 'Sublimez votre regard avec nos techniques d\'extensions et de rehaussement de cils.',
    icon: iconCils,
    services: [
      { name: 'Extensions de cils', desc: 'Pose de cils synthétiques pour un regard intense et naturel.' },
      { name: 'Rehaussement de cils', desc: 'Courbe naturelle longue durée sans extensions.' },
    ],
  },
  {
    id: 'ongles',
    title: 'Ongles',
    description: 'Des mains et des pieds soignés, des ongles parfaits — du soin classique à la pose complète.',
    icon: iconOngles,
    services: [
      { name: 'Pose d\'ongles gel', desc: 'Ongles en gel pour une tenue longue durée.' },
      { name: 'Pose d\'ongles résine', desc: 'Résine pour des ongles solides et naturels.' },
      { name: 'Manucure', desc: 'Soin complet des mains et mise en forme des ongles.' },
      { name: 'Pédicure', desc: 'Soin complet des pieds, hydratation et vernis.' },
      { name: 'Shellac / vernis gel', desc: 'Vernis semi-permanent jusqu\'à 3 semaines de tenue.' },
    ],
  },
  {
    id: 'corps',
    title: 'Soins corporels',
    description: 'Des traitements innovants pour sculpter, tonifier et revitaliser votre corps.',
    icon: iconCorps,
    services: [
      { name: 'Électro-stimulation', desc: 'Tonification musculaire par courants électriques doux.' },
      { name: 'Infrathérapie', desc: 'Chaleur infrarouge pour détente profonde et minceur.' },
      { name: 'Lipocavitation', desc: 'Traitement minceur par ultrasons pour réduire les amas graisseux.' },
    ],
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--rose-pale) 0%, var(--champagne) 100%);
  padding: 80px 24px 60px;
}

@media (min-width: 768px) {
  .page-hero {
    padding: 100px 48px 70px;
  }
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
}

.page-subtitle {
  font-size: 1rem;
  color: var(--taupe);
  line-height: 1.8;
  margin-top: 16px;
}

.services-content {
  background-color: var(--blanc-casse);
}

.tarifs-note {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--champagne);
  border: 1px solid var(--champagne-fonce);
  border-radius: 10px;
  padding: 20px 24px;
  margin-top: 48px;
  font-size: 0.875rem;
  color: var(--taupe);
  line-height: 1.7;
}

.tarifs-link {
  color: var(--brun-elegant);
  font-weight: 500;
  text-decoration: none;
}

.tarifs-link:hover {
  text-decoration: underline;
}
</style>
