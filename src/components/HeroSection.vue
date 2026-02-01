```html
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
            {{ $t('hero.title1') }} <span class="accent-text">{{ $t('hero.title2') }}</span>
          </h1>
          <p class="hero-subtitle">
            {{ $t('hero.description') }}
          </p>
          <div class="hero-actions">
            <Button :label="$t('hero.cta')" class="p-button-primary premium-btn" />
            <Button :label="$t('nav.about')" class="p-button-text white-link-btn" icon="pi pi-arrow-right" iconPos="right" />
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
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #0A1934;
}

.hero-bg-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image-layer {
  position: absolute;
  inset: 0;
  background-image: url('../assets/images/hero-digital-solutions.png');
  background-size: cover;
  background-position: center;
  filter: brightness(0.6) contrast(1.1);
}

.hero-overlay-layer {
  position: absolute;
  inset: 0;
  /* Ultra-premium dark vignette and side-fade */
  background: 
    radial-gradient(circle at 30% 50%, transparent 20%, rgba(10, 25, 52, 0.4) 100%),
    linear-gradient(90deg, #0A1934 0%, rgba(10, 25, 52, 0.8) 30%, transparent 100%);
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
  margin-left: 2rem; /* Decisive left alignment within the container */
}

.hero-glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 4.5rem;
  max-width: 750px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);
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
