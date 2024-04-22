<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-5 text-h1">404 - Stránka nenalezena</h1>
    <button class="m-2 bg-black p-2 font-bold text-white button" @click="$router.go(-1)">Zpět</button>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: '404 - Stránka nenalezena',
    meta: [
      { name: 'description', content: 'Stránka nenalezena' }
    ],
  });
</script>

<style scoped></style>
