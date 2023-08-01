export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string
  type: BlockType
  label: string
}

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  props: {
    content: string
  }
}

export interface ViewBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      id: string
      type: string
    }
    fieldProps: {
      width: number
      visible: boolean
    }[]
    data: { id: string; value: string }[]
  }
}

export type QuoteBlockStatus = 'success' | 'warning' | 'error'

export interface QuoteBlockInfo extends BaseBlockInfo {
  props: {
    content: string
    status: QuoteBlockStatus
  }
}

export interface ImageBlockInfo extends BaseBlockInfo {
  props: {
    url: string
  }
}

// external
export interface ButtonBlockInfo extends BaseBlockInfo {
  props: {
    text: string
  }
}

export interface FormBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      type: string
      label: string
      placeholder?: string
      required?: boolean
    }[]
  }
}

export interface NotesBlockInfo extends BaseBlockInfo {
  type: 'notes'
  props: {
    content: string
  }
}

export type ChartType = 'echarts' | 'canvas' | 'svg'

export interface ChartBlockInfo extends BaseBlockInfo {
  type: 'chart'
  props: {
    chartType: ChartType
  }
}

export type BlockInfo =
  // basic
  | HeroTitleBlockInfo
  | ViewBlockInfo
  | QuoteBlockInfo
  | ImageBlockInfo
  | ChartBlockInfo
  // external
  | ButtonBlockInfo
  | FormBlockInfo
  | NotesBlockInfo
