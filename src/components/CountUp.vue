<script setup>
import { ref } from 'vue'

console.log('countup')
const count = ref(0)
</script>
<template>
  <h2>CountUp</h2>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
</template>
