<template>
  <div>
    <!-- Hero -->
    <section class="page-hero" aria-labelledby="contact-title">
      <div class="container-max" style="text-align: center;">
        <span class="badge" style="margin-bottom: 16px; display: inline-block;">Nous joindre</span>
        <h1 id="contact-title" class="page-title">Réservez votre moment de beauté.</h1>
        <GoldDivider style="justify-content: center;" />
        <p class="page-subtitle">
          Pour prendre rendez-vous, nous vous conseillons d'appeler directement.<br>
          C'est la façon la plus rapide de trouver le créneau qui vous convient.
        </p>
        <a href="tel:4502290434" class="btn-primary" style="margin-top: 28px;" aria-label="Appeler Zisany Beauté">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Appeler : (450) 229-0434
        </a>
      </div>
    </section>

    <!-- Content -->
    <section class="contact-content section-padding">
      <div class="container-max contact-grid">

        <!-- Left: info + map + horaires -->
        <div class="contact-info">
          <div class="info-block">
            <h2 class="info-title">Informations</h2>
            <GoldDivider style="justify-content: flex-start;" />

            <div class="info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <address style="font-style: normal;">
                <strong>936, rue Valiquette</strong><br>
                Sainte-Adèle, QC J8B 2M3
              </address>
            </div>

            <div class="info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:4502290434" class="info-phone">(450) 229-0434</a>
            </div>

            <div class="info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              <a href="https://www.facebook.com/zisanybeaute" target="_blank" rel="noopener noreferrer" class="info-link">facebook.com/zisanybeaute</a>
            </div>
          </div>

          <!-- Horaires -->
          <div class="info-block" style="margin-top: 40px;">
            <h3 class="horaires-heading">Horaires d'ouverture</h3>
            <HorairesTable />
          </div>

          <!-- Map -->
          <div class="map-wrap" style="margin-top: 40px;">
            <iframe
              title="Localisation de Zisany Beauté sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d-74.1300!3d45.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s936+rue+Valiquette%2C+Sainte-Ad%C3%A8le%2C+QC!5e0!3m2!1sfr!2sca!4v1"
              width="100%"
              height="280"
              style="border: 0; border-radius: 12px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Right: form -->
        <div class="contact-form-wrap">
          <h2 class="info-title">Envoyez-nous un message</h2>
          <GoldDivider style="justify-content: flex-start;" />
          <p class="form-note">
            Pour une réponse rapide, préférez nous appeler au
            <a href="tel:4502290434" class="info-link">(450) 229-0434</a>.
          </p>
          <ContactForm style="margin-top: 28px;" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GoldDivider from '../components/shared/GoldDivider.vue'
import HorairesTable from '../components/shared/HorairesTable.vue'
import ContactForm from '../components/shared/ContactForm.vue'
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
  margin-top: 12px;
}

.contact-content {
  background-color: var(--blanc-casse);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.info-title {
  font-size: 1.6rem;
  margin-bottom: 0;
}

.horaires-heading {
  font-size: 1rem;
  margin-bottom: 16px;
  color: var(--brun-moyen);
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--champagne-fonce);
  font-size: 0.9rem;
  color: var(--noir-doux);
  line-height: 1.6;
}

.info-phone {
  color: var(--brun-elegant);
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
}

.info-phone:hover {
  color: var(--or-rose);
}

.info-link {
  color: var(--brun-moyen);
  text-decoration: none;
  font-size: 0.9rem;
}

.info-link:hover {
  text-decoration: underline;
}

.form-note {
  font-size: 0.875rem;
  color: var(--taupe);
  line-height: 1.7;
  margin-top: 8px;
}
</style>
