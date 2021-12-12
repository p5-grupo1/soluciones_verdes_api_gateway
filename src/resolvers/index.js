const autResolver   = require('./authResolver');
const postResolver  = require('./postsResolver');
const reservasResolver = require('./reservasResolver');

const lodash        = require('lodash')

const resolvers = lodash.merge(autResolver, postResolver, reservasResolver);
module.exports = resolvers;