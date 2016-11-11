var Account = require('../client')

var hoodie = {
  account: new Account({
    url: '/hoodie/account/api'
  })
}

module.exports = hoodie
