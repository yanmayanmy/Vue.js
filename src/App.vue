<script setup>
import { ref, computed } from 'vue';
  const score = ref(0)
  const evaluate = computed(() => {
    return score.value > 3 ? 'Good' : 'Bad'
  })
console.log(evaluate.value)
</script>

<template>
  <p>{{ score }}</p>
  <p>{{ evaluate }}</p>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <button @click="score++">Button</button>
</template>
