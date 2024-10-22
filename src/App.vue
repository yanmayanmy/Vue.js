<script setup>

</script>
<template>
  <button :disabled="false">false</button>
  <br>
  <button :disabled="true">true</button>
  <br>
  <button :disabled="undefined">true</button>
  <br>
  <button :disabled="NaN">true</button>
  <br>
  <button :disabled="foo">true</button>
  <br>
  <button :disabled="''">true</button>
</template>
