<script setup>
import { ref } from 'vue';

const isRed = ref(true)
const isBgBlue = ref(true)
const className = ref('red')
function toggleClass() {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}

</script>

<template>
  <div class="border" :class="[className, {'bg-blue': isBgBlue}]">Hello World</div>
  <button @click="toggleClass">Change Style</button>
</template>

<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style>

