<template>
  <VueFlow
    v-model="elements"
    class="basic-flow"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
  >
    <Background :gap="12" />
    <MiniMap />
    <Controls />
    <Panel position="top-right" class="controls">
      <div
        v-for="btn in controlBtns"
        :key="btn.name"
        class="control-btn"
        :title="btn.title"
        @click="() => btn.fn()"
      >
        <component :is="btn.material" />
      </div>
    </Panel>
  </VueFlow>
</template>

<script setup lang="ts">
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import { VueFlow, Panel, isNode, useVueFlow } from '@vue-flow/core'
import { Background, MiniMap, Controls } from '@vue-flow/additional-components'
import { initialElements } from './initial-elements'
import { Resting, Shuffle, Log } from '@icon-park/vue-next'
const elements = ref(initialElements)
const { onNodeDragStop, onConnect, addEdges, setTransform, toObject, addNodes } = useVueFlow()

onConnect((params) => {
  console.log(params)

  addEdges(params)
})
onNodeDragStop((e) => console.log('drag stop', e))
/**
 * To update node properties you can simply use your elements v-model and mutate the elements directly
 * Changes should always be reflected on the graph reactively, without the need to overwrite the elements
 */
function updatePos() {
  return elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 400,
        y: Math.random() * 400
      }
    }
  })
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  return console.log(toObject())
}

/**
 * Resets the current view pane transformation (zoom & pan)
 */
function resetTransform() {
  return setTransform({ x: 0, y: 0, zoom: 1 })
}
const controlBtns = [
  {
    name: 'reset',
    title: 'Reset Transform',
    material: Resting,
    fn: resetTransform
  },
  {
    name: 'shuffle',
    title: 'Shuffle Node Positions',
    material: Shuffle,
    fn: updatePos
  },
  {
    name: 'log',
    title: 'Log `toObject`',
    material: Log,
    fn: logToObject
  }
]

onMounted(() => {
  addNodes([
    {
      id: '2',
      position: { x: 150, y: 50 },
      label: 'Node 2'
    }
  ])
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css');
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css');

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  padding: 4px 8px;
  background-color: var(--color-gray-100);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 20px;
  gap: 8px;
}

.control-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  color: var(--color-gray-800);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.control-btn:hover {
  background-color: var(--color-gray-300);
  transition: all 0.2s ease-in-out;
}
</style>
