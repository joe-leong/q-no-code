<template>
  <div>
    {{ blockInfo.type }}
  </div>
  <input v-if="'content' in blockInfo.props" v-bind="content" class="content-input" />
  <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value" />

  <button @click="push(new Date().toLocaleTimeString())">添加</button>
  <vue-json-pretty showIcon showLineNumber editable :data="j"></vue-json-pretty>
</template>

<script setup lang="ts">
import type { BlockInfo, QuoteBlockInfo } from '@/types/block'
import { useForm, useFieldArray } from 'vee-validate'
import type { JSONDataType } from 'vue-json-pretty/types/utils/index'

import VueJsonPretty from 'vue-json-pretty'
const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

const emits = defineEmits<{
  (event: 'change', block: BlockInfo): void
}>()

const { values, defineInputBinds } = useForm({
  initialValues: {
    content: props.blockInfo.props.content
  }
})
const { fields, push } = useFieldArray('blocks')
const content = defineInputBinds('content')
const j = computed<JSONDataType>(() => {
  return JSON.parse(JSON.stringify(props.blockInfo))
})
watch(
  () => values,
  (newValue) => {
    emits('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValue } })
  },
  {
    deep: true
  }
)
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
