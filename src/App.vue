<script setup>
  const vueURL = 'https://google.com'
  const vueIDd = 'link'

</script>
<template>
  <a v-bind="{ id: vueIDd, href: vueURL }">Jump to Google</a>
</template>
