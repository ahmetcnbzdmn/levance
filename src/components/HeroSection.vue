<template>
  <section class="hero">
    <!-- Full-bleed Background Image with Blend -->
    <div class="hero-bg-container">
      <div class="hero-image-layer"></div>
      <div class="hero-overlay-layer"></div>
      <div class="hero-mesh-gradient"></div>
    </div>
    
    <div class="container hero-content-container">
      <!-- Glassmorphism Content Card -->
      <div class="hero-glass-card fade-up">
        <div class="hero-text-content">
          <div class="top-accent-bar"></div>
          <h1 class="hero-title">
            İşinizi <span class="accent-text">Geleceğe</span> <br/>
            Birlikte Taşıyoruz
          </h1>
          <p class="hero-subtitle">
            Kurumsal çözümlerle verimliliğinizi artırın, stratejik adımlarla dijital dünyada fark yaratın. 
            Levance ile dönüşüm başlasın.
          </p>
          <div class="hero-actions">
            <Button label="Hemen Başlayın" class="p-button-primary premium-btn" />
            <Button label="Hakkımızda" class="p-button-text white-link-btn" icon="pi pi-arrow-right" iconPos="right" />
          </div>
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
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--deep-blue);
}

.hero-bg-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image-layer {
  position: absolute;
  inset: 0;
  background-image: url('../assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.65) saturate(1.2);
}

.hero-overlay-layer {
  position: absolute;
  inset: 0;
  /* Complex gradient to blend text area and image area */
  background: linear-gradient(135deg, 
    rgba(26, 63, 134, 0.95) 0%, 
    rgba(26, 63, 134, 0.6) 40%, 
    rgba(45, 108, 223, 0.3) 100%
  );
}

.hero-mesh-gradient {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(circle, rgba(0, 201, 167, 0.15) 0%, transparent 70%);
  filter: blur(80px);
}

.hero-content-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
}

.hero-glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3.5rem;
  max-width: 700px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.top-accent-bar {
  width: 60px;
  height: 4px;
  background: var(--accent-green);
  border-radius: 2px;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.05;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.accent-text {
  color: var(--accent-green);
  position: relative;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 550px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.premium-btn {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(45, 108, 223, 0.3);
  transition: all 0.3s ease;
}

.premium-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(45, 108, 223, 0.4);
}

.white-link-btn {
  color: white !important;
  font-weight: 600;
  font-size: 1rem;
}

.fade-up {
  animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
  .hero-glass-card {
    max-width: 100%;
    padding: 2.5rem;
  }
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }
  .hero-glass-card {
    background: rgba(26, 63, 134, 0.6); /* Slightly more opaque for mobile */
    text-align: center;
    padding: 2rem 1.5rem;
  }
  .top-accent-bar {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
