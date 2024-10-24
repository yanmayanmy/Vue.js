<script setup>
import BaseCard from './components/BaseCard.vue'
import OneSlot from './components/OneSlot.vue'
</script>

<template>
  <h1>slots</h1>
  <BaseCard>
    <template v-slot:header="slotProps">
      <p>slotProps: {{ slotProps }}</p>
      <p>pageCount: {{ slotProps.pageCount }}</p>
      <p>foo: {{ slotProps.foo }}</p>
      <h2>HTML</h2>
    </template>
    <template v-slot:main>
      <p>hello world</p>
    </template>
    <template #footer> </template>
  </BaseCard>
  <BaseCard>
    <template v-slot:header="{ pageCount }">
      <h2 v-if="pageCount === 1">HTML</h2>
      <h2 v-if="pageCount === 2">CSS</h2>
      <h2 v-if="pageCount === 3">PHP</h2>
    </template>
    <template v-slot:main>
      <p>hello world</p>
    </template>
    <template #footer> </template>
  </BaseCard>
  <!-- When you have only one slot in your children componet, you can simply add v-slot attribute in the tag -->
  <OneSlot v-slot="{ pageCount }">
    <h2 v-if="pageCount === 1">HTML</h2>
    <h2 v-if="pageCount === 2">CSS</h2>
    <h2 v-if="pageCount === 3">PHP</h2>
    <p>hello world</p>
  </OneSlot>
</template>
