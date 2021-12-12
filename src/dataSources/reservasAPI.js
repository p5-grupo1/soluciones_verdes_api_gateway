const { RESTDataSource }    = require('apollo-datasource-rest');
const serverConfig          = require('../server');

class ReservasAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.reserva_api_url;
    }

    async ReservasByAll(){
        return await this.get('/allreservas/');
    }

    async ReservasById(idreserva){
        return await this.get(`/reserva/${idreserva}`);
    }

    async ReservasByClient(cuentacliente){
        return await this.get(`/reservasfilter/cliente?cuentaCliente=${cuentacliente}`);
    }

    async ReservasByClientJardi(cuentacliente, cuentajardinero){
        return await this.get(`/reservasfilter/clientejardinero/?cuentaCliente=${cuentacliente}&cuentaJardinero=${cuentajardinero}`);
    }

    async ReservasCreate(reservas){
        reservas = new Object(JSON.parse(JSON.stringify(reservas)));
        return await this.post(`/createreserva/`, reservas);
    }

    async ReservasDelete(idreserva){
        return await this.delete(`/deletereserva/${idreserva}`);
    }
};
module.exports = ReservasAPI;