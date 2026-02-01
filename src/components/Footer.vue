<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-text">LEVANCE</span>
          <p>{{ $t('footer.description') }}</p>
        </div>
        <div class="footer-links">
          <h4>{{ $t('footer.quick_links') }}</h4>
          <ul>
            <li><router-link to="/hizmetlerimiz">{{ $t('nav.services') }}</router-link></li>
            <li><router-link to="/hakkimizda">{{ $t('nav.about') }}</router-link></li>
            <li><router-link to="/bize-ulasin">{{ $t('nav.contact') }}</router-link></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>{{ $t('nav.contact') }}</h4>
          <p>info@levance.com</p>
          <p>İstanbul, Türkiye</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Levance. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f9fafb;
  padding: 4rem 0 2rem;
  border-top: 1px solid #eee;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--deep-blue);
  margin-bottom: 1rem;
  display: block;
}

.footer-brand p {
  color: var(--text-muted);
  max-width: 300px;
}

h4 {
  color: var(--deep-blue);
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 0.75rem;
}

ul li a {
  text-decoration: none;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

ul li a:hover {
  color: var(--primary-blue);
}

.footer-contact p {
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
