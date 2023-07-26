<script setup lang="ts">
import StatusBar from './StatusBar.vue'
import BlockRenderer from '@/blocks/BlockRenderer.vue'
</script>

<template>
  <div class="layout-runner">
    <div class="simulator-wrapper">
      <div class="simulator-header">
        <StatusBar />
        <div class="simulator-navigator-wrapper">
          <div class="simulator-navigator">Q</div>
        </div>
      </div>
      <div class="simulator">
        <BlockRenderer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-runner {
  margin-top: 8px;
  flex: 1;
}

.simulator-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-y: auto;
  margin: 0 auto;
  border-radius: 55px;
  width: 393px;
  height: 852px;
  background-color: var(--color-white);
  box-shadow: 0 0 0 5px #151515, 0 0 0 6px var(--color-primary),
    0 -7.5px 1.5px rgb(255 255 255 / 40%), 7.5px 0 1.5px rgb(255 255 255 / 25%),
    -7.5px 0 1.5px rgb(255 255 255 / 40%), 0 7.5px 1.5px rgb(255 255 255 / 25%),
    0 0 0 9px var(--color-primary), 6px 8px 16px rgb(0 0 0 / 25%), 20px 32px 72px rgb(0 0 0 / 20%);
  flex-direction: column;
}

.simulator-wrapper::-webkit-scrollbar {
  display: none;
}

.simulator-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.simulator-navigator {
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

.simulator-title {
  height: 90px;
  background-color: var(--color-primary);
}

.simulator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 32px;
  flex: 1;
}
</style>
