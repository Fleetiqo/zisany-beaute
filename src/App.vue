<template>
  <AppNavbar />
  <main class="site-main">
    <RouterView />
  </main>
  <AppFooter />
  <!-- Mobile sticky call bar -->
  <a href="tel:4502290434" class="mobile-call-bar" aria-label="Appeler Zisany Beauté">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--rose-nude)">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
    <span style="color: var(--blanc-casse); font-family: 'Lato', sans-serif; font-weight: 500; font-size: 0.9rem; letter-spacing: 0.05em;">
      Appeler : (450) 229-0434
    </span>
  </a>
</template>

<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>
