<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(1)
</script>

<template>
  <ShowCount :total-score="count" />
  <button @click="count++">+1</button>
</template>
