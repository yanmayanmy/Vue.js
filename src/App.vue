<script setup>
import { ref } from 'vue';

const message = ref("<h1>hello</h1>")
</script>
<template>
  <div>{{ message }}</div>
  <div v-html='message'></div>
</template>
