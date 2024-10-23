<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(1)
</script>

<template>
  <ShowCount :tar="count" v-bind="{ bar: '100' }" />
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
