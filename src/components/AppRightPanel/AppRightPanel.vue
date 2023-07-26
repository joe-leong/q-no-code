<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">
        <QuoteSetting
          :blockInfo="currentBlockInfo"
          @change="(val) => appEditorStore.updateBlock(currentBlockInfo?.id, val)"
        ></QuoteSetting>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import QuoteSetting from './QuoteSetting.vue'

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
