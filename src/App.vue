<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
import ResetButton from './components/ResetButton.vue'
const count1 = ref(1)
const count2 = ref(1)

function onReset(value) {
  count2.value = value
}
</script>

<template>
  <ShowCount :total-score="count1" />
  <button @click="count1++">+1</button>
  <ResetButton @reset="count1 = $event" />
  <ShowCount :total-score="count2" />
  <button @click="count2++">+1</button>
  <ResetButton @reset="onReset" />
</template>
