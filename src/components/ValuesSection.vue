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

.image-mock {
  width: 100%;
  height: 400px;
  background-color: #f0f4ff;
  border-radius: 24px;
  position: relative;
}

.image-mock::after {
  content: '';
  position: absolute;
  top: 20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background-color: var(--accent-green);
  opacity: 0.2;
  border-radius: 50%;
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
