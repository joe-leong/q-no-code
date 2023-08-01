import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockInfo } from '@/types/block'
import { defineStore } from 'pinia'

export const useAppEditorStore = defineStore('appEditor', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)

  const blockInfos = ref(Object.fromEntries(blocksData.map((block) => [block.type, block])))

  const blockIds = computed(() => {
    return blocks.value.map((block) => block.id)
  })

  function selectBlock(id: string) {
    currentBlockId.value = id
  }

  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }
  function updateBlock(newBlock: BlockInfo) {
    const targetIdx = blockIds.value.indexOf(newBlock.id)
    blocks.value[targetIdx] = newBlock
  }

  return {
    selectBlock,
    updateBlocks,
    blocks,
    currentBlockId,
    updateBlock,
    blockInfos
  }
})
