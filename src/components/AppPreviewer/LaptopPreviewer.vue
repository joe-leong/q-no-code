<template>
  <div class="layout-runner">
    <div class="layout-runner-content-wrapper tiny-scrollbar">
      <div class="layout-runner-content-header">
        <div class="layout-runner-content-navigator"></div>
        <div class="layout-runner-content-title">Q</div>
      </div>
      <div class="layout-runner-content">
        <BlockRenderer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockRenderer from '@/blocks/BlockRenderer.vue'
</script>

<style scoped>
.layout-runner {
  display: flex;
  overflow: hidden;
  margin: 8px 40px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: 0 0 1px rgb(62 65 86 / 37.5%), 0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
  flex-direction: column;
  flex: 1;
}

.layout-runner-navigator {
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

.layout-runner-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}

.layout-runner-content-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.layout-runner-content-navigator {
  align-items: center;
  border-bottom: 1px solid rgb(31 41 55 / 8%);
  padding: 0 16px;
  height: 56px;
  font-size: var(--font-size-normal);
  background-color: var(--color-primary);
}

.layout-runner-content-title {
  display: flex;
  align-items: center;
  padding: 0 90px;
  height: 90px;
  font-size: 24px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}

.layout-runner-content {
  display: flex;
  align-items: center;
  padding: 0 90px;
  flex-direction: column;
}
</style>
