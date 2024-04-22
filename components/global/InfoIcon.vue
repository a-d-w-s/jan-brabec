<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-help">
    <title>{{ props.title }}</title>
    <path d="M8 15H10M10 15H12M10 15V7M10 7H12M10 7H8M10 5V4M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#666666"/>
  </svg>
</template>

<script setup lang="ts">
interface Icon {
  title: string;
}

const props = defineProps<Icon>();
</script>
