<script setup lang="ts">
import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'
import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
import type { PreviewType } from './type'

const previewMode = ref<PreviewType>('laptop')

const handleModeChange = (mode: PreviewType) => {
  previewMode.value = mode
}
</script>

<template>
  <div class="layout-content">
    <PreviewModeSwitcher
      @preview-mode-change="handleModeChange"
      :previewMode="previewMode"
    ></PreviewModeSwitcher>
    <LaptopPreviewer v-if="previewMode === 'laptop'" :key="'laptop'" :preview-mode="previewMode" />
    <MobilePreviewer
      v-if="previewMode === 'mobile'"
      :key="'mobile'"
      :preview-mode="previewMode"
      @preview-mode-change="handleModeChange"
    />
  </div>
</template>

<style scoped>
.layout-content {
  position: relative;
  z-index: 2;
  display: flex;
  background-color: var(--color-gray-100);
  flex-direction: column;
  flex: 1;
}
</style>
