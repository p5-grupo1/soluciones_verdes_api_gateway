const { ApolloServer }  = require('apollo-server');
const typeDefs          = require('./typeDefs');
const resolvers         = require('./resolvers');
const authentication    = require('./utils/authentication');
const AuthAPI           = require('./dataSources/authAPI');
const PostAPI           = require('./dataSources/postsAPI');
const ReservasAPI       = require('./dataSources/reservasAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        postAPI: new PostAPI(),
        reservasAPI: new ReservasAPI()
    }),
    introspection   : true,
    playground      : true
});
server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`Server Ready at ${url}`);
    }
);