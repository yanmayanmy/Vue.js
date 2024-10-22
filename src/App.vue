<script setup>
import { ref, watch, watchEffect } from 'vue';
const count1 = ref(0)
const count2 = ref({
  a: 0,
  b: 0
})
const count3 = ref(0)

watch([count1, () => count2.value.a], (newVal, oldVal) => {
  console.log('watch')
  console.log('newVal', newVal)
  console.log('oldVal', oldVal)
  console.log(count1.value, count2.value, count3.value)
})

watchEffect(() => {
  console.log('watchEffect')
  console.log(count1.value, count2.value, count3.value)
})
</script>

<template>
  <p>count1 {{ count1 }}</p>
  <p>count2 {{ count2 }}</p>
  <p>count3 {{ count3 }}</p>
  <button @click="count1++">1</button>
  <button @click="count2.a++">2</button>
  <button @click="count3++">3</button>
</template>
