<script setup>
import HeaderVue from './components/HeaderVue.vue';
</script>

<template>
  <div id="app">
    <HeaderVue/>
    
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

