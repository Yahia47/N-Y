<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
      >
        My <span class="gradient-text">Skills</span>
      </h2>

      <p
        class="section-subtitle"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 200 } }"
      >
        Technologies and tools I am proficient in
      </p>

      <!-- <div class="skills-grid">
        <div
          class="skill-category glass"
          v-for="(category, index) in skillCategories"
          :key="category.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { delay: index * 100, duration: 600 },
          }"
        >
          <div class="category-header">
            <Icon :name="category.icon" size="32" class="category-icon" />
            <h3>{{ category.title }}</h3>
          </div>

          <div class="skills-list">
            <SkillBar
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
              :color="category.color"
            />
          </div>
        </div>
      </div> -->

      <!-- Technologies icons -->
      <div
        class="tech-icons"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 800 } }"
      >
        <h3 class="tech-title">Technologies</h3>
        <div class="icons-grid">
          <div
            class="tech-icon glass"
            v-for="tech in technologies"
            :key="tech.name"
            :title="tech.name"
          >
            <Icon :name="tech.icon" size="40" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// const skillCategories = [
//   {
//     title: "Frontend",
//     icon: "heroicons:code-bracket",
//     color: "#6366f1",
//   },
//   {
//     title: "Backend",
//     icon: "heroicons:server",
//     color: "#8b5cf6",
//   },
//   {
//     title: "Outils & DevOps",
//     icon: "heroicons:wrench-screwdriver",
//     color: "#ec4899",
//   },
// ];

const technologies = [
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Java", icon: "logos:java" },
  { name: "C", icon: "logos:c" },
  { name: "PHP", icon: "logos:php" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Github", icon: "logos:github-icon" },
  { name: "MySql", icon: "logos:mysql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "ORACLE", icon: "logos:oracle" },
  { name: "OCAML", icon: "logos:ocaml" },
  { name: "vercel", icon: "logos:vercel" },
];
</script>

<style scoped>
.skills-section {
  position: relative;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: -3rem;
}

.skill-category {
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  color: var(--primary);
}

.category-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: -1.5rem;
}

.tech-icons {
  margin-top: 4rem;
}

.tech-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  aspect-ratio: 1;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-icon:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .icons-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
  }
}
</style>