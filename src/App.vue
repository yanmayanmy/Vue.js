<script setup>
import { ref } from 'vue'
const fruits = ref(['Apple', 'Banana', 'Grape'])
</script>

<template>
  <ul>
    <li v-for="fruit in fruits">{{ fruit }}</li>
  </ul>
</template>

<style></style>
