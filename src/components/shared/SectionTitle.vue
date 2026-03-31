<template>
  <div class="section-title-wrap" :class="align">
    <p v-if="label" class="badge" style="margin-bottom: 12px;">{{ label }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <GoldDivider />
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import GoldDivider from './GoldDivider.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  label: { type: String, default: '' },
  align: { type: String, default: 'center' }, // 'center' | 'left'
})
</script>

<style scoped>
.section-title-wrap {
  margin-bottom: 48px;
}

.section-title-wrap.center {
  text-align: center;
}

.section-title-wrap.center .gold-divider {
  margin: 0 auto 16px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--taupe);
  max-width: 560px;
  line-height: 1.8;
}

.center .section-subtitle {
  margin: 0 auto;
}
</style>
