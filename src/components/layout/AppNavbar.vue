<template>
  <header :class="['navbar', { 'navbar-scrolled': scrolled }]" role="banner">
    <div class="navbar-inner container-max">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" aria-label="Zisany Beauté — Accueil">
        Zisany Beauté
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="navbar-links" aria-label="Navigation principale">
        <RouterLink to="/" class="nav-link">Accueil</RouterLink>
        <RouterLink to="/services" class="nav-link">Services</RouterLink>
        <RouterLink to="/a-propos" class="nav-link">Notre salon</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </nav>

      <!-- Desktop CTA -->
      <a href="tel:4502290434" class="btn-primary navbar-cta" aria-label="Prendre rendez-vous par téléphone">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        Prendre rendez-vous
      </a>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="mobile-menu" aria-label="Menu">
        <span :class="['hamburger-line', { open: menuOpen }]"></span>
        <span :class="['hamburger-line', { open: menuOpen }]"></span>
        <span :class="['hamburger-line', { open: menuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" id="mobile-menu" class="mobile-menu" role="navigation" aria-label="Menu mobile">
        <RouterLink to="/" class="mobile-link" @click="menuOpen = false">Accueil</RouterLink>
        <RouterLink to="/services" class="mobile-link" @click="menuOpen = false">Services</RouterLink>
        <RouterLink to="/a-propos" class="mobile-link" @click="menuOpen = false">Notre salon</RouterLink>
        <RouterLink to="/contact" class="mobile-link" @click="menuOpen = false">Contact</RouterLink>
        <a href="tel:4502290434" class="btn-primary mobile-cta" @click="menuOpen = false">
          Prendre rendez-vous
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(253, 250, 247, 0.86);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition:
    box-shadow 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease;
}

.navbar.navbar-scrolled {
  background: rgba(253, 250, 247, 0.94);
  border-bottom-color: rgba(237, 213, 188, 0.55);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  gap: 24px;
}

@media (min-width: 1024px) {
  .navbar-inner {
    padding: 18px 48px;
  }
}

.navbar-logo {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--brun-elegant);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.navbar-links {
  display: none;
  gap: 32px;
}

@media (min-width: 768px) {
  .navbar-links {
    display: flex;
  }
}

.nav-link {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--taupe);
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--brun-elegant);
}

.nav-link:focus-visible {
  outline: 2px solid var(--or-rose);
  outline-offset: 4px;
  border-radius: 2px;
}

.navbar-cta {
  display: none;
  font-size: 0.8rem;
  padding: 10px 20px;
}

@media (min-width: 768px) {
  .navbar-cta {
    display: inline-flex;
  }
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--brun-elegant);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-line:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
.hamburger-line:nth-child(2).open { opacity: 0; }
.hamburger-line:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  background-color: var(--blanc-casse);
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid var(--champagne-fonce);
}

.mobile-link {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: var(--taupe);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--champagne-fonce);
  transition: color 0.2s ease;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: var(--brun-elegant);
}

.mobile-cta {
  margin-top: 16px;
  justify-content: center;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 400px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
