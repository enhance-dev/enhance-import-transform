import importMap from '@architect/importmap'
import { parse } from 'acorn'
import { generate } from 'escodegen'
const MODULES_REGEX = /^\/_modules\//

console.log('importMap', importMap)
const parseOptions = {
  sourceType: 'module',
  ecmaVersion: 6,
}
const generateOptions = {
  format: {
    semicolons: false
  }
}

export default function importTransform({ raw }) {
  const parsed = parse(raw, parseOptions)
  const body = parsed.body || []
  body.forEach(node => {
    if(MODULES_REGEX.test(node.source.value)) {
      node.source.value = importMap[node.source.value]
    }
  })
  return generate(parsed, generateOptions)
}