const { gql } = require('apollo-server');

const reservasTypes = gql `
    type Reservas {
        idReserva       :Int!
        cuentaJardinero :String!
        idPublicacion   :String!
        cuentaCliente   :String!
        fechaReserva    :String!
    }

    input ReservasInput {
        cuentaJardinero :String!
        idPublicacion   :String!
        cuentaCliente   :String!
    }

    extend type Query{
        ReservasByAll:[Reservas]
        ReservasById(idReserva:Int!):Reservas
        ReservasByClient(cuentaCliente:String!):[Reservas]
        ReservasByClientJardi(cuentaCliente:String!, cuentaJardinero:String!):[Reservas]
    }
    extend type Mutation{
        ReservasCreate(reservas:ReservasInput!):String!
        ReservasDelete(idReserva:Int!):String!
    }
`;
module.exports = reservasTypes;