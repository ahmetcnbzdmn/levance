<template>
  <div class="contact-page">
    <div class="container py-12">
      <div class="grid contact-grid">
        <!-- Left Section: Forms & Tabs -->
        <div class="contact-forms-area fade-in">
          <div class="contact-card">
            <h1 class="contact-title">Bize Ulaşın</h1>
            <p class="contact-subtitle">İhtiyacınıza uygun iletişim kanalını seçin, 24 saat içerisinde geri dönüş yapalım.</p>

            <Tabs value="0">
              <TabList>
                <Tab value="0">Destek</Tab>
                <Tab value="1">Partnerlik</Tab>
                <Tab value="2">Kurumsal</Tab>
              </TabList>
              <TabPanels>
                <!-- Ticket / Support Form -->
                <TabPanel value="0">
                  <div class="form-grid">
                    <div class="field">
                      <label for="email">E-posta Adresi</label>
                      <InputText id="email" v-model="ticket.email" placeholder="ornek@mail.com" class="w-full" />
                    </div>
                    <div class="field">
                      <label for="phone">Telefon Numarası</label>
                      <InputText id="phone" v-model="ticket.phone" placeholder="05xx xxx xx xx" class="w-full" />
                    </div>
                    <div class="field full-width">
                      <label for="message">Mesajınız</label>
                      <Textarea id="message" v-model="ticket.message" rows="5" placeholder="Size nasıl yardımcı olabiliriz?" class="w-full" />
                    </div>
                    <Button label="Gönder" class="p-button-primary premium-btn mt-4" @click="sendTicket" />
                  </div>
                </TabPanel>

                <!-- Partnership Tab -->
                <TabPanel value="1">
                  <div class="partnership-info">
                    <h3>İş Ortağımız Olun</h3>
                    <p>Levance olarak global ağımızı genişletiyoruz. Sinerji yaratabileceğimiz projeler için bizimle iletişime geçin.</p>
                    <div class="contact-details mt-6">
                      <div class="detail-item">
                        <i class="pi pi-envelope"></i>
                        <span>partner@levance.com</span>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <!-- Corporate Tab -->
                <TabPanel value="2">
                  <div class="corporate-info">
                    <h3>Kurumsal İletişim</h3>
                    <p>Basın bültenleri, kurumsal etkinlikler ve resmi yazışmalar için aşağıdaki kanalları kullanabilirsiniz.</p>
                    <div class="contact-details mt-6">
                      <div class="detail-item">
                        <i class="pi pi-envelope"></i>
                        <span>info@levance.com</span>
                      </div>
                      <div class="detail-item mt-4">
                        <i class="pi pi-phone"></i>
                        <span>+90 212 999 00 00</span>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>

        <!-- Right Section: Map -->
        <div class="map-area fade-in" style="animation-delay: 0.2s">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192634.873262283!2d28.809311682334882!3d41.0151608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e01f4ca156a!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div class="map-overlay">
              <div class="map-card">
                <i class="pi pi-map-marker"></i>
                <div>
                  <h4>Levance Headquarters</h4>
                  <p>Istanbul, Turkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const ticket = ref({
  email: '',
  phone: '',
  message: ''
})

const sendTicket = () => {
  console.log('Ticket sent:', ticket.value)
  // Logic for sending ticket
}
</script>

<style scoped>
.contact-page {
  padding-top: calc(var(--navbar-height) + 2rem);
  padding-bottom: 6rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: stretch;
}

.contact-card {
  background: white;
  padding: 4rem;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  height: 100%;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--deep-blue);
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  color: var(--text-muted);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding-top: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field label {
  font-weight: 600;
  color: var(--deep-blue);
  font-size: 0.9rem;
}

.full-width {
  grid-column: span 2;
}

.partnership-info, .corporate-info {
  padding-top: 2rem;
}

.partnership-info h3, .corporate-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--deep-blue);
  margin-bottom: 1.5rem;
}

.partnership-info p, .corporate-info p {
  color: var(--text-muted);
  line-height: 1.7;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-item i {
  color: var(--primary-blue);
  font-size: 1.2rem;
}

.detail-item span {
  color: var(--deep-blue);
  font-weight: 500;
}

.map-area {
  height: 100%;
  min-height: 500px;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

.map-overlay {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}

.map-card {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.map-card i {
  font-size: 2rem;
  color: var(--accent-green);
}

.map-card h4 {
  font-weight: 700;
  color: var(--deep-blue);
  margin: 0;
}

.map-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }

/* PrimeVue Tabs Overrides */
:deep(.p-tablist-tab-list) {
  background: transparent !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05) !important;
  display: flex !important;
  gap: 1rem !important;
}

:deep(.p-tab) {
  background: transparent !important;
  border: none !important;
  color: var(--text-muted) !important;
  font-weight: 600 !important;
  padding: 1rem 1.5rem !important;
  transition: all 0.3s ease !important;
  border-bottom: 2px solid transparent !important;
  margin-bottom: -2px !important;
}

:deep(.p-tab:hover) {
  color: var(--primary-blue) !important;
}

:deep(.p-tab-active) {
  color: var(--primary-blue) !important;
  border-bottom: 2px solid var(--primary-blue) !important;
}

:deep(.p-tabpanels) {
  background: transparent !important;
  padding: 0 !important;
}

@media (max-width: 1200px) {
  .contact-grid { grid-template-columns: 1fr; }
  .map-area { min-height: 400px; }
}

@media (max-width: 768px) {
  .contact-page { padding-top: calc(var(--navbar-height) + 1rem); }
  .contact-card { padding: 2.5rem 1.5rem; }
  .form-grid { grid-template-columns: 1fr; }
  .full-width { grid-column: span 1; }
  .contact-title { font-size: 2rem; }
}
</style>
