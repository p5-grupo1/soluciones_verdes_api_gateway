const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class PostAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.posts_api_url;
    }

    async postByAll(){
        return await this.get('/allposts/');
    }

    async postById(idpost){
        return await this.get(`/posts/${idpost}`);
    }

    async postByUsername(username){
        return await this.get(`/filterposts/${username}`);
    }
    async postByArea(area){
        return await this.get(`/filterposts/area-${area}`);
    }

    async postByLugar(ciudad){
        return await this.get(`/filterposts/lugar-${ciudad}`);
    }

    async postByPrecio(precio){
        return await this.get(`/filterposts/price-${precio}`);
    }

    async postCreate(post, username){
        post = new Object(JSON.parse(JSON.stringify(post)));
        return await this.post(`/user/${username}/createposts`, post);

    }
    async postUpdateInput(post, username){
        post = new Object(JSON.parse(JSON.stringify(post)));
        return await this.put(`/user/${username}/updatepost`, post);
    }
    
    async postDelete(postId){
        return await this.delete(`/deletepost/${postId}`);
    } 
}
module.exports = PostAPI;