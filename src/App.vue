<script setup>
import BaseCard from './components/BaseCard.vue'
</script>

<template>
  <h1>slots</h1>
  <BaseCard>
    <template v-slot:header>
      <h2>Vue.js</h2>
    </template>
    <template v-slot:main>
      <p>hello world</p>
    </template>
    <template #footer>
      <p>yuta yamauchi</p>
    </template>
  </BaseCard>
  <!-- You can still use fall back contents -->
  <BaseCard>
    <template v-slot:header>
      <h2>HTML</h2>
    </template>
    <template v-slot:main>
      <p>hello world</p>
    </template>
    <template #footer> </template>
  </BaseCard>
</template>
