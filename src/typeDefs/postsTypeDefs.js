const { gql } = require('apollo-server');

const postTypes = gql `
    type Post {
        idPost              :String!
        area                :String!
        ciudad              :String!
        imagen              :String!
        descripcionServicio :String!
        fechaPublicacion    :String!
        precio              :Int!
        username            :String!     
    }

    type RecipientCiudad {
        ciudad              :String!
    }

    type RecipientPrecio {
        precio              :Int!
    }

    input PostInput {
        area                :String!
        ciudad              :String!
        descripcionServicio :String!
        precio              :Int! 
        username            :String! 
        imagen              :String!
    }

    input PostUpdate {
        idPost              :String!
        area                :String!
        ciudad              :String!
        descripcionServicio :String!
        precio              :Int!
        username            :String! 
        imagen              :String!     
    }



    extend type Query{
        postByAll:[Post]
        postById(idPost:String!):Post
        postByUsername(username:String!):[Post]
        postByArea(area:String!):[Post]
        postByLugar(ciudad:String!):[Post]
        postByPrecio(precio:Int!):[Post]


        postRecipientCiudad:[String]
        postRecipientPrecio:[Int]

    }

    extend type Mutation{
        postCreate(post:PostInput!):Post
        postUpdateInput(post:PostUpdate):Post
        postDelete(idPost:String!):String! 
    }

`;
module.exports = postTypes;