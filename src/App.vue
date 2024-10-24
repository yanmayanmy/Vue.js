<script setup>
import { ref } from 'vue'
import BaseCard from './components/BaseCard.vue'

const y = ref('y')
</script>

<template>
  <h1>slots</h1>
  <BaseCard>
    <h2>hello</h2>
    <p>How are you?</p>
  </BaseCard>
  <BaseCard>
    <ul>
      <li>{{ y }}</li>
      <li>{{ x }}</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </BaseCard>
  <BaseCard> </BaseCard>
</template>
