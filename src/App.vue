<script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>

<template>
  <button @click="ok = !ok">toggle</button>
  <p>OK</p>
  <p v-show="ok">Hello</p>
  <p>Hi</p>
</template>

<style></style>
