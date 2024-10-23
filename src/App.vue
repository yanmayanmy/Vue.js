<script setup>
import { ref } from 'vue'
const user = ref({
  name: 'Yuta',
  age: 25,
  gender: 'male',
})
</script>

<template>
  <p v-for="(value, key, index) in user" :key="value">
    {{ value }}
  </p>
</template>

<style></style>
