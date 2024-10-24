<script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
const checked = ref('not checked')
const fruits = ref([])
</script>

<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
  <h2>Check box</h2>
  <input
    id="checkbox"
    v-model="checked"
    type="checkbox"
    true-value="checked"
    false-value="not checked"
  />
  <label for="checkbox">{{ checked }}</label>
  <p>Fruits</p>
  <input v-model="fruits" id="Apple" type="checkbox" value="Apple is checked" />
  <label for="Apple">Apple</label>
  <input
    v-model="fruits"
    id="Banana"
    type="checkbox"
    value="Banana is checked"
  />
  <label for="Banana">Banana</label>
  <input
    v-model="fruits"
    id="Grape"
    type="checkbox"
    value="Grapes is checked"
  />
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>
</template>
