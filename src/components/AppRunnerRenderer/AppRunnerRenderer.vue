<template>
  <component :is="activeView" />
</template>

<script setup lang="ts">
import { isMobileTablet } from '@/utils/detect'
import MobilePreview from '../AppPreviewer/MobilePreviewer.vue'
import LaptopPreview from '../AppPreviewer/LaptopPreviewer.vue'
import type { PreviewType } from '@/types/views'

provide('editable', false)

const device = ref<PreviewType>('laptop')
function resize() {
  device.value = isMobileTablet() ? 'mobile' : 'laptop'
}
const viewMap = {
  mobile: MobilePreview,
  laptop: LaptopPreview
}
const activeView = computed(() => {
  return viewMap[device.value]
})
onMounted(() => {
  resize()
  window.addEventListener('resize', resize, false)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize, false)
})
</script>
