import type { ProcessOutput } from 'zx'
import { $ } from 'zx'
import { printObject } from './utils'

// 单词拼写检查
await $`pnpm spellcheck`.catch((out: ProcessOutput) => {
  throw new Error(out.stdout)
})

// 类型检查 && 执行暂存区代码检查
await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out: ProcessOutput) => {
  printObject(out)
  throw new Error(out.stdout)
})
