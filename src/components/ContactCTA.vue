<template>
  <section class="contact-cta">
    <div class="container cta-box">
      <div class="cta-content">
        <h2>Hemen bir toplantı planlayalım</h2>
        <p>İhtiyaçlarınızı dinlemek ve size en uygun çözümü sunmak için sabırsızlanıyoruz.</p>
        <Button label="Bize Ulaşın" class="cta-btn p-button-success" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.contact-cta {
  padding: 4rem 0 8rem;
}

.cta-box {
  background: var(--deep-blue);
  border-radius: 32px;
  padding: 4rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 300px;
  height: 300px;
  background: var(--primary-blue);
  opacity: 0.1;
  border-radius: 50%;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  background-color: var(--accent-green);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background-color: #00b395;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 201, 167, 0.3);
}
</style>
