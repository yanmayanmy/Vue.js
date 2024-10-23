<script setup>
defineProps({
  foo: {
    Type: Number,
    default: 100,
  },
  bar: String,
})
</script>

<template>
  <p>bar: {{ foo }}</p>
  <p>foo is undefined: {{ foo === undefined }}</p>
  <p>bar: {{ bar }}</p>
</template>
