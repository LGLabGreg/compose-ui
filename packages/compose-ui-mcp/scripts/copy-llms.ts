/* eslint-disable no-console */
import { existsSync } from 'node:fs'
import { cp, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageRoot = resolve(__dirname, '..')
const sourceDir = resolve(packageRoot, '../../apps/docs/public')
const targetDir = resolve(packageRoot, 'assets')

const filesToCopy = [
  { src: 'llms.txt', dest: 'llms.txt' },
  { src: 'llms-full.txt', dest: 'llms-full.txt' },
  { src: 'llms', dest: 'llms' },
]

async function main() {
  // Validate source files exist
  for (const file of filesToCopy) {
    const sourcePath = resolve(sourceDir, file.src)
    if (!existsSync(sourcePath)) {
      console.error(`Error: Source file not found: ${sourcePath}`)
      console.error('Make sure to run "pnpm generate:llms" in apps/docs first.')
      process.exit(1)
    }
  }

  // Clean target directory
  if (existsSync(targetDir)) {
    await rm(targetDir, { recursive: true })
  }
  await mkdir(targetDir, { recursive: true })

  // Copy files
  for (const file of filesToCopy) {
    const sourcePath = resolve(sourceDir, file.src)
    const destPath = resolve(targetDir, file.dest)
    await cp(sourcePath, destPath, { recursive: true })
    console.log(`Copied ${file.src} -> assets/${file.dest}`)
  }

  console.log('LLMS assets copied successfully.')
}

main()
