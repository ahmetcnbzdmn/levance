<template>
  <section class="services">
    <div class="container">
      <div class="section-header">
        <h2>{{ $t('services_page.title') }}</h2>
        <p>{{ $t('services_page.subtitle') }}</p>
      </div>
      <div class="services-grid">
        <Card v-for="service in services" :key="service.titleKey" class="service-card">
          <template #title>
            <i :class="service.icon" class="service-icon"></i>
            <h3>{{ $t(service.titleKey) }}</h3>
          </template>
          <template #content>
            <p>{{ $t(service.descKey) }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'

const services = [
  { titleKey: 'services_page.list.branding.title', descKey: 'services_page.list.branding.desc', icon: 'pi pi-palette' },
  { titleKey: 'services_page.list.web.title', descKey: 'services_page.list.web.desc', icon: 'pi pi-desktop' },
  { titleKey: 'services_page.list.erp_crm.title', descKey: 'services_page.list.erp_crm.desc', icon: 'pi pi-database' }
]
</script>

<style scoped>
.services {
  padding: 5rem 0;
  background-color: #fbfbfb;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--deep-blue);
  margin-bottom: 1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  padding: 1rem;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 2rem;
  color: var(--accent-green);
  margin-bottom: 1.5rem;
}

h3 {
  margin-top: 1rem;
  color: var(--deep-blue);
}

p {
  color: var(--text-muted);
}
</style>
