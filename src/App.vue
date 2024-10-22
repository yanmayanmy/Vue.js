<script setup>
import { ref } from 'vue'

const title = "Vue.js Course"
let price = ref(9.99)
const info = ref({
  students: 400,
  rating: 10
})

console.log(info.value.students)
console.log(info.value.rating)

function increment() {
  price.value += 1
  console.log(price)
  console.log(price.value)
}
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: {{ price }}</h2>
<p>students:{{ info.students }}</p>
<p>rating:{{ info.rating }}</p>
  <button @click="increment">button</button>
</template>

<style>
/* h1 {
  color: red;
} */
</style>
