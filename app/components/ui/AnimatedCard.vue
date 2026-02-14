<template>
  <div
    class="animated-card glass"
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
  >
    <slot />
  </div>
</template>

<style scoped>
.animated-card {
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  border-color: var(--primary);
}
</style>