#! /usr/bin/env node
import fs from 'fs-extra'
const copySync = fs.copySync
const removeSync = fs.removeSync

async function setup() {
  try {
    removeSync('./node_modules/@architect/views/bundles/_map.mjs')
    copySync(
      './test/fixtures/',
      './node_modules/'
    )
  }
  catch(error) {
    console.error(error)
  }
}

setup()