<template>
  <div class="spp-wrapper">
    <header>
      <AppNavigator />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNavigator from '@/components/AppNavigator.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

main {
  height: calc(100% - 48px);
}
</style>
