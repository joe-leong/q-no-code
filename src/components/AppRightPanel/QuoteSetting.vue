<template>
  <div>
    {{ blockInfo.type }}
  </div>
  <input
    v-if="'content' in blockInfo.props"
    v-bind="content"
    class="content-input"
    @change="handleContent"
  />
  <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value" />

  <button @click="push(new Date().toLocaleTimeString())">添加</button>
</template>

<script setup lang="ts">
import type { BlockInfo } from '@/types/block'
import { useForm, useFieldArray } from 'vee-validate'

defineProps<{
  blockInfo: BlockInfo
}>()

const emits = defineEmits(['change'])

const { defineInputBinds } = useForm()
const { fields, push } = useFieldArray('blocks')
const content = defineInputBinds('content')

function handleContent(e: Event) {
  emits('change', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.content-input {
  margin-top: 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  padding: 0 8px;
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  color: var(--color-gray-800);
  outline-style: none;
}
</style>
