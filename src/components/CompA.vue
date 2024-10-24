<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <h2>component A</h2>
    <p>count: {{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style>
