<template>
  <div class="data-source-content-wrapper">
    <div class="data-source-render">
      <RDataSource></RDataSource>
    </div>
  </div>
</template>

<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import ReactDataSource from './react_app/ReactDataSource'
const RDataSource = applyPureReactInVue(ReactDataSource)
</script>

<style scoped>
.data-source-content-wrapper {
  width: 100%;
  background-color: var(--color-gray-100);
}

.data-source-render {
  overflow: hidden;
  margin: 20px;
  border-radius: 8px;
  padding: 12px;
  height: calc(100% - 40px);
  background-color: var(--color-white);
}
</style>
