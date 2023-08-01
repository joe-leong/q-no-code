<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">
        <component
          :is="blockSetting"
          :blockInfo="currentBlockInfo"
          @change="(val:BlockInfo) => appEditorStore.updateBlock(val)"
        ></component>
        <!-- <QuoteSetting
          :blockInfo="currentBlockInfo"
          @change="(val) => appEditorStore.updateBlock(val)"
        ></QuoteSetting> -->
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import 'vue-json-pretty/lib/styles.css'
import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import QuoteSetting from './QuoteSetting.vue'
import type { BlockInfo } from '@/types/block'
import ChartSetting from './ChartSetting.vue'

const appEditorStore = useAppEditorStore()

const { blocks } = storeToRefs(appEditorStore)
const blocksMap = computed(() => {
  return blocks.value.reduce<Record<string, (typeof blocks.value)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})

const blockSetting = computed(() => {
  switch (currentBlockInfo.value?.type) {
    case 'quote': {
      return QuoteSetting
    }
    case 'chart': {
      return ChartSetting
    }
    default:
      return ''
  }
})
</script>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-header {
  padding: 0 16px 0 20px;
  height: 44px;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bolder);
  line-height: 44px;
}

.app-right-panel-content {
  padding: 0 16px 0 20px;
}
</style>
