<script setup>
import CountUp from './components/CountUp.vue'
import BaseButton from './components/BaseButton.vue'
</script>
<template>
  <h1 class="blue">App</h1>
  <CountUp v-if="true" id="base-button" class="border" />
  <BaseIcon v-if="true" />
  <BaseButton v-show="true" id="base-button" />
</template>

<style>
.red {
  color: red;
}
</style>
