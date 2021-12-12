const { gql } = require('apollo-server');

const authTypes = gql `

    type Tokens {
        refresh     :String!
        access      :String!
    }

    type Access {
        access      :String!
    }

    input Refresh {
        refresh     :String!
    }

    input CredentialsInput {
        username    :String!
        password    :String!
    }

    input SignUpInput {
        username        :String!
        password        :String!
        nombre          :String!
        email           :String!
        rol_jardinero   :Boolean!
        descripcion     :String
        ciudad          :String
        telefono        :String  
    }
    
    type UserDetail{
        id              :Int!
        username        :String!
        nombre          :String!
        email           :String!
        rol_jardinero   :Boolean!
        descripcion     :String
        ciudad          :String
        telefono        :String
    }

    type UserPost{
        username        :String
        nombre          :String
        email           :String
        descripcion     :String
        ciudad          :String
        telefono        :String
    }

    input UserUpdate{
        id              :Int!
        username        :String
        password        :String
        nombre          :String
        email           :String
        rol_jardinero   :Boolean
        descripcion     :String
        ciudad          :String
        telefono        :String
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
        userByUsername(username:String!):[UserPost]
    }

    type Mutation {
        signUpUser(userInput:SignUpInput)     :Tokens!
        logIn(credentials:CredentialsInput!)  :Tokens!
        refreshToken(token:Refresh!)          :Access!
        updateUser(user:UserUpdate!)          :UserDetail!
    }
`;
module.exports = authTypes;