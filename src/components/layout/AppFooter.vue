<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-inner container-max">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <p class="footer-logo">Zisany Beauté</p>
          <p class="footer-tagline">Salon de coiffure et d'esthétique<br>à Sainte-Adèle, Laurentides</p>
          <a href="https://www.facebook.com/zisanybeaute" target="_blank" rel="noopener noreferrer" class="footer-facebook" aria-label="Page Facebook de Zisany Beauté">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
            Facebook
          </a>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="footer-heading">Nous joindre</h4>
          <address class="footer-address">
            <p>936, rue Valiquette</p>
            <p>Sainte-Adèle, QC J8B 2M3</p>
          </address>
          <a href="tel:4502290434" class="footer-phone">(450) 229-0434</a>
        </div>

        <!-- Horaires -->
        <div class="footer-col">
          <h4 class="footer-heading">Horaires</h4>
          <table class="footer-hours">
            <tbody>
              <tr><td>Lundi</td><td>Fermé</td></tr>
              <tr><td>Mar — Ven</td><td>9h — 17h</td></tr>
              <tr><td>Samedi</td><td>9h — 15h</td></tr>
              <tr><td>Dimanche</td><td>Fermé</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Nav -->
        <div class="footer-col">
          <h4 class="footer-heading">Navigation</h4>
          <nav aria-label="Navigation pied de page">
            <RouterLink to="/" class="footer-link">Accueil</RouterLink>
            <RouterLink to="/services" class="footer-link">Services</RouterLink>
            <RouterLink to="/a-propos" class="footer-link">Notre salon</RouterLink>
            <RouterLink to="/contact" class="footer-link">Contact</RouterLink>
          </nav>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Zisany Beauté. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: var(--brun-elegant);
  color: rgba(253, 250, 247, 0.7);
  padding: 60px 24px 24px;
  /* Extra bottom padding on mobile for sticky call bar */
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  .footer {
    padding: 60px 48px 32px;
  }
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.4rem;
  color: var(--blanc-casse);
  margin-bottom: 10px;
}

.footer-tagline {
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.footer-facebook {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(253, 250, 247, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-facebook:hover {
  color: var(--rose-nude);
}

.footer-heading {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--rose-nude);
  margin-bottom: 16px;
}

.footer-address {
  font-style: normal;
  font-size: 0.85rem;
  line-height: 1.8;
  margin-bottom: 10px;
}

.footer-phone {
  color: var(--blanc-casse);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  transition: color 0.2s ease;
}

.footer-phone:hover {
  color: var(--rose-nude);
}

.footer-hours {
  font-size: 0.82rem;
  border-collapse: collapse;
}

.footer-hours td {
  padding: 3px 16px 3px 0;
  vertical-align: top;
}

.footer-hours td:first-child {
  color: rgba(253, 250, 247, 0.5);
  white-space: nowrap;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: rgba(253, 250, 247, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--rose-nude);
}

.footer-bottom {
  border-top: 1px solid rgba(253, 250, 247, 0.1);
  padding-top: 24px;
  font-size: 0.78rem;
  text-align: center;
}
</style>
