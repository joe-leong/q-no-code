<script setup lang="ts">
import type { QuoteBlockInfo } from '@/types/block'
import { Error, Success, Wallet } from '@icon-park/vue-next'

const STATUS_MAP = {
  success: {
    color: '#059669',
    bgColor: '#E4F2E9',
    borderColor: '#79DBA2',
    icon: Success
  },
  warning: {
    color: '#E18F05',
    bgColor: '#F8ECEC',
    borderColor: '#79DBA2',
    icon: Error
  },
  error: {
    color: '#DC2C26',
    bgColor: '#F8ECEC',
    borderColor: '#F3A9A5',
    icon: Wallet
  }
}
const status = 'success'

const { color, bgColor, /* borderColor, */ icon } = STATUS_MAP[status]
defineProps<{
  blockInfo: QuoteBlockInfo
}>()
</script>

<template>
  <div
    class="quote"
    :style="{ backgroundColor: bgColor, color /* , border: `1px solid ${borderColor}` */ }"
  >
    <component :is="icon" />
    <span class="quote-text">{{ blockInfo.props.content }}</span>
  </div>
</template>

<style scoped>
.quote {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 18px;
  font-size: var(--font-size-large);
  flex: 1;

  /* background-color: ; */
}

.quote-text {
  margin-left: 6px;
}
</style>
