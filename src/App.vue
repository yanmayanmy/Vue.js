<script setup>
import { ref, reactive } from 'vue'

const title = "Vue.js Course"
let price = ref(9.99)

const info = ref({
  students: 400,
  rating: 10
})

const instructor = reactive({
  name: 'Yuta',
  age: 25,
  sns: {
    insta: 'yanma_yanmy'
  },
  email: ref('yuta.yamauchi@accenture.com')
})

const items = reactive([ref(123), ref(234), ref(345)])
console.log(items[0])
console.log(items[0].value)

instructor.bio = 'hello' // Adding a property

console.log(info.value.students)
console.log(info.value.rating)
console.log(instructor.name)
console.log(instructor.age)
console.log(instructor.email) // You don't need .value when using ref() inside reactive

function increment() {
  price.value += 1
  instructor.bio = 'hi'
  instructor.sns.insta = 'hi'
  instructor.email = 'hi'
  console.log(price)
  console.log(price.value)
}
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: {{ price }}</h2>
<p>students:{{ info.students }}</p>
<p>rating:{{ info.rating }}</p>
<p>instructor name:{{ instructor.name }}</p>
<p>instructor age:{{ instructor.age }}</p>
<p>instructor bio:{{ instructor.bio }}</p>
<p>instructor sns:{{ instructor.sns.insta }}</p>
<p>instructor email:{{ instructor.email }}</p>
  <button @click="increment">button</button>
</template>

<style>
/* h1 {
  color: red;
} */
</style>
