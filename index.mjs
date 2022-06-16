export default function importTransform({ lookup, workers=[] }) {
  return function transform({ raw }) {
    const importRegex = new RegExp(
      /(import(?:["'\s]*([\w*${}\n\r\t, ]+)from\s*)?["'\s]["'\s])(\/_static\/bundles\/.*[@\w_-]+)(["'\s].*;?$)/,
      'gm'
    )
    let str = raw.replace(
      importRegex,
      (str, before, importName, location, after) => {
        return `${before}${lookup(location.split('/').slice(2).join('/'))}${after}`
      }
    )
    workers.forEach(({ label, path }) => {
      const reg = new RegExp(label, 'gm')
      str = str.replace(reg, lookup(path))
    })
    return str
  }
}