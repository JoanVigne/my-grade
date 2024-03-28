<script setup lang="ts">
const count = ref(1) // ref is auto-imported
const msg  = ref('Hello');
</script>

<template>
<NuxtLayout>
  <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
