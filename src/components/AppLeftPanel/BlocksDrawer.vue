<template>
  <div class="blocks-drawer-wrapper">
    <h3 class="drawer-title">组件</h3>
    <smooth-dnd-container
      behaviour="copy"
      group-name="blocks"
      orientation="vertical"
      :get-child-payload="(index: number) => blocksBaseMetaList[index]"
      tag="div"
      class="blocks-list"
    >
      <template v-for="d in blocksBaseMetaList" :key="d.type">
        <smooth-dnd-dragable>
          <div class="blocks-item">
            <div class="block-icon-wrapper">
              <component :is="d.icon" />
            </div>
            <span class="block-name">{{ d.name }}</span>
          </div>
        </smooth-dnd-dragable>
      </template>
    </smooth-dnd-container>
  </div>
</template>

<script setup lang="ts">
import SmoothDndContainer from '../SmoothDnD/SmoothDndContainer'
import SmoothDndDragable from '../SmoothDnD/SmoothDndDragable'
import { blocksBaseMetaList } from '@/constants/blocksBaseMeta'
</script>

<style scoped>
.blocks-drawer-wrapper {
  width: 100%;
}

.drawer-title {
  margin-bottom: 8px;
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
}

.blocks-list {
  --grid-item-color: #1edb5b;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin: 0 -12px;
  padding-bottom: 8px;
}

.blocks-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  padding: 8px 0;
  transition: background-color 0.125s ease 0s;
  flex-direction: column;
  cursor: grab;
  user-select: none;
}

.blocks-item:hover {
  background-color: var(--color-gray-200);
}

.block-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  font-size: var(--font-size-large);
  color: var(--color-white);
  background-color: var(--grid-item-color);
}

.block-name {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
}
</style>
