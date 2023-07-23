#!/usr/bin/env zx

import { $ } from 'zx'

console.log('开始代码质量评估...\n')

await import('./check').catch(() => {
  throw new Error('代码质量评估失败，请检查代码')
})

console.log('printf "评估完成，创建commit中..."')

await $`git add .`
