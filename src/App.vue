<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>

<template>
  <ShowCount :foo="count" bar="hello" />
  <!-- Or you can define the attributes all at once -->
  <ShowCount v-bind="{ foo: count, bar: 'hello' }" />
</template>
