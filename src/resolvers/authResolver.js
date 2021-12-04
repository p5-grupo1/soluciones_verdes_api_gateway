
const userResolver = {

    Query: {
        userDetailById: async (_, {userId}, { dataSources, userIdToken }) => {
            return await dataSources.authAPI.getUser(userId);
        }
    },

    Mutation: {
        signUpUser: async (_, {userInput}, {dataSources}) => {
            return await dataSources.authAPI.createUser(userInput);
        },


        logIn: async (_, { credentials }, {dataSources}) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },

        updateUser: async (_, {user}, {dataSources, userIdToken}) => {
            if(user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else
                return null;
        }
    }
};
module.exports = userResolver;