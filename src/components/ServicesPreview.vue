<template>
  <section class="services">
    <div class="container">
      <div class="section-header">
        <h2>Hizmetlerimiz</h2>
        <p>Size özel sunduğumuz kurumsal çözümler</p>
      </div>
      <div class="services-grid">
        <Card v-for="service in services" :key="service.title" class="service-card">
          <template #title>
            <i :class="service.icon" class="service-icon"></i>
            <h3>{{ service.title }}</h3>
          </template>
          <template #content>
            <p>{{ service.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'

const services = [
  { title: 'Strateji', description: 'İş hedeflerinize ulaşmak için yol haritası.', icon: 'pi pi-compass' },
  { title: 'Danışmanlık', description: 'Uzman görüşleri ile süreç iyileştirme.', icon: 'pi pi-users' },
  { title: 'Teknoloji', description: 'Modern altyapı ve dijital dönüşüm.', icon: 'pi pi-desktop' }
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
