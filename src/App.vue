<script setup>
import CountUp from './components/CountUp.vue'
import BaseButton from './components/BaseButton.vue'
</script>
<template>
  <h1>App</h1>
  <CountUp v-if="false" id="base-button" class="border" />
  <BaseIcon v-if="false" />
  <BaseButton v-show="false" id="base-button" />
</template>

<style></style>
