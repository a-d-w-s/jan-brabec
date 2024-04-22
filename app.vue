<template>
  <NuxtPage page-key="product" :key="$route.path" />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'cs'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/public/favicon.ico'
    }
  ]
})
</script>

<style scoped></style>
