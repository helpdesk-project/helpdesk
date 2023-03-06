### Lineas de codigo
#### Tienen que cambia la password de la base de datos que ustedes tienen!!!

Parte del docente va desde la linea 12 hasta 275
Parte administrador va desde la linea 276 hasta  427
Parte del ticket va desde la linea 428 hasta  
Parte de estado,area,prioridad,grado linea 429 a 671
parte de ticket linea 672 a 913


## Login para docentes
Esta en la linea 241 parametros: correo_docente y pass

## Login para administrador
Esta en la linea 394 parametros: correo_admin y pass_admin

## Para tickes habilite estas busquedad
Linea 703 app.get('/api/ticket_nombreDocente/:nombre_docente' = Buscar ticket por nombre del docente
Linea 731 app.get('/api/ticket_grado/:grado' = Buscar ticket por grado
Linea 769 app.get('/api/ticket_prioridad/:prioridad' = Buscar ticket por prioridad
Linea 787 pp.get('/api/ticket_estado/:estado' = Buscar ticket por estado

### Los datos de las tablas las dejare en el archivo bd.sql!!!

 el docente debe enviar los siguientes datos nombre_docente,asunto,descripcion, fechaInicio, area,grado,prioridad
 Y el administrador hara PUT con los siguientes: fechaResolucion, estado, solucion, nombre_admin y parametro id_ticket