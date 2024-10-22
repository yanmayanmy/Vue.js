<script setup>
import { ref } from 'vue';

  const count = ref(0)

  function countUp() {
    count.value++
  }

</script>
<template>
  <p>{{ count }}</p>
  <button v-on:click="count++">Count up</button>
  <button @click="countUp">Count up</button>
</template>
