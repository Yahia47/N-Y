<template>
  <div
    class="project-card glass"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { delay: index * 100, duration: 600 },
    }"
  >
    <div class="project-image">
      <img :src="project.image" :alt="project.title" />
      <div
        class="image-overlay"
        :style="{
          background: `linear-gradient(135deg, ${project.color}80, ${project.color}40)`,
        }"
      ></div>

      <div class="project-links">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="project-link"
          aria-label="GitHub"
        >
          <Icon name="bi:github" size="20" />
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="project-link"
          aria-label="Demo"
        >
          <Icon name="heroicons:arrow-top-right-on-square" size="20" />
        </a>
      </div>
    </div>

    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <div class="project-tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag"
          :style="{ borderColor: project.color }"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  project: Object,
  index: Number,
});
</script>

<style scoped>
.project-card {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.project-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-links {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-links {
  opacity: 1;
}

.project-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: var(--dark);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.project-link:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--light);
}

.project-content p {
  color: var(--gray-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid;
  color: var(--light);
  font-weight: 500;
}
</style>