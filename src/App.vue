<template>
  <div class="app-container">
    <DefaultLayout />
  </div>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
