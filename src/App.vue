<script setup>
// import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
// const count = ref(0)
</script>

<template>
  <ShowCount v-bind="{ foo: undefined, bar: 'hello' }" />
</template>
