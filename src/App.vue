<script setup>
import { ref } from 'vue';

  const count = ref(0)
  let x = ref(0)
  let y = ref(0)

  function countUp(event, times) {
    count.value = count.value*times
  }

</script>
<template>
  <p>{{ count }}</p>
  <p>{{ x }}</p>
  <p>{{ y }}</p>
  <button v-on:click="count++">Count up</button>
  <button @click="countUp($event, 5)">x5</button>
</template>
