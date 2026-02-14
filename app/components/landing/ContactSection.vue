<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
      >
        Contact <span class="gradient-text">me</span>
      </h2>

      <p
        class="section-subtitle"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 200 } }"
      >
        Let's discuss your next project
      </p>

      <div class="contact-content">
        <div
          class="contact-info"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="info-card glass">
            <h3>Contact Information</h3>
            <p>
              Don't hesitate to contact me for any question or collaboration.
            </p>

            <div class="contact-items">
              <div class="contact-item">
                <div class="icon-wrapper gradient-bg">
                  <Icon name="heroicons:envelope" size="24" />
                </div>
                <div class="item-content">
                  <h4>Email</h4>
                  <a href="mailto:votre@email.com">nourdineyahia77@gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-wrapper gradient-bg">
                  <Icon name="heroicons:phone" size="24" />
                </div>
                <div class="item-content">
                  <h4>Téléphone</h4>
                  <a href="tel:+213123456789">+213 793-139-872</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-wrapper gradient-bg">
                  <Icon name="heroicons:map-pin" size="24" />
                </div>
                <div class="item-content">
                  <h4>Localisation</h4>
                  <p>Tiaret, Algérie</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a
                href="https://github.com/Yahia47"
                target="_blank"
                class="social-link glass"
              >
                <Icon name="bi:github" size="24" />
              </a>
              <a
                href="https://www.linkedin.com/in/merdjet-yahia-noureddine-510a94255/"
                target="_blank"
                class="social-link glass"
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
              <a
                href="https://www.instagram.com/noureddine_m_y/"
                target="_blank"
                class="social-link glass"
              >
                <Icon name="bi:instagram" size="24" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="contact-form-wrapper"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          <form @submit.prevent="handleSubmit" class="contact-form glass">
            <div class="form-group">
              <label for="name">Full name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Your full name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="The subject of your message"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
            >
              <Icon
                v-if="!isSubmitting"
                name="heroicons:paper-airplane"
                size="20"
              />
              <Icon v-else name="svg-spinners:ring-resize" size="20" />
              {{ isSubmitting ? "Sending..." : "Send message" }}
            </button>

            <p
              v-if="submitMessage"
              class="submit-message"
              :class="submitStatus"
            >
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitStatus = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    // Simuler l'envoi (remplacer par votre logique d'envoi réelle)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    submitMessage.value =
      "Message envoyé avec succès ! Je vous répondrai bientôt.";
    submitStatus.value = "success";

    // Réinitialiser le formulaire
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    submitMessage.value = "Erreur lors de l'envoi. Veuillez réessayer.";
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;

    // Effacer le message après 5 secondes
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }
};
</script>

<style scoped>
.contact-section {
  background: linear-gradient(180deg, var(--dark-light) 0%, var(--dark) 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

.info-card {
  padding: 2.5rem;
  height: fit-content;
}

.info-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.info-card > p {
  color: var(--gray-light);
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.item-content h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--light);
}

.item-content p,
.item-content a {
  color: var(--gray-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.item-content a:hover {
  color: var(--primary);
}

.social-links {
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: var(--light);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}

.contact-form {
  padding: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: var(--light);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--light);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--gray);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.contact-form button {
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--error);
  color: var(--error);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .info-card,
  .contact-form {
    padding: 1.5rem;
  }
}
</style>