<template>
  <div class="layout-content">
    <PreviewModeSwitcher @preview-mode-change="handleModeChange" :previewMode="previewMode" />
    <keep-alive>
      <component :is="activeView" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
import LaptopPreview from './LaptopPreview.vue'
import MobilePreview from './MobilePreview.vue'
import type { PreviewType } from '@/types/views'

const previewMode = ref<PreviewType>('laptop')
const viewMap = {
  mobile: MobilePreview,
  laptop: LaptopPreview
}
const activeView = computed(() => {
  return viewMap[previewMode.value]
})

const handleModeChange = (mode: PreviewType) => {
  previewMode.value = mode
}
</script>

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
