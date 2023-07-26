import { blocks as blocksData } from '@/mocks/blocks'
import { defineStore } from 'pinia'

export const useAppEditorStore = defineStore('appEditor', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)

  function selectBlock(id: string) {
    currentBlockId.value = id
  }

  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }
  function updateBlock(id: string | undefined, content: string) {
    if (typeof id === undefined) return
    content = content || ''
    blocks.value = blocks.value.map((block) => {
      if (block.id === id && 'content' in block.props) {
        block.props.content = content
      }
      return block
    })
  }

  return {
    selectBlock,
    updateBlocks,
    blocks,
    currentBlockId,
    updateBlock
  }
})
