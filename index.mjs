export default function importTransform({ lookup }) {
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
    str = str.replace(/__WORKER_SCRIPT_URL__/g, lookup('worker.mjs'))
    return str
  }
}