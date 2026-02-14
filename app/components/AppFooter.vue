<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="gradient-text">N | Y</h3>
          <p>
            Full Stack Developer passionate about creating exceptional web
            experiences. Discover my projects and skills in modern web
            development.
          </p>
        </div>

        <div class="footer-section">
          <h4>Navigation</h4>
          <div class="footer-links">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/#about">About</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>
        </div>

        <div class="footer-section">
          <h4>Social Media</h4>
          <div class="social-links">
            <a
              href="https://github.com/Yahia47"
              target="_blank"
              aria-label="GitHub"
            >
              <Icon name="bi:github" size="24" />
            </a>
            <a
              href="https://www.linkedin.com/in/merdjet-yahia-noureddine-510a94255/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Icon name="bi:linkedin" size="24" />
            </a>
            <a
              href="https://t.me/Nourdineyahia"
              target="_blank"
              class="social-link glass"
            >
              <Icon name="ri:telegram-fill" size="24" />
            </a>

            <a href="mailto:nourdineyahia77@gmail.com" aria-label="Email">
              <Icon name="bi:envelope" size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          Copyright &copy; {{ currentYear }}
          <strong
            ><a href="https://github.com/Yahia47"> Yahia Noureddine</a></strong
          >, All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.app-footer {
  background: var(--dark-light);
  padding: 4rem 0 2rem;
  margin-top: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  color: var(--gray-light);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--gray-light);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: var(--light);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--gray-light);
}

.footer-bottom p {
  margin: 0.5rem 0;
}

.footer-bottom strong {
  color: var(--primary);
}
.heart {
  color: var(--accent);
  animation: pulse 1.5s ease-in-out infinite;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>