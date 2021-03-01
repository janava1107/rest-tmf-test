const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.welcomePath = '/bff/welcome';
        
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
        this.app.use(this.welcomePath,require ('../routes/welcome.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('server corriendo')
        });
    }
}

module.exports = Server;