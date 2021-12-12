const {RESTDataSource}  = require('apollo-datasource-rest');
const serverConfig      = require('../server');

class AuthAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('/user/', user);
    }

    async getUser(userId){
        return await this.get(`/user/${userId}/`);
    }

    async ByUsername(username){
        return await this.get("/userlist/?username="+username);
    }

    async updateUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id;
        return await this.put(`/user/update/${userId}/`, user);
    }

    async authRequest(credentials){
        credentials = new Object(credentials);
        return await this.post('/login/', credentials);
    }

    async refreshToken(token){
        token = new Object(token);
        return await this.post('/refresh/' , token);
    }
}
module.exports = AuthAPI;