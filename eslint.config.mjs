import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const prettierPluginConfig = {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
    ...prettierPlugin.configs.recommended.rules,
  },
}
const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/out/**',
  '**/coverage/**',
  '**/.git/**',
  '**/*.min.js',
  '**/public/**',
]

const eslintConfig = [
  {
    ignores,
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierPluginConfig,
  prettierConfig,
]

export default eslintConfig
