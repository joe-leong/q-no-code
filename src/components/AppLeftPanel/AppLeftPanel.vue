<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-bar">
      <div
        v-for="item in barItems"
        :key="item.mode"
        :class="['app-left-panel-item', isDrawerShown === item.mode && 'active']"
        @click="toggleDrawer(item.mode)"
      >
        <component :is="item.component" size="20" :style="{ lineHeight: 0.7 }" />
      </div>
    </div>
    <Transition name="app-left-panel-drawer">
      <div v-if="!!isDrawerShown" class="app-left-panel-drawer">
        <div class="app-left-panel-drawer-content">
          <component
            v-if="!!isDrawerShown"
            :is="isDrawerShown === 'outline' ? OutlineDrawer : BlocksDrawer"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import OutlineDrawer from '@/components/AppLeftPanel/OutlinerDrawer.vue'
import BlocksDrawer from '@/components/AppLeftPanel/BlocksDrawer.vue'
import { Page, SmartOptimization } from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
type DrawerMode = 'outline' | 'blocks' | null

const isDrawerShown = ref<DrawerMode>('blocks')

type BarItem = {
  mode: Exclude<DrawerMode, null>
  component: Icon
}
const barItems: BarItem[] = [
  {
    mode: 'outline',
    component: Page
  },
  {
    mode: 'blocks',
    component: SmartOptimization
  }
]

const toggleDrawer = (drawerMode: DrawerMode = null) => {
  if (isDrawerShown.value === drawerMode) {
    isDrawerShown.value = null
    return
  }
  isDrawerShown.value = drawerMode
}
</script>
<style scoped>
.app-left-panel-wrapper {
  position: relative;
  z-index: 4;
  display: flex;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-left-panel-bar {
  display: flex;
  align-items: center;
  padding-top: 16px;
  width: 60px;
  height: 100%;
  flex-direction: column;
}

.app-left-panel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  border-radius: 8px;
  width: 42px;
  height: 42px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-700);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
}

.app-left-panel-item.active {
  color: var(--color-text);
  background-color: var(--color-gray-200);
}

.app-left-panel-item:hover {
  background-color: var(--color-gray-200);
  transition: all 0.2s ease-in-out;
}

.app-left-panel-drawer {
  overflow: hidden;
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

/* 下面我们会解释这些 class 是做什么的 */
.app-left-panel-drawer-enter-active,
.app-left-panel-drawer-leave-active {
  transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.app-left-panel-drawer-enter-from,
.app-left-panel-drawer-leave-to {
  width: 0;
}

.app-left-panel-drawer-content {
  padding: 16px;
  width: calc(var(--panel-width) - 60px);
  height: 100%;
}
</style>
