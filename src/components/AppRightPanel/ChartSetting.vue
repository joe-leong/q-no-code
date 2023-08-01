<template>
  <div>
    {{ blockInfo.type }}
  </div>
  <SegmentedControl v-model="chartType" :data="data" @input="emitChange"></SegmentedControl>
</template>

<script setup lang="ts">
import type { ChartBlockInfo, ChartType } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl.vue'
import { useForm } from 'vee-validate'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const emits = defineEmits<{
  (event: 'change', block: ChartBlockInfo): void
}>()

const data = [
  {
    label: 'Echarts-Echarts',
    value: 'echarts'
  },
  {
    label: 'Canvas',
    value: 'canvas'
  },
  {
    label: 'SVG',
    value: 'svg'
  }
]

const { defineInputBinds } = useForm({
  initialValues: {
    chartType: props.blockInfo.props.chartType
  }
})
const chartType = defineInputBinds('chartType')

function emitChange(val: string) {
  emits('change', {
    ...props.blockInfo,
    props: {
      ...props.blockInfo.props,
      chartType: val as ChartType
    }
  })
}
</script>
