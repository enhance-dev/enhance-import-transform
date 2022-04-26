import { parse } from 'acorn'

const options = {
  sourceType: 'module',
  ecmaVersion: 6,
}
export default function importTransform({ attrs, raw }) {
  const parsed = parse(raw, options)
  console.log(parsed)
  return raw
}