// inicial estandar
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors());
app.use(express.json());


// app.get get de todos los docentes
app.get('/api/docente/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_docente";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get docente por nombre
app.get('/api/docente_nombre/:nombre_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_docente where nombre_docente = ?";
    let parametros = [req.params.nombre_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get docentes por active
// active es un valor booleano 1 es true y 0 es false
app.get('/api/docente_active/:active', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_docente where active = ?";
    let parametros = [req.params.active];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get docente por identidad
app.get('/api/docente_identidad/:identidad_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_docente where identidad_docente = ?";
    let parametros = [req.params.identidad_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get docente por correo
app.get('/api/docente_correo/:correo_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_docente where correo_docente = ?";
    let parametros = [req.params.correo_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post DOCENTE
app.post('/api/docente/', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_docente" +
        "(nombre_docente, identidad_docente, correo_docente, pass, telefono, active)" +
        "values (?,?,?,?,?,?)";
    let parametros = [req.body.nombre_docente, req.body.identidad_docente, req.body.correo_docente, req.body.pass,
    req.body.telefono, req.body.active];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.put docente
app.put('/api/docente/:nombre_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "update tabla_docente set  identidad_docente = ?, correo_docente = ?, pass = ?, telefono = ?, active = ? where nombre_docente = ?";
    let parametros = [req.body.identidad_docente, req.body.correo_docente, req.body.pass,
    req.body.telefono, req.body.active, req.params.nombre_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.delete docente
app.delete('/api/docente/:nombre_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "delete from tabla_docente where nombre_docente = ?";
    let parametros = [req.params.nombre_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

//LOGIN para docente parametro correo_docente y pass
app.get('/api/login_docente/:correo_docente/:pass', (req, res) => {


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "desfhyeb_cmartinez",
        password: "Hola1234$",
        database: "ticket_proyectoPW2"
    });

    let sql = 'SELECT count(1) is_valid FROM tabla_docente where correo_docente = ? and pass = ? and active = true ';

    let parametros = [
        req.params.correo_docente,
        req.params.pass
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// PARTE PARA LOS ADMINISTRADORES
// app.get get de todos los administraodres
app.get('/api/administrador/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_administrador";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post administrador
app.post('/api/administrador/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_administrador" +
        "(nombre_admin, correo_admin, pass_admin, active)" +
        "values (?,?,?,?,?)";
    let parametros = [req.body.nombre_admin, req.body.correo_admin, req.body.pass_admin, req.body.active];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});


// app.put administrador
app.put('/api/administrador/:nombre_admin', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "update tabla_administrador set  nombre_admin = ?, correo_admin = ?, pass_admin = ?, active = ? where nombre_admin = ?";
    let parametros = [req.body.nombre_admin, req.body.correo_admin, req.body.pass_admin, req.body.active, req.params.nombre_admin];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.delete administrador
app.delete('/api/administrador/:id_administrador', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "delete from tabla_administrador where id_administrador = ?";
    let parametros = [req.params.id_administrador];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

//LOGIN para administrador parametro correo_admin y pass_admin
app.get('/api/login_administrador/:correo_admin/:pass_admin', (req, res) => {


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "desfhyeb_cmartinez",
        password: "Hola1234$",
        database: "ticket_proyectoPW2"
    });

    let sql = 'SELECT count(1) is_valid FROM tabla_administrador where correo_admin = ? and pass_admin = ? and active = true ';

    let parametros = [
        req.params.correo_admin,
        req.params.pass_admin
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// PARTE DE ESTADO DE TICKET
// app.get get de todos los estados
app.get('/api/estado/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_estado";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post estado
app.post('/api/estado/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_estado" +
        "(estado)" +
        "values (?)";
    let parametros = [req.body.estado];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});




// get grado
app.get('/api/grado/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_grado";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post grado
app.post('/api/grado/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_grado" +
        "(grado)" +
        "values (?)";
    let parametros = [req.body.grado];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app,get area
app.get('/api/area/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_area";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post area
app.post('/api/area/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_area" +
        "(grado)" +
        "values (?)";
    let parametros = [req.body.area];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get prioridad
app.get('/api/prioridad/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_prioridad";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post prioridad
app.post('/api/prioridad/', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_prioridad" +
        "(prioridad)" +
        "values (?)";
    let parametros = [req.body.prioridad];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// PARTE DE TICKET
// app.get ticket
app.get('/api/ticket/', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_ticket";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// GET TICKET POR NOMBRE_DOCENTE
app.get('/api/ticket_nombreDocente/:nombre_docente', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_ticket where nombre_docente = ?";
    let parametros = [req.params.nombre_docente];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get ticket por grado
app.get('/api/ticket_grado/:grado', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_ticket where grado = ?";
    let parametros = [req.params.grado];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// app.get ticket prioridad
app.get('/api/ticket_prioridad/:prioridad', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_ticket where prioridad = ?";
    let parametros = [req.params.prioridad];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get ticket estado
app.get('/api/ticket_estado/:estado', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "select * from tabla_ticket where estado = ?";
    let parametros = [req.params.estado];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});


// app.post ticket
app.post('/api/ticket/', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "insert into tabla_ticket" +
        "(nombre_docente, asunto, descripcion, fechaInicio, fechaResolucion, area, grado, estado, prioridad, solucion)" +
        "values (?,?,?,?,?,?,?,?,?,?)";
    let parametros = [req.body.nombre_docente, req.body.asunto, req.body.descripcion, 
        req.body.fechaInicio, req.body.fechaResolucion, req.body.area, req.body.grado,
         req.body.estado, req.body.prioridad, req.body.solucion];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.put ticket
app.put('/api/ticket/:id_ticket', (req, res) => {

    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

   // let sql = "update tabla_ticket set  nombre_docente = ?, asunto = ?, descripcion = ?, fechaInicio = ?, fechaResolucion= ?, area= ?, grado= ?, estado=?, prioridad= ?, solucion= ? where id_ticket = ?";
   // let parametros = [req.body.nombre_docente, req.body.asunto, req.body.descripcion, 
     //   req.body.fechaInicio, req.body.fechaResolucion, req.body.area, req.body.grado,
       //  req.body.estado, req.body.prioridad, req.body.solucion, req.params.id_ticket];

       let sql= "update tabla_ticket set fechaResolucion= ?, estado=?, solucion= ?, nombre_admin= ? where id_ticket = ?";
         let parametros = [req.body.fechaResolucion, req.body.estado, req.body.solucion, req.body.nombre_admin, req.params.id_ticket];
  
    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.delete ticket
app.delete('/api/ticket/:id_ticket', (req, res) => {
    let con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    let sql = "delete from tabla_ticket where id_ticket = ?";
    let parametros = [req.params.id_ticket];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});


app.listen(process.env.PORT || 3000);