const path = require(`path`)
const home = require("./cms/home/home.json")
const manifest = require("./cms/configuration/manifest.json")
const configuration = require("./cms/configuration/license.json")
const robots = require("./cms/configuration/robots.json")
const { getConfig } = require("@foudroyer/mur/dist/gatsby/getConfig")

module.exports = getConfig({
  manifest,
  home,
  domain: configuration.domain,
  robots: robots.rules,
  basePath: path.resolve(__dirname),
})
