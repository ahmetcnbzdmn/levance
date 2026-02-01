<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="mesh-gradient"></div>
      <div class="container relative z-10">
        <h1 class="about-title fade-up">Biz Kimiz?</h1>
        <p class="about-subtitle fade-up" style="animation-delay: 0.1s">
          Levance, dijital dönüşüm yolculuğunuzda stratejik ortağınız olmak için burada.
        </p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="story-section container">
      <div class="story-content">
        <div class="story-text fade-in">
          <span class="label">Hikayemiz</span>
          <h2 class="section-title">Profesyonellikte <span class="accent-text">Mükemmellik</span></h2>
          <p>
            Levance, modern iş dünyasının karmaşık zorluklarına yenilikçi ve sürdürülebilir çözümler üretmek amacıyla kuruldu. 
            Teknoloji ve stratejiyi bir araya getirerek, iş ortaklarımızın potansiyellerini en üst seviyeye çıkarmayı hedefliyoruz.
          </p>
          <p>
            ERP sistemlerinden özel yazılım geliştirmeye, marka kimliği tasarımından stratejik danışmanlığa kadar geniş bir yelpazede 
            hizmet sunarak kurumların dijital ayak izini güçlendiriyoruz.
          </p>
        </div>
        <div class="story-image fade-in" style="animation-delay: 0.2s">
          <div class="image-frame">
            <div class="image-overlay"></div>
            <!-- Using the hero image as a placeholder for about as well -->
            <img src="../assets/images/hero-bg.jpg" alt="Levance Office" />
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission-section">
      <div class="container grid-2">
        <div class="vm-card fade-up">
          <div class="icon-box blue"><i class="pi pi-eye"></i></div>
          <h3>Vizyonumuz</h3>
          <p>Global ölçekte dijital dönüşümün öncüsü olarak, iş dünyasını geleceğin teknolojileriyle şekillendiren en güvenilir çözüm ortağı olmak.</p>
        </div>
        <div class="vm-card fade-up" style="animation-delay: 0.2s">
          <div class="icon-box green"><i class="pi pi-compass"></i></div>
          <h3>Misyonumuz</h3>
          <p>Müşterilerimize özel, yenilikçi ve verimlilik odaklı dijital çözümler sunarak rekabet avantajı sağlamak ve sürdürülebilir büyüme yolunda onlara rehberlik etmek.</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section container">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item fade-in" :style="{ animationDelay: (index * 0.15) + 's' }">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '10+', label: 'Alanında Profesyonel Ekip Arkadaşı' },
  { value: '35+', label: 'Tamamlanan Proje' },
  { value: '8+', label: 'Yayımlanmış Proje' },
  { value: '7/24', label: 'Teknik Destek' }
]
</script>

<style scoped>
.about-page {
  background-color: #ffffff;
}

.about-hero {
  position: relative;
  background-color: var(--deep-blue);
  padding: 8rem 0;
  overflow: hidden;
}

.mesh-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(at 0% 0%, rgba(45, 108, 223, 0.4) 0, transparent 50%),
    radial-gradient(at 100% 100%, rgba(0, 201, 167, 0.2) 0, transparent 50%);
  opacity: 0.6;
}

.about-title {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
}

.about-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
}

.story-section {
  padding: 8rem 0;
}

.story-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  align-items: center;
}

.label {
  display: block;
  color: var(--primary-blue);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--deep-blue);
  font-weight: 800;
  margin-bottom: 2rem;
}

.accent-text {
  color: var(--accent-green);
}

.story-text p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.image-frame {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.image-frame:hover img {
  transform: scale(1.05);
}

.vision-mission-section {
  background-color: #f9fafb;
  padding: 8rem 0;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.vm-card {
  background: white;
  padding: 4rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  transition: transform 0.4s ease;
}

.vm-card:hover {
  transform: translateY(-10px);
}

.icon-box {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.icon-box i {
  font-size: 2.5rem;
}

.icon-box.blue { background: rgba(45, 108, 223, 0.1); color: var(--primary-blue); }
.icon-box.green { background: rgba(0, 201, 167, 0.1); color: var(--accent-green); }

.vm-card h3 {
  font-size: 1.75rem;
  color: var(--deep-blue);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.vm-card p {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 1.1rem;
}

.stats-section {
  padding: 6rem 0 10rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  background: var(--deep-blue);
  padding: 4rem;
  border-radius: 30px;
  text-align: center;
  color: white;
  box-shadow: 0 30px 60px rgba(26, 63, 134, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--accent-green);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}

@media (max-width: 992px) {
  .story-content { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
  .grid-2 { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 3rem; }
  .about-title { font-size: 3rem; }
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
