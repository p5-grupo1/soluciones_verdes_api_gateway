// Call all typeDefs
const postTypeDefs = require('./postsTypeDefs')
const authTypedefs = require('./authTypeDefs')

const schemaArrays = [authTypedefs, postTypeDefs]
module.exports     = schemaArrays