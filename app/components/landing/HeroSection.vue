<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left Content -->
        <div class="hero-content">
          <div
            class="greeting"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <Icon name="heroicons:hand-raised" size="32" class="wave-icon" />
            <span>Hi, I am</span>
          </div>

          <h1
            class="hero-title"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 200, duration: 1000 },
            }"
          >
            <span class="name">Noureddine Yahia</span>
            <span class="gradient-text typing-effect">{{ typedText }}</span>
          </h1>

          <p
            class="hero-description"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
          >
            Full Stack Developer passionate about building high-performance web
            applications and immersive digital experiences. I combine
            creativity, clean code, and modern technologies to transform
            innovative ideas into elegant and efficient solutions.
          </p>

          <div
            class="hero-buttons"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 800, duration: 600 },
            }"
          >
            <NuxtLink to="/projects" class="btn btn-primary">
              <Icon name="heroicons:rocket-launch" size="20" />
              Look my projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">
              <Icon name="heroicons:envelope" size="20" />
              Me contacter
            </NuxtLink>
          </div>

          <div
            class="social-links"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
          >
            <a
              href="https://github.com/Yahia47"
              target="_blank"
              class="social-link"
              aria-label="GitHub"
            >
              <Icon name="bi:github" size="20" />
            </a>
            <a
              href="https://www.linkedin.com/in/merdjet-yahia-noureddine-510a94255/"
              target="_blank"
              class="social-link"
              aria-label="LinkedIn"
            >
              <Icon name="bi:linkedin" size="20" />
            </a>
            <a
              href="https://t.me/Nourdineyahia"
              target="_blank"
              class="social-link"
              aria-label="telegram"
            >
              <Icon name="bi:telegram" size="20" />
            </a>
            <a
              href="mailto:nourdineyahia77@gmail.com"
              class="social-link"
              aria-label="Email"
            >
              <Icon name="bi:envelope" size="20" />
            </a>
          </div>
        </div>

        <!-- Right Visual - NOUVEAU DESIGN SANS IMAGE -->
        <div
          class="hero-visual"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 400, duration: 1000 },
          }"
        >
          <div class="visual-wrapper">
            <!-- Grande lettre animée -->
            <div class="letter-container">
              <div class="letter-y gradient-text">N</div>
              <div class="letter-background"></div>
            </div>

            <!-- Éléments flottants -->
            <div class="floating-element element-1">
              <Icon name="heroicons:code-bracket" size="48" />
            </div>

            <div class="floating-element element-2">
              <Icon name="heroicons:sparkles" size="40" />
            </div>

            <div class="floating-element element-3">
              <Icon name="heroicons:rocket-launch" size="44" />
            </div>

            <div class="floating-element element-4">
              <Icon name="heroicons:light-bulb" size="36" />
            </div>

            <!-- Cercles décoratifs -->
            <div class="decorative-circle circle-1"></div>
            <div class="decorative-circle circle-2"></div>
            <div class="decorative-circle circle-3"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="scroll-indicator"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1200, duration: 600 } }"
      >
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <p>Scroll for discover</p>
      </div>
    </div>

    <!-- Decorative background elements -->
    <div class="hero-decoration">
      <div class="circle circle-1 floating"></div>
      <div class="circle circle-2 floating"></div>
      <div class="circle circle-3 floating"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Typing effect
const typedText = ref("");
const fullTexts = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Problem Solver",
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typeText = () => {
  const currentFullText = fullTexts[currentTextIndex];

  if (!isDeleting) {
    typedText.value = currentFullText.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentFullText.length) {
      isDeleting = true;
      typingSpeed = 50;
      setTimeout(typeText, 2000);
      return;
    }
  } else {
    typedText.value = currentFullText.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % fullTexts.length;
      typingSpeed = 100;
      setTimeout(typeText, 500);
      return;
    }
  }

  setTimeout(typeText, typingSpeed);
};

onMounted(() => {
  setTimeout(typeText, 1500);
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Left Content */
.hero-content {
  max-width: 650px;
}

.greeting {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: var(--gray-light);
}

.wave-icon {
  animation: wave 2s ease-in-out infinite;
  color: var(--primary);
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  40%,
  100% {
    transform: rotate(0deg);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  line-height: 1.1;
}

.hero-title .name {
  display: block;
  margin-bottom: 0.5rem;
}

.typing-effect {
  display: block;
  min-height: 1.2em;
}

.typing-effect::after {
  content: "|";
  animation: blink 1s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--gray-light);
  margin-bottom: 3rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--light);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}

/* Right Visual - NOUVEAU DESIGN */
.hero-visual {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-wrapper {
  position: relative;
  width: 500px;
  height: 500px;
}

/* Grande lettre centrale */
.letter-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.letter-y {
  font-size: 20rem;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  line-height: 1;
  animation: pulse-letter 3s ease-in-out infinite;
  text-shadow: 0 0 60px rgba(99, 102, 241, 0.5);
}

@keyframes pulse-letter {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

.letter-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.1;
  z-index: -1;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
}

/* Éléments flottants */
.floating-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: var(--primary);
  transition: all 0.3s ease;
}

.floating-element:hover {
  background: var(--primary);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
}

.element-1 {
  top: 5%;
  left: 10%;
  animation: float 4s ease-in-out infinite;
}

.element-2 {
  top: 15%;
  right: 5%;
  animation: float 4s ease-in-out infinite 1s;
}

.element-3 {
  bottom: 20%;
  left: 0%;
  animation: float 4s ease-in-out infinite 2s;
}

.element-4 {
  bottom: 5%;
  right: 15%;
  animation: float 4s ease-in-out infinite 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Cercles décoratifs */
.decorative-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(99, 102, 241, 0.2);
  animation: rotate-circle 20s linear infinite;
}

.circle-1 {
  width: 350px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-2 {
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 25s;
  animation-direction: reverse;
}

.circle-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(139, 92, 246, 0.2);
  animation-duration: 15s;
}

@keyframes rotate-circle {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--gray-light);
}

.scroll-mouse {
  width: 26px;
  height: 40px;
  border: 2px solid var(--gray-light);
  border-radius: 20px;
  margin: 0 auto 0.75rem;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: var(--primary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-down 2s ease-in-out infinite;
}

@keyframes scroll-down {
  0%,
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
}

/* Decorative background circles */
.hero-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
}

.hero-decoration .circle-1 {
  width: 500px;
  height: 500px;
  background: var(--primary);
  top: -10%;
  right: -10%;
  animation-delay: 0s;
}

.hero-decoration .circle-2 {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  bottom: -10%;
  left: -10%;
  animation-delay: 2s;
}

.hero-decoration .circle-3 {
  width: 300px;
  height: 300px;
  background: var(--accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

/* Responsive */
@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-visual {
    height: 400px;
  }

  .visual-wrapper {
    width: 400px;
    height: 400px;
  }

  .letter-y {
    font-size: 15rem;
  }

  .floating-element {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 640px) {
  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .hero-visual {
    height: 350px;
  }

  .visual-wrapper {
    width: 320px;
    height: 320px;
  }

  .letter-y {
    font-size: 12rem;
  }

  .floating-element {
    width: 50px;
    height: 50px;
  }

  .floating-element svg {
    width: 24px;
    height: 24px;
  }
}
</style>