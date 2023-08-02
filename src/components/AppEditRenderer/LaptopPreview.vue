<template>
  <div class="layout-runner">
    <AppLaptopPreview />
  </div>
</template>

<script setup lang="ts">
import AppLaptopPreview from '@/components/AppPreviewer/LaptopPreviewer.vue'
</script>

<style scoped>
.layout-runner {
  display: flex;
  overflow: hidden;
  margin: 8px 40px;
  border-radius: 8px;
  color: var(--color-gray-700);
  background-color: var(--color-white);
  box-shadow: 0 0 1px rgb(62 65 86 / 37.5%), 0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
  flex: 1;
  gap: 8px;
}
</style>
