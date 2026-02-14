<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
      >
        My <span class="gradient-text">Projects</span>
      </h2>

      <p
        class="section-subtitle"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 200 } }"
      >
        Discover my recent projects
      </p>

      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
      <div
        class="projects-cta"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 600 } }"
      >
        <NuxtLink to="/projects" class="btn btn-primary">
          View all projects
          <Icon name="heroicons:arrow-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "~/components/ui/ProjectCard.vue";
import novaImg from "@/assets/images/nova.png";
import logoNovaImg from "@/assets/images/logoNova.webp";
import foodBakery from "@/assets/images/foodbakery.svg";
import gestionCmmande from "@/assets/images/gestioncommandes.jpeg";
import weather from "@/assets/images/weather.jpeg";

const featuredProjects = [
  {
    id: 1,
    title: "NovaShop E-commerce Platform",
    description:
      "Nova Shop est une application web e-commerce moderne permettant la gestion d’un site de vente en ligne avec deux parties principales Espace Client : navigation, recherche, ajout au panier, commandes.Espace Admin : gestion des produits, des utilisateurs, et des commandes.",
    image: novaImg,
    tags: ["Laravel", "PHP", "Template", "Admin Dashboard", "Client Dashboard"],
    category: "E-commerce",
    github: "https://github.com/Yahia47/NovaShop",
    demo: "https://novashop-production.up.railway.app/",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Gestion Commandes",
    description:
      "Application de gestion des commandes collaborative avec temps réel, reposnisve et tableaux des pages.",
    image: gestionCmmande,
    tags: ["PHP", "AJAX", "HTML", "CSS", "JS", "Jquery", "Bootstrap"],
    github: "https://github.com/Yahia47/Gestion-Commandes",
    // demo: "#",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "FoodBakery",
    description:
      "Foodbakery is a modern web platform that acts as a digital directory for restaurants in Tiaret Province. This innovative solution is designed to meet users' needs by providing centralized and easy access to information about local dining options. Additionally, it enables restaurant owners to enhance their visibility and engage more effectively with their customers.",
    image: foodBakery,
    tags: ["Laravel", "PHP", "PostgreSQL", "Admin Dashboard", "resturant"],
    github: "https://github.com/Yahia47/foodbakery",
    demo: "https://foodbakery-production.up.railway.app/",
    color: "#ec4899",
  },
];
</script>

<style scoped>
.projects-section {
  background: var(--dark);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.projects-cta {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>