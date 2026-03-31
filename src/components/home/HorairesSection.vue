<template>
  <section class="horaires-section section-padding" aria-labelledby="horaires-title">
    <div class="container-max">
      <div class="horaires-inner">
        <div class="horaires-content">
          <SectionTitle
            id="horaires-title"
            title="Nos horaires"
            align="left"
          />
          <HorairesTable />
        </div>
        <div class="horaires-cta-block">
          <p class="horaires-cta-text">
            Prête à prendre soin de vous ?<br>
            Appelez-nous pour réserver votre moment.
          </p>
          <a href="tel:4502290434" class="btn-primary horaires-btn" aria-label="Appeler Zisany Beauté pour prendre rendez-vous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Appeler maintenant
          </a>
          <p class="horaires-phone">(450) 229-0434</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../shared/SectionTitle.vue'
import HorairesTable from '../shared/HorairesTable.vue'
</script>

<style scoped>
.horaires-section {
  background-color: var(--blanc-casse);
}

.horaires-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: start;
}

@media (min-width: 768px) {
  .horaires-inner {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.horaires-cta-block {
  background: linear-gradient(135deg, var(--rose-pale), var(--champagne));
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  border: 1px solid var(--champagne-fonce);
}

.horaires-cta-text {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.3rem;
  color: var(--brun-elegant);
  line-height: 1.5;
  margin-bottom: 28px;
}

.horaires-btn {
  width: 100%;
  justify-content: center;
  font-size: 0.9rem;
  padding: 16px 28px;
  margin-bottom: 12px;
}

.horaires-phone {
  font-size: 0.85rem;
  color: var(--taupe);
}
</style>
