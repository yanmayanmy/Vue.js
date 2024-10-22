<script setup>
import { ref } from 'vue';

  const count = ref(0)
  let x = ref(0)
  let y = ref(0)

  function countUp(event) {
    console.log(event)
    x.value = event.clientX
    y.value = event.clientY
  }

</script>
<template>
  <p>{{ count }}</p>
  <p>{{ x }}</p>
  <p>{{ y }}</p>
  <button v-on:click="count = $event.clientX">Count up</button>
  <button @click="countUp">Count up</button>
</template>
