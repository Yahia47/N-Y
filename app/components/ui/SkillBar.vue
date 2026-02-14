<template>
  <div class="skill-bar">
    <div class="skill-info">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-level">{{ level }}%</span>
    </div>
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{
          width: isVisible ? `${level}%` : '0%',
          background: color,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  level: Number,
  color: String,
});

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<style scoped>
.skill-bar {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.skill-name {
  color: var(--light);
}

.skill-level {
  color: var(--gray-light);
  font-size: 0.9rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px currentColor;
}
</style>