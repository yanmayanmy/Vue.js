<script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>

<template>
  <button @click="ok = !ok">toggle</button>
  <div v-if="ok">
    <p>OK</p>
    <p>Hello</p>
    <p>Hi</p>
  </div>
  <!-- recommended since template tag doesn't appear in html file -->
  <template v-if="ok">
    <p>OK</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
</template>

<style></style>
