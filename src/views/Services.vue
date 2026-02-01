<template>
  <div class="services-page">
    <div class="container py-12">
      <div class="section-header text-center mb-12 fade-in">
        <h1 class="page-title">{{ $t('services_page.title') }}</h1>
        <p class="page-subtitle">{{ $t('services_page.subtitle') }}</p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-floating-card" :style="{ animationDelay: (index * 0.2) + 's' }">
          <div class="card-inner">
            <div class="icon-wrapper">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ $t(service.titleKey) }}</h3>
            <p class="service-desc">{{ $t(service.descKey) }}</p>
            <div class="card-footer">
              <Button :label="$t('services_page.cta_more')" class="p-button-text p-button-sm custom-btn" />
            </div>
          </div>
          <!-- Decorative Background Glow -->
          <div class="card-glow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'

const services = [
  {
    titleKey: 'services_page.list.web.title',
    descKey: 'services_page.list.web.desc',
    icon: 'pi pi-desktop'
  },
  {
    titleKey: 'services_page.list.branding.title',
    descKey: 'services_page.list.branding.desc',
    icon: 'pi pi-palette'
  },
  {
    titleKey: 'services_page.list.erp_crm.title',
    descKey: 'services_page.list.erp_crm.desc',
    icon: 'pi pi-database'
  },
  {
    titleKey: 'services_page.list.mobile.title',
    descKey: 'services_page.list.mobile.desc',
    icon: 'pi pi-mobile'
  },
  {
    titleKey: 'services_page.list.custom.title',
    descKey: 'services_page.list.custom.desc',
    icon: 'pi pi-lightbulb'
  }
]
</script>

<style scoped>
.services-page {
  padding-top: 4rem;
  padding-bottom: 6rem;
  background-color: #ffffff;
  min-height: calc(100vh - var(--navbar-height));
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--deep-blue);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
}

.service-floating-card {
  position: relative;
  z-index: 1;
  animation: floatUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(40px);
}

.card-inner {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 3rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.service-floating-card:hover .card-inner {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 40px rgba(45, 108, 223, 0.1);
  border-color: rgba(45, 108, 223, 0.2);
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(45, 108, 223, 0.05);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.service-floating-card:hover .icon-wrapper {
  background: var(--primary-blue);
}

.icon-wrapper i {
  font-size: 2rem;
  color: var(--primary-blue);
  transition: all 0.3s ease;
}

.service-floating-card:hover .icon-wrapper i {
  color: white;
}

.service-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--deep-blue);
  margin-bottom: 1.25rem;
  line-height: 1.3;
}

.service-desc {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  flex: 1;
}

.card-footer {
  margin-top: auto;
}

.custom-btn {
  color: var(--primary-blue);
  font-weight: 600;
  padding: 0;
}

.card-glow {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(45, 108, 223, 0.08) 0%, transparent 70%);
  z-index: -1;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-floating-card:hover .card-glow {
  opacity: 1;
}

@keyframes floatUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.mb-12 { margin-bottom: 3rem; }
.text-center { text-align: center; }

@media (max-width: 768px) {
  .page-title { font-size: 2.25rem; }
  .services-grid { gap: 1.5rem; }
}
</style>
