<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container navbar-container">
      <!-- Left: Logo -->
      <div class="nav-left">
        <router-link to="/" class="logo">
          <span class="logo-text">LEVANCE</span>
          <div class="logo-dot"></div>
        </router-link>
      </div>

      <!-- Center: Links -->
      <ul class="nav-center">
        <li><router-link to="/hizmetlerimiz" class="nav-link">Hizmetlerimiz</router-link></li>
        <li><router-link to="/hakkimizda" class="nav-link">Hakkımızda</router-link></li>
        <li><router-link to="/bize-ulasin" class="nav-link">Bize Ulaşın</router-link></li>
      </ul>

      <!-- Right: Action Button -->
      <div class="nav-right">
        <Button 
          label="Toplantı Talep Edin" 
          class="p-button-outlined premium-nav-btn" 
          @click="showMeetingModal = true"
        />
      </div>
    </div>

    <!-- Meeting Request Modal -->
    <Dialog 
      v-model:visible="showMeetingModal" 
      modal 
      header="Toplantı Talep Edin" 
      :style="{ width: '30rem' }"
      class="premium-dialog"
    >
      <div class="meeting-form">
        <p class="modal-subtitle">Bilgilerinizi bırakın, size en uygun zamanda dönüş yapalım.</p>
        
        <div class="field mt-6">
          <label for="name">Ad Soyad</label>
          <InputText id="name" v-model="form.name" class="w-full" placeholder="Adınız Soyadınız" />
        </div>
        
        <div class="field mt-4">
          <label for="company">Firma Adı</label>
          <InputText id="company" v-model="form.company" class="w-full" placeholder="Şirketiniz" />
        </div>

        <div class="field mt-4">
          <label for="email">E-posta</label>
          <InputText id="email" v-model="form.email" class="w-full" placeholder="kurumsal@mail.com" />
        </div>

        <div class="field mt-4">
          <label for="phone">Telefon</label>
          <InputText id="phone" v-model="form.phone" class="w-full" placeholder="05xx xxx xx xx" />
        </div>

        <div class="field mt-6">
          <Button label="Talep Gönder" class="w-full premium-btn" @click="submitMeeting" />
        </div>
      </div>
    </Dialog>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'

const scrolled = ref(false)
const showMeetingModal = ref(false)

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: ''
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const submitMeeting = () => {
  console.log('Meeting request:', form.value)
  showMeetingModal.value = false
  // Reset form
  form.value = { name: '', company: '', email: '', phone: '' }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--deep-blue);
}

.logo-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-green);
  border-radius: 50%;
  margin-top: 4px;
}

.nav-center {
  display: flex;
  gap: 3rem; /* Increased gap */
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: var(--deep-blue);
  font-weight: 600;
  font-size: 1.1rem; /* Increased size */
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-blue);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--primary-blue);
}

.premium-nav-btn {
  border-radius: 30px;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  transition: all 0.3s ease;
}

.premium-nav-btn:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(45, 108, 223, 0.2);
}

/* Modal Styling */
.modal-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--deep-blue);
}

.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }

@media (max-width: 992px) {
  .nav-center { display: none; }
}
</style>
