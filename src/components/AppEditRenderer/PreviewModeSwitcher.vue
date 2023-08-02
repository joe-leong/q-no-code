<template>
  <div class="icon-button-wrapper">
    <div class="icon-button" v-for="mode in modes" :key="mode.type">
      <component
        :is="mode.icon"
        :size="20"
        :fill="props.previewMode === mode.type ? 'var(--color-black)' : 'var(--color-gray-500)'"
        @click="greet(mode.type)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PreviewType } from '@/types/views'
import { Iphone, LaptopComputer } from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'

const props = defineProps<{
  previewMode?: PreviewType
}>()

const emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
}>()

function greet(mode: PreviewType) {
  emit('preview-mode-change', mode)
}
const modes: { type: PreviewType; icon: Icon }[] = [
  {
    type: 'mobile',
    icon: Iphone
  },
  {
    type: 'laptop',
    icon: LaptopComputer
  }
]
</script>

<style scoped>
.icon-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 40px;
  border-radius: 8px;
  padding: 0 16px;
  color: var(--color-gray-700);
  background-color: var(--color-white);
  box-shadow: 0 0 1px rgb(62 65 86 / 37.5%), 0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
  gap: 8px;
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 32px;
  height: 32px;
}

.icon-button:hover {
  background-color: var(--color-gray-200);
}

span {
  cursor: pointer;
}
</style>
