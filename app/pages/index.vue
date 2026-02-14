<template>
  <div class="home-page">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Import composants
import HeroSection from "~/components/landing/HeroSection.vue";
import AboutSection from "~/components/landing/AboutSection.vue";
import SkillsSection from "~/components/landing/SkillsSection.vue";
import ProjectsSection from "~/components/landing/ProjectsSection.vue";
import ContactSection from "~/components/landing/ContactSection.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

useHead({
  title: "Home -  N | Y Portfolio",
  meta: [
    {
      name: "description",
      content: "Professional portfolio of a Full Stack developer N | Y",
    },
  ],
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

main {
  padding-top: 80px;
}
</style>