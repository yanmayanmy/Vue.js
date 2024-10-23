<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
import ResetButton from './components/ResetButton.vue'
const count = ref(1)
</script>

<template>
  <ShowCount :total-score="count" />
  <button @click="count++">+1</button>
  <ResetButton @reset="count = 0" />
</template>
