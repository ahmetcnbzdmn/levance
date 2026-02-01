<template>
  <section class="hero fade-in">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">İşinizi <span class="accent">Geleceğe</span> Taşıyoruz</h1>
        <p class="hero-subtitle">Kurumsal çözümlerle verimliliğinizi artırın, stratejik adımlarla fark yaratın.</p>
        <div class="hero-actions">
          <Button label="Hemen Başlayın" class="p-button-primary" />
          <Button label="Keşfedin" class="p-button-text" />
        </div>
      </div>
      <div class="hero-visual">
         <!-- Visual placeholder -->
         <div class="visual-blob"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.hero {
  padding: 6rem 0;
  background: white;
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 800;
  color: var(--deep-blue);
  margin-bottom: 1.5rem;
}

.hero-title .accent {
  color: var(--accent-green);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-visual {
  flex: 1;
  position: relative;
}

.visual-blob {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-green));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(40px);
  opacity: 0.1;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-actions {
    justify-content: center;
  }
}
</style>
