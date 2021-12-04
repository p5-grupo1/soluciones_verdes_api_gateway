const PostResolver = {

    Query: {
        
        postByAll: async(_, {}, {dataSources} ) =>{
            return await dataSources.postAPI.postByAll();
        },

        postById: async(_, {idPost}, {dataSources}) =>{
            return await dataSources.postAPI.postById(idPost);
        },

        postByUsername: async(_, {username}, { dataSources }) =>{
            return await dataSources.postAPI.postByUsername(username);
        },

        postByArea: async(_, {area}, {dataSources}) =>{
            return await dataSources.postAPI.postByArea(area);
        },

        postByLugar: async(_, {ciudad}, {dataSources}) =>{
            return await dataSources.postAPI.postByLugar(ciudad);
        },

        postByPrecio: async(_, {precio}, {dataSources}) =>{
            return await dataSources.postAPI.postByPrecio(precio);
        },
    },

    Mutation: {
        postCreate: async(_, {post}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(post.username == usernameToken)
                return await dataSources.postAPI.postCreate(post, usernameToken);  
            else
                return null;
        },

        postUpdateInput: async(_, {post}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            if(post.username == usernameToken)
                return await dataSources.postAPI.postUpdateInput(post, usernameToken);
            else
                return null;      
        },

        postDelete: async(_, {idPost}, {dataSources,userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            const posts    = await dataSources.postAPI.postById(idPost); 
            usernamePost  = posts.username;
            if(usernameToken == usernamePost)
                return await dataSources.postAPI.postDelete(idPost);
            else
                return null;
        }
    }
};

module.exports = PostResolver;