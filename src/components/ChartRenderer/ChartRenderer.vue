<template>
  <component :is="activeView" />
</template>

<script setup lang="ts">
import type { ChartBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const activeView = computed(() => {
  if (!props.blockInfo) return ''
  switch (props.blockInfo.props.chartType) {
    case 'echarts':
      return defineAsyncComponent(() => import('./EchartsRenderer/EchartsRenderer.vue'))
    case 'canvas':
      return defineAsyncComponent(() => import('./CanvasChartRenderer/CanvasChartRenderer.vue'))
    case 'svg':
      return defineAsyncComponent(() => import('./SVGChartRenderer/SVGChartRenderer.vue'))
    default:
      return ''
  }
})
</script>
