<script setup>
import { ref } from 'vue';

const message = ref("<h1>hello</h1>")
const googleURL = ref('https://google.com')
</script>
<template>
  <div>{{ message }}</div>
  <a :href="googleURL">Google</a>
  <div v-html='message'></div>
</template>
