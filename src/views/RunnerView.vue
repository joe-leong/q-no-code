<template>
  <div class="layout-wrapper">
    <app-runner-renderer></app-runner-renderer>
  </div>
</template>

<script setup lang="ts">
import AppRunnerRenderer from '@/components/AppRunnerRenderer/AppRunnerRenderer.vue'
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
