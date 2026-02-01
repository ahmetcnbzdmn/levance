<template>
  <nav class="navbar">
    <div class="container nav-content">
      <!-- Left: Logo -->
      <div class="nav-left">
        <div class="logo">
           <span class="logo-text">LEVANCE</span>
        </div>
      </div>

      <!-- Center: Links -->
      <ul class="nav-center">
        <li><router-link to="/hizmetlerimiz" class="nav-link">Hizmetlerimiz</router-link></li>
        <li><router-link to="/hakkimizda" class="nav-link">Hakkımızda</router-link></li>
        <li><router-link to="/" class="nav-link">Bize Ulaşın</router-link></li>
      </ul>

      <!-- Right: Action Button -->
      <div class="nav-right">
        <Button label="Toplantı Talep Edin" class="p-button-primary meeting-btn" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.navbar {
  height: var(--navbar-height);
  background: var(--bg-white);
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-left .logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--deep-blue);
  letter-spacing: -1px;
}

.nav-center {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-blue);
}

.meeting-btn {
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: var(--primary-blue);
  border: none;
  transition: all 0.3s ease;
}

.meeting-btn:hover {
  background-color: var(--deep-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(45, 108, 223, 0.2);
}

@media (max-width: 768px) {
  .nav-center {
    display: none; /* Mobile menu logic can be added later */
  }
}
</style>
