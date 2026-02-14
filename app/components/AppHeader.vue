<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="navbar">
        <NuxtLink to="/" class="logo">
          <span class="gradient-text">N | Y</span>
        </NuxtLink>

        <!-- Mobile Menu -->
        <div class="nav-links" :class="{ active: mobileMenuOpen }">
          <NuxtLink to="/" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/#about" @click="closeMobileMenu">About</NuxtLink>
          <NuxtLink to="/#skills" @click="closeMobileMenu">Skills</NuxtLink>
          <NuxtLink to="/projects" @click="closeMobileMenu">Projects</NuxtLink>
          <NuxtLink to="/contact" @click="closeMobileMenu">Contact</NuxtLink>
        </div>

        <button
          class="mobile-toggle"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <Icon
            :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
            size="28"
          />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
}

.app-header.scrolled {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--primary);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--light);
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--dark-light);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
  }
}
</style>