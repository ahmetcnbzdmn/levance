<template>
  <div class="home-view">
    <HeroSection />
    <SolutionsSplit />
    <ValuesSection />
    <ContactCTA />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SolutionsSplit from '../components/SolutionsSplit.vue'
import ValuesSection from '../components/ValuesSection.vue'
import ContactCTA from '../components/ContactCTA.vue'
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
}
</style>
