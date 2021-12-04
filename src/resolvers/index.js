const autResolver   = require('./authResolver');
const postResolver  = require('./postsResolver');

const lodash        = require('lodash')

const resolvers = lodash.merge(autResolver, postResolver);
module.exports = resolvers;