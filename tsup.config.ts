import type { Options } from 'tsup'

export const tsup: Options = {
  splitting: true,
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs']
}
