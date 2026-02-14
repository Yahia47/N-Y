<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
      >
        About <span class="gradient-text">me</span>
      </h2>

      <p
        class="section-subtitle"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 200 } }"
      >
        Master's Student in Software Engineering with a strong interest in full
        stack development, system architecture, and modern web technologies.
      </p>

      <div class="about-content">
        <div
          class="about-text"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          <div class="text-content glass">
            <h3>
              Hello, I'm a
              <span class="gradient-text">Full Stack Developer</span>
            </h3>

            <p>
              Passionate about web development for over 2 years, I build modern,
              high-performance, and elegant web applications. My expertise spans
              both frontend and backend development, with a strong focus on user
              experience. I enjoy transforming complex ideas into simple and
              intuitive solutions.
            </p>

            <p>
              My approach combines modern design, clean code, and best practices
              to deliver high-quality projects.
            </p>

            <!-- Link vers page contact -->
            <div class="about-buttons">
              <NuxtLink to="/contact" class="btn btn-primary">
                <Icon name="heroicons:envelope" size="20" />
                Contact me
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// const stats = [
//   { value: "5+", label: "Années d'expérience" },
//   { value: "50+", label: "Projets réalisés" },
//   { value: "30+", label: "Clients satisfaits" },
//   { value: "100%", label: "Engagement" },
// ];
</script>

<style scoped>
.about-section {
  background: linear-gradient(180deg, var(--dark) 0%, var(--dark-light) 100%);
}

.about-content {
  /* display: grid; */
  /* grid-template-columns: 1fr 1.5fr; */
  gap: 4rem;
  align-items: center;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  opacity: 0.7;
}

.text-content {
  padding: 2.5rem;
}

.text-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.text-content p {
  color: var(--gray-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2.5rem 0;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-item h4 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: var(--gray-light);
  font-size: 0.9rem;
  margin: 0;
}

.about-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  .text-content {
    padding: 1.5rem;
  }

  .text-content h3 {
    font-size: 1.5rem;
  }
  .about-buttons {
    flex-direction: column;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
}
</style>