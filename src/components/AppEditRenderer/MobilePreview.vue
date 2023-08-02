<template>
  <div class="mobile-layout">
    <div class="simulator-wrapper">
      <div class="simulator-header">
        <StatusBar />
      </div>
      <div class="simulator-content">
        <AppMobilePreviewer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusBar from './StatusBar.vue'
import AppMobilePreviewer from '@/components/AppPreviewer/MobilePreviewer.vue'
</script>

<style scoped>
.mobile-layout {
  flex: 1;
}

.simulator-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
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

.simulator-content {
  flex: 1;
  overflow-y: auto;
}
</style>
