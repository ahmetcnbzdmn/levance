<template>
  <section class="hero fade-in">
    <div class="hero-bg-wrapper">
      <div class="hero-image"></div>
      <div class="hero-gradient-overlay"></div>
    </div>
    
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">İşinizi <span class="accent">Geleceğe</span> Taşıyoruz</h1>
        <p class="hero-subtitle">Kurumsal çözümlerle verimliliğinizi artırın, stratejik adımlarla fark yaratın.</p>
        <div class="hero-actions">
          <Button label="Hemen Başlayın" class="p-button-primary" />
          <Button label="Keşfedin" class="p-button-text white-text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--deep-blue);
}

.hero-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-image: url('../assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Gradient from Deep Blue on the left to Transparent on the right to show the image */
  background: linear-gradient(to right, 
    var(--deep-blue) 30%, 
    rgba(26, 63, 134, 0.8) 50%, 
    rgba(45, 108, 223, 0.2) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  color: white;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-title .accent {
  color: var(--accent-green);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.white-text {
  color: white !important;
}

@media (max-width: 992px) {
  .hero-image {
    width: 100%;
    opacity: 0.3;
  }
  .hero-gradient-overlay {
    background: linear-gradient(to bottom, 
      var(--deep-blue) 0%, 
      rgba(26, 63, 134, 0.7) 100%
    );
  }
}

@media (max-width: 768px) {
  .hero-content {
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
