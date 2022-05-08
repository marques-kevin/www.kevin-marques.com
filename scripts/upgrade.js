const {
  checkIfCanUpgrade,
} = require("@foudroyer/mur/dist/scripts/check-if-can-upgrade")
const configuration = require("../cms/configuration/license.json")

checkIfCanUpgrade(configuration)
