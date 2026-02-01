<template>
  <section class="values">
    <div class="container values-grid">
      <div class="values-image">
        <div class="image-mock"></div>
      </div>
      <div class="values-text">
        <h2>Değerlerimiz</h2>
        <div class="value-item">
          <i class="pi pi-check-circle"></i>
          <div>
            <h4>Şeffaflık</h4>
            <p>Tüm süreçlerimizde açık ve dürüst iletişim.</p>
          </div>
        </div>
        <div class="value-item">
          <i class="pi pi-check-circle"></i>
          <div>
            <h4>Yenilikçi</h4>
            <p>Sürekli değişen dünyada en güncel çözümler.</p>
          </div>
        </div>
        <div class="value-item">
          <i class="pi pi-check-circle"></i>
          <div>
            <h4>Müşteri Odaklı</h4>
            <p>Sizin başarınız bizim önceliğimizdir.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values {
  padding: 6rem 0;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.image-container {
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.15);
}

.values-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.image-container:hover .values-img {
  transform: scale(1.05);
}

.image-accent {
  position: absolute;
  top: 20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background-color: var(--accent-green);
  opacity: 0.3;
  border-radius: 50%;
  z-index: 2;
}

h2 {
  font-size: 2.5rem;
  color: var(--deep-blue);
  margin-bottom: 2.5rem;
}

.value-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.value-item i {
  font-size: 1.5rem;
  color: var(--primary-blue);
  margin-top: 0.25rem;
}

h4 {
  font-size: 1.1rem;
  color: var(--deep-blue);
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
