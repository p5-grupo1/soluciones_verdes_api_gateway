// Call all typeDefs
const postTypeDefs = require('./postsTypeDefs')
const authTypedefs = require('./authTypeDefs')
const reservasTypeDefs = require('./reservasTypeDefs')

const schemaArrays = [authTypedefs, postTypeDefs, reservasTypeDefs]
module.exports     = schemaArrays