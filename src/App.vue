<script setup>
import { ref } from 'vue'
import { useRefLimitedHistory } from './composables/useRefLimitedHistory'

const count = ref(0)
const { history, undo } = useRefLimitedHistory(count, ref(5))
const userInput = ref('default')
const { history: history2, undo: undo2 } = useRefLimitedHistory(userInput, 3)
</script>

<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>count: {{ history }}</p>
  <button @click="undo()">undo</button>

  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>userInput: {{ history2 }}</p>
  <button @click="undo2()">undo</button>
</template>
