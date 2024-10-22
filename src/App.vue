<script setup>
import { ref } from 'vue';

  const count = ref(0)
  const eventName = 'keyup'
</script>
<template>
  <p>{{ count }}</p>
  <input type="text" @[eventName]="count++">
</template>
