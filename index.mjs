import { parse } from 'acorn'
import { generate } from 'escodegen'
const BUNDLES_REGEX = /^\/_bundles\//

const parseOptions = {
  sourceType: 'module',
  ecmaVersion: 6,
}

const generateOptions = {
  format: {
    semicolons: false
  }
}

export default function importTransform({ map={}, options={} }) {
  const { generateOpts=generateOptions, parseOpts=parseOptions } = options
  return function transform({ raw }) {
    const parsed = parse(raw, parseOpts)
    const body = parsed.body || []
    body.forEach(node => {
      if(node.type === 'ImportDeclaration' &&
        BUNDLES_REGEX.test(node.source.value)) {
        node.source.value =  map[node.source.value]
      }
    })
    return generate(parsed, generateOpts)
  }
}