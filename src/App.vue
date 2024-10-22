<script setup>
import { ref } from 'vue';
  const userInput = ref('')
</script>

<template>
  <p>{{ userInput }}</p>
  <input type="text" v-model="userInput">
  <button @click="userInput = 'hi'">Button</button>
</template>
