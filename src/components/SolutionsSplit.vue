<template>
  <section class="solutions-split">
    <!-- Left Side: Web Solutions -->
    <div class="solution-half web-solutions">
      <div class="background-overlay"></div>
      <div class="content">
        <span class="top-label">Levance</span>
        <h2 class="title">Web Solutions</h2>
        <p class="description">
          Modern web teknolojileri ile dijital varlığınızı güçlendirin. 
          Kullanıcı deneyimi odaklı, hızlı ve ölçeklenebilir web uygulamaları.
        </p>
        <Button label="Web Çözümlerini Keşfedin" class="p-button-outlined p-button-white explore-btn" />
      </div>
    </div>

    <!-- Right Side: ERP Solutions -->
    <div class="solution-half erp-solutions">
      <div class="background-overlay"></div>
      <div class="content">
        <span class="top-label">Levance</span>
        <h2 class="title">ERP Solutions</h2>
        <p class="description">
          Kurumsal iş yüklerinizi optimize etmek için uçtan uca dijital dönüşüm. 
          Verimlilik artıran, güvenilir ve entegre ERP altyapıları.
        </p>
        <Button label="ERP Çözümlerini Keşfedin" class="p-button-outlined p-button-white explore-btn" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.solutions-split {
  display: flex;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
}

.solution-half {
  flex: 1;
  position: relative;
  padding: 5rem 10%;
  display: flex;
  align-items: center;
  color: white;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* Backgrounds & Textures */
.web-solutions {
  background: linear-gradient(135deg, var(--deep-blue) 0%, #2557b5 100%);
}

.erp-solutions {
  background: linear-gradient(135deg, #008f7a 0%, var(--accent-green) 100%);
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.15;
  pointer-events: none;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%);
}

.web-solutions .background-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L40 40 L10 70' stroke='white' fill='none' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

.erp-solutions .background-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='40' stroke='white' fill='none' stroke-width='1' opacity='0.2'/%3E%3C/svg%3E");
  background-size: 150px 150px;
}

/* Hover Effects */
.solution-half:hover {
  flex: 1.15;
}

.solution-half:hover .background-overlay {
  opacity: 0.25;
}

/* Content Styling */
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.top-label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

/* Button Overrides */
:deep(.p-button.p-button-outlined.p-button-white) {
  color: white;
  border-color: white;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.p-button.p-button-outlined.p-button-white:hover) {
  background: white;
  color: var(--deep-blue);
  border-color: white;
}

.erp-solutions :deep(.p-button.p-button-outlined.p-button-white:hover) {
  color: #008f7a;
}

@media (max-width: 992px) {
  .solutions-split {
    flex-direction: column;
  }
  .solution-half {
    padding: 4rem 1.5rem;
  }
  .solution-half:hover {
    flex: 1;
  }
  .title {
    font-size: 2.5rem;
  }
}
</style>
