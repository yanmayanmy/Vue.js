<script setup>
import { ref, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'

const currentComp = shallowRef(CompA)
const showModal = ref(false)
</script>

<template>
  <h1>Dynamic component</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <keep-alive include="CompB,CompC">
    <component :is="currentComp"></component>
  </keep-alive>

  <button @click="showModal = true">Modal</button>

  <Teleport to="body" :disabled="true">
    <dialog v-show="showModal" open>
      <p>This is a Modal!</p>
      <button @click="showModal = false">close</button>
    </dialog>
  </Teleport>
</template>
