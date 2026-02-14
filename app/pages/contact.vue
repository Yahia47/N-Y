<template>
  <div class="contact-page">
    <AppHeader />

    <main>
      <section class="section contact-hero">
        <div class="container">
          <h1
            class="page-title"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            Let's work <span class="gradient-text">together</span>
          </h1>

          <p
            class="page-subtitle"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 200 } }"
          >
            Do you have a project in mind? Contact me and let's discuss it!
          </p>
        </div>
      </section>

      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Import manuel des composants
import ContactSection from "~/components/landing/ContactSection.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
useHead({
  title: "Contact - Portfolio",
  meta: [
    {
      name: "description",
      content: "Contactez-moi pour discuter de votre projet",
    },
  ],
});
</script>

<style scoped>
.contact-page main {
  padding-top: 80px;
}

.contact-hero {
  padding: 4rem 0 2rem;
  text-align: center;
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--gray-light);
  max-width: 600px;
  margin: 0 auto;
}
</style>