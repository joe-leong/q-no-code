<script setup lang="ts">
import BlockRenderer from '@/blocks/BlockRenderer.vue'
</script>

<template>
  <div class="content">
    <div class="navigator-wrapper">
      <div class="navigator">Q</div>
    </div>

    <div class="render-content">
      <BlockRenderer />
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
}

.navigator-wrapper {
  position: sticky;
  top: 0;
  z-index: 2;
}

.navigator {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(31 41 55 / 8%);
  padding: 0 12px;
  height: 56px;
  font-size: 18px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}

.render-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 32px;
  flex: 1;
}
</style>
