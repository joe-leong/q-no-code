<template>
  <div class="laptop-layout">
    <div class="laptop-layout-content-wrapper tiny-scrollbar">
      <div class="laptop-layout-content-header">
        <div class="laptop-layout-content-title">Q</div>
      </div>
      <div class="laptop-layout-content">
        <BlockRenderer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockRenderer from '@/blocks/BlockRenderer.vue'
</script>

<style scoped>
.laptop-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}

.laptop-layout-navigator {
  display: grid;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-200);
  padding: 0 16px;
  height: 42px;
  font-size: var(--font-size-normal);
  background-color: var(--color-gray-100);
  flex-shrink: 0;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.address-wrapper {
  overflow: hidden;
  border-radius: 6px;
  padding: 2px 32px 2px 12px;
  text-overflow: ellipsis;
  color: var(--color-gray-800);
  background-color: var(--color-gray-200);
  grid-column: span 2 / span 2;
  cursor: pointer;
}

.laptop-layout-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}

.laptop-layout-content-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.laptop-layout-content-title {
  display: flex;
  align-items: center;
  padding: 0 90px;
  height: 90px;
  font-size: 24px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}

.laptop-layout-content {
  display: flex;
  align-items: center;
  padding: 0 90px;
  flex-direction: column;
}
</style>
