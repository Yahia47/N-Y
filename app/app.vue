<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Curseur personnalisé -->
    <div class="custom-cursor" ref="cursor"></div>
    <div class="cursor-follower" ref="cursorFollower"></div>

    <!-- Particules d'arrière-plan -->
    <div class="particles-bg" ref="particlesBg">
      <div
        v-for="i in 50"
        :key="i"
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress">
      <div
        class="scroll-progress-bar"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>

    <!-- Bouton Scroll to Top -->
    <transition name="fade">
      <button
        v-if="showScrollTop"
        class="scroll-to-top glass"
        @click="scrollToTop"
        aria-label="Retour en haut"
      >
        <Icon name="heroicons:arrow-up" size="24" />
      </button>
    </transition>

    <!-- Bouton Mode Sombre/Clair -->
    <button
      class="theme-toggle glass"
      @click="toggleTheme"
      aria-label="Changer de thème"
    >
      <Icon v-if="isDarkMode" name="heroicons:sun" size="24" />
      <Icon v-else name="heroicons:moon" size="24" />
    </button>

    <!-- Page Content -->
    <NuxtPage />

    <!-- Loading Overlay -->
    <transition name="fade">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loader">
          <div class="loader-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Refs
const cursor = ref(null);
const cursorFollower = ref(null);
const particlesBg = ref(null);
const scrollProgress = ref(0);
const showScrollTop = ref(false);
const isDarkMode = ref(true);
const isLoading = ref(false);

// Curseur personnalisé
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

const moveCursor = () => {
  if (!cursor.value || !cursorFollower.value) return;

  const diffX = mouseX - cursorX;
  const diffY = mouseY - cursorY;

  cursorX += diffX * 0.3;
  cursorY += diffY * 0.3;

  const diffFollowerX = mouseX - followerX;
  const diffFollowerY = mouseY - followerY;

  followerX += diffFollowerX * 0.1;
  followerY += diffFollowerY * 0.1;

  cursor.value.style.left = cursorX + "px";
  cursor.value.style.top = cursorY + "px";

  cursorFollower.value.style.left = followerX + "px";
  cursorFollower.value.style.top = followerY + "px";

  requestAnimationFrame(moveCursor);
};

const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const handleMouseEnter = (e) => {
  if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
    cursor.value?.classList.add("cursor-hover");
    cursorFollower.value?.classList.add("cursor-hover");
  }
};

const handleMouseLeave = () => {
  cursor.value?.classList.remove("cursor-hover");
  cursorFollower.value?.classList.remove("cursor-hover");
};

// Scroll Progress
const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
  scrollProgress.value = Math.min(progress, 100);

  // Show/hide scroll to top button
  showScrollTop.value = scrollTop > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Theme Toggle
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  updateTheme();
};

const updateTheme = () => {
  const root = document.documentElement;
  if (isDarkMode.value) {
    root.style.setProperty("--dark", "#0f172a");
    root.style.setProperty("--dark-light", "#1e293b");
    root.style.setProperty("--light", "#f8fafc");
  } else {
    root.style.setProperty("--dark", "#f8fafc");
    root.style.setProperty("--dark-light", "#e2e8f0");
    root.style.setProperty("--light", "#0f172a");
  }
};

// Particules
const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 1;
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 20 + 10;
  const animationDelay = Math.random() * 5;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
  };
};

// Router loading
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

// Lifecycle
onMounted(() => {
  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
    updateTheme();
  }

  // Event listeners
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("mouseenter", handleMouseEnter, true);
  document.addEventListener("mouseleave", handleMouseLeave, true);

  // Start cursor animation
  requestAnimationFrame(moveCursor);

  // Initial scroll position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("mouseenter", handleMouseEnter, true);
  document.removeEventListener("mouseleave", handleMouseLeave, true);
});
</script>

<style>
/* Global Styles */
#app {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Custom Cursor */
.custom-cursor,
.cursor-follower {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.custom-cursor {
  width: 10px;
  height: 10px;
  background: var(--primary);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px var(--primary);
}

.cursor-follower {
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary);
  transform: translate(-50%, -50%);
  opacity: 0.5;
}

.custom-cursor.cursor-hover {
  transform: translate(-50%, -50%) scale(1.5);
}

.cursor-follower.cursor-hover {
  transform: translate(-50%, -50%) scale(1.5);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .custom-cursor,
  .cursor-follower {
    display: none;
  }
}

/* Particles Background */
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100px) translateX(100px);
    opacity: 0;
  }
}

/* Scroll Progress Bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 9998;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.1s ease;
  box-shadow: 0 0 10px var(--primary);
}

/* Scroll to Top Button */
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  color: var(--light);
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  background: var(--primary);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
}

/* Theme Toggle */
.theme-toggle {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  color: var(--light);
}

.theme-toggle:hover {
  transform: translateY(-50%) scale(1.1);
  background: var(--primary);
  box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.loader {
  text-align: center;
}

.loader-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader p {
  color: var(--gray-light);
  font-size: 1.1rem;
  font-weight: 500;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Dark Mode Transitions */
#app {
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app.dark-mode {
  background-color: var(--dark);
  color: var(--light);
}

/* Selection */
::selection {
  background: var(--primary);
  color: white;
}

::-moz-selection {
  background: var(--primary);
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-to-top,
  .theme-toggle {
    width: 45px;
    height: 45px;
  }

  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .theme-toggle {
    right: 1.5rem;
  }

  .particles-bg {
    display: none; /* Désactiver sur mobile pour de meilleures performances */
  }
}

/* Smooth scroll for all anchor links */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Link styles */
a {
  color: inherit;
  text-decoration: none;
}

/* Image optimization */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Prevent text selection on UI elements */
button,
.no-select {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>