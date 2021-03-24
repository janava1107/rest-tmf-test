const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //path endpoint
        this.welcomePath    = '/bff/welcome';
        this.consultaconsumoPath    = '/bff/consultaconsumo';
        this.consultaboletacicloPath    = '/bff/consultaboletaciclo';
        this.otaPath    = '/bff/ota';
        //middlewares
        this.middlewares();

        //rutas de la aplicación
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //read body
        this.app.use(express.json());
    }

    routes(){
        //this.app.use(this.authPath,require ('../routes/auth.routes'));
        this.app.use(this.welcomePath,require ('../routes/welcome.routes'));
        this.app.use(this.consultaconsumoPath,require ('../routes/consultaconsumo.routes'));
        this.app.use(this.consultaboletacicloPath,require ('../routes/consultaboletaciclo.routes'));
        this.app.use(this.otaPath,require ('../routes/ota.routes'));
    
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('server corriendo')
        });
    }
}

module.exports = Server;