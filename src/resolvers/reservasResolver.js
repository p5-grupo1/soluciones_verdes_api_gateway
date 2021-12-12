const ReservasResolver = {

    Query: {
        ReservasByAll: async(_, {}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            return await dataSources.reservasAPI.ReservasByAll();
        },

        ReservasById: async(_, {idReserva}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            const reserva = await dataSources.reservasAPI.ReservasById(idReserva);
            usernameclient = reserva.cuentaCliente;
            if(usernameToken == usernameclient)
                return await dataSources.reservasAPI.ReservasById(idReserva);
            else
                return null;
        },

        ReservasByClient: async(_, {cuentaCliente}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(cuentaCliente == usernameToken)
                return await dataSources.reservasAPI.ReservasByClient(cuentaCliente);
            else    
                return null;

        
        },

        ReservasByClientJardi: async(_, {cuentaCliente, cuentaJardinero}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            if(cuentaCliente == usernameToken)
                return await dataSources.reservasAPI.ReservasByClientJardi(cuentaCliente, cuentaJardinero);
            else
                return null;
        }
    },

    Mutation: {
        ReservasCreate: async(_, {reservas}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            if(reservas.cuentaCliente == usernameToken)
                return await dataSources.reservasAPI.ReservasCreate(reservas);
            else
                return null;
        },

        ReservasDelete: async(_, {idReserva}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username; 
            const reserva = await dataSources.reservasAPI.ReservasById(idReserva);
            usernameclient = reserva.cuentaCliente;
            if(usernameclient == usernameToken)
            return await dataSources.reservasAPI.ReservasDelete(idReserva);
            else
                return null;
        },
    }
};
module.exports = ReservasResolver;