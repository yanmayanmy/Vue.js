<script setup>
defineProps({
  foo: {
    type: [Number, String, Array, Boolean],
    default: function () {
      return [1, 2, 3]
    },
  },
  bar: String,
  gar: {
    type: Boolean,
  },
  tar: {
    type: Number,
    validator: function (val) {
      return val % 3 != 0
    },
  },
})
</script>

<template>
  <p>foo: {{ foo }}</p>
  <p>foo is undefined: {{ foo === undefined }}</p>
  <p>bar: {{ bar }}</p>
  <p>gar: {{ gar }}</p>
  <p>tar: {{ tar }}</p>
</template>
