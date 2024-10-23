<script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Grape' },
])
</script>

<template>
  <ul>
    <button @click="fruits.shift()">Delete</button>
    <li v-for="({ id, name }, index) in fruits" :key="id">
      <input type="text" />
      {{ index }}:
      {{ name }}
    </li>
  </ul>
</template>

<style></style>
