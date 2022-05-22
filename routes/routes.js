//cargue la conexion del grupo SQL
const mssql = require('mssql');
const config = require('../data/config');

//Ruta de la app
const router = app => {
    //Mostrar mensaje de bienvenida de root
    app.get('/', (request, response) =>{
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    });

    //Mostrar todos los usuarios
    app.get('/users', (request, response)=>{
        mssql.connect(config, function(err){
            if(err) console.log(err);

            var request = new mssql.Request();

            request.query('select * from users', function (err, recordset){
                if(err) console.log(err)

                response.send(recordset);
            });
        });
    });

    //Mostrar un solo usuario por ID
    app.get('/users/:id', (request, response)=>{
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("select * from users where id = " + id, function (err, results){
                if(err) console.log(err)

                response.send(results);
            });
        });
    });
    //Agregar un nuevo usuario
        app.post('/users', (request, response) => {
        mssql.connect(config, function(err){

            if(err) console.log(err);

            var req = new mssql.Request();

            const id = request.body.id;
            const nombre = request.body[0].nombre;
            const apellido = request.body[0].apellido;            

            req.query("insert into users(nombre, apellido) values("+"'"+nombre+"','"+apellido+"')", function (err, results){
                if(err) console.log(err)

                response.status(201).send(`User added`);
            });
        });
    });
    
    //Actualizar un usuario existente
    app.put('/users/:id', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;
            const nombre = request.body[0].nombre;
            const apellido = request.body[0].apellido;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("update users set nombre = "+"'"+nombre+"', apellido = "+"'"+apellido+"'"+"WHERE id = "+id, function (err, results){
                if(err) console.log(err)

                response.send('User updated succesfully');
            });
        });
    });
//Eliminar un usuario
    app.delete('/users/:id', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("DELETE FROM users WHERE Id = "+id, function (err, results){
                if(err) console.log(err)

                response.send('User deleted');
            });
        });
    });

}

// Exportar el router
module.exports = router;