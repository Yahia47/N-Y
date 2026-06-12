<template>
  <div class="projects-page">
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <section class="projects-hero section">
        <div class="container">
          <h1 class="page-title">
            My <span class="gradient-text">Projects</span>
          </h1>

          <p class="page-subtitle">Discover my recent projects</p>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="section">
        <div class="container">
          <div class="projects-grid">
            <ProjectCard
              v-for="(project, index) in allProjects"
              :key="project.id"
              :project="project"
              :index="index"
            />
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Import manuel des composants
import ProjectCard from "~/components/ui/ProjectCard.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

import novaImg from "@/assets/images/nova.png";
import logoNovaImg from "@/assets/images/logoNova.webp";
import foodBakery from "@/assets/images/foodbakery.svg";
import gestionCmmande from "@/assets/images/gestioncommandes.jpeg";
import weather from "@/assets/images/weather.jpeg";
import medcare from "@/assets/images/medcare.jpg";
import movieApp from "@/assets/images/novieApp.jpeg";

useHead({
  title: "Projects - N | Y",
  meta: [
    {
      name: "description",
      content: "Discover all my web development projects",
    },
  ],
});

const allProjects = [
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
  {
    id: 4,
    title: "WeatherApp",
    description:
      "WeatherApp est une application web qui affiche les informations météorologiques pour différentes villes. Elle permet aux utilisateurs de consulter les conditions climatiques en temps réel.",
    image: weather,
    tags: ["Vue js", "Css", "Api weather", "tailwind css", "Weather app"],
    github: "https://github.com/Yahia47/weather-app-with-VUE.JS",
    demo: "https://weather-app-with-vue-js.vercel.app/",
    color: "#C1EBE9",
  },
  {
    id: 5,
    title: "MedCare",
    description:
      "A full-stack healthcare platform connecting patients and doctors in Algeria. Patients find & book verified doctors. Doctors manage appointments & profiles. Admins oversee everything.",
    image: medcare,
    tags: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Vite",
      "Medical",
      "Healthcare",
      "Blade",
    ],
    github: "https://github.com/HmMustapha/MedCare-Application-",
    color: "#39B1D1",
  },
  {
    id: 6,
    title: "MovieAPP",
    description:
      "MovieAPP is a modern and responsive web application that allows users to explore trending movies and TV shows using the TMDB API. The platform provides advanced search functionality, detailed movie information, trailers, ratings, and a smooth user experience with a clean and interactive interface. It is designed to help movie enthusiasts discover and enjoy the latest entertainment content بسهولة.",
    image: movieApp,
    tags: ["React", "JavaScript", "TMDB API", "Tailwind CSS", "Vite"],
    github: "https://github.com/Yahia47/Movie-APP",
    demo: "https://movie-app-yahia2.vercel.app/",
    color: "#443199",
  },
];
</script>

<style scoped>
.projects-page main {
  padding-top: 80px;
  min-height: 100vh;
}

.projects-hero {
  padding: 6rem 0 4rem;
  text-align: center;
  background: linear-gradient(180deg, var(--dark) 0%, var(--dark-light) 100%);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  color: var(--light);
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--gray-light);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .projects-hero {
    padding: 4rem 0 3rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}
</style>