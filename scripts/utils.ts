import { ProcessOutput } from 'zx'
export function printObject(
  object: Record<string, unknown> | ProcessOutput,
  method: 'log' | 'warn' | 'error' = 'log'
) {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:${value}\n`)
  }
}
