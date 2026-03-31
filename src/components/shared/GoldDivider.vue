<template>
  <div class="gold-divider" aria-hidden="true">
    <div class="gold-divider-line"></div>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1C8 1 6 4 4 5C2 6 1 8 1 8C1 8 2 10 4 11C6 12 8 15 8 15C8 15 10 12 12 11C14 10 15 8 15 8C15 8 14 6 12 5C10 4 8 1 8 1Z" fill="#C49A7A" opacity="0.6"/>
    </svg>
    <div class="gold-divider-line"></div>
  </div>
</template>

<style scoped>
.gold-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 16px 0;
}

.gold-divider-line {
  width: 72px;
  height: 1px;
  flex-shrink: 0;
  border: none;
  background: linear-gradient(
    90deg,
    transparent,
    var(--or-rose) 20%,
    var(--champagne-fonce) 50%,
    var(--or-rose) 80%,
    transparent
  );
  opacity: 0.9;
}
</style>
