<template>
  <smooth-dnd-container
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <smooth-dnd-dragable v-for="(block, i) in blocks" :key="block.id">
      <div class="block-wrapper" @click.stop="selectBlock(block.id)">
        <component :is="$blocksMap[block.type].material" :blockInfo="block" class="block" />
        <div
          v-if="editable"
          :class="[
            'block-wrapper-indicator',
            { shown: envStore.debug, selected: currentBlockId === block.id }
          ]"
        >
          <div :class="['block-toolbar']" v-if="currentBlockId === block.id">
            <div class="block-toolbar-item handle">
              <drag />
            </div>
            <div class="block-toolbar-item" @click="blocks.splice(i, 1)">
              <delete />
            </div>
          </div>
        </div>
      </div>
    </smooth-dnd-dragable>
  </smooth-dnd-container>
</template>

<script setup lang="ts">
import SmoothDndContainer from '@/components/SmoothDnD/SmoothDndContainer'
import SmoothDndDragable from '@/components/SmoothDnD/SmoothDndDragable'
import { toRaw } from 'vue'
import { useAppEditorStore } from '@/stores/appEditor'
import { useEnvStore } from '@/stores/debug'
import { storeToRefs } from 'pinia'
import { smoothDnD, dropHandlers, type DropResult } from 'smooth-dnd'
import { Drag, Delete } from '@icon-park/vue-next'
import { arrayMove } from '@/utils/array'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
const envStore = useEnvStore()
const appEditorStore = useAppEditorStore()
const { blocks, currentBlockId } = storeToRefs(appEditorStore)
const { selectBlock, updateBlocks, blockInfos } = appEditorStore
const editable = inject('editable', true)

function applyDrag<T extends any[]>(arr: T, dragResult: DropResult) {
  const { removedIndex, addedIndex, payload } = dragResult

  const result = [...arr]

  // 没有操作
  if (addedIndex === null) return result

  // 添加操作
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, {
      ...blockInfos[payload['type']],
      id: `${Math.random()}`
    })
  }

  // 移动
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }
  return result
}
</script>
<style lang="css">
.smooth-dnd-draggable-wrapper {
  overflow: visible !important;
}
</style>
<style scoped>
.block-wrapper {
  position: relative;
  display: flex;
  margin-top: 16px;
  border-radius: 8px;
  padding: 6px 4px;
  width: 100%;
  background-color: var(--color-white);
  transition: box-shadow 0.2s ease-in-out;
}

.block {
  position: relative;
  z-index: 1;
}

.block-wrapper-indicator {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  content: '';
  pointer-events: none;
  user-select: none;
}

.block-wrapper-indicator.shown {
  border: 1px dashed var(--color-gray-300);
}

.block-wrapper-indicator.selected {
  border: 1px solid var(--color-primary);
}

.block-toolbar {
  position: absolute;
  top: -36px;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 4px 8px;
  background-color: var(--color-black);
  gap: 4px;
  pointer-events: visible;
}

.block-toolbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 22px;
  height: 22px;
  color: var(--color-white);
  cursor: pointer;
}

.block-toolbar-item:nth-of-type(1) {
  cursor: grab;
}

.block-toolbar-item:hover {
  background-color: var(--color-gray-800);
  transition: all 0.2s ease-in-out;
}

.block-wrapper.debug:hover .block-wrapper-senior {
  border-style: solid;
  transition: box-shadow 0.2s ease-in-out;
}
</style>
