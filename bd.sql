create database ticket_proyectoPW2;

create table tabla_docente
(
    nombre_docente varchar(100) primary key,
    identidad_docente varchar(100), 
    correo_docente varchar(50),
    pass varchar(50),
    telefono varchar(50),
    active boolean
);

insert into tabla_docente(nombre_docente, identidad_docente,correo_docente,pass,telefono,active)
values
('docente1','0801', 'docente1@gmail.com','hola1234','+504 99-12-11-21',true),
('docente2','0802', 'docente2@gmail.com','hola1234','22-21-12-120',true);

insert into tabla_docente(nombre_docente, identidad_docente,correo_docente,pass,telefono,active)
values
('docente3','0803', 'docente3@gmail.com','hola1234','99-12-12-12',false),
('docente4','0804', 'docente4@gmail.com','hola1234','34-34-12-67',false);


create table tabla_administrador
(
nombre_admin varchar(100) primary key,
correo_admin varchar(100),
pass_admin varchar(100),
active boolean
);

insert into tabla_administrador(nombre_admin,correo_admin,pass_admin,active)
values
('adminstrador1', 'administrador1@hotmail.com', 'hola1234', true);

create table tabla_estado(
estado varchar(50) primary key
);
#consultas para estado
insert into tabla_estado(estado)
values
('En espera'),
('En proceso'),
('Finalizado');

create table tabla_grado(
 grado varchar(50)primary key
);

# insert grados
insert into tabla_grado(grado)
values
('Kinder'),
('Prepa 1'),
('Prepa 2'),
('Primero 1'),
('Primero 2'),
('Segundo 1'),
('Segundo 2'),
('Tercero 1'),
('Tercero 2'),
('Cuarto 1'),
('Cuarto 2'),
('Quinto 1'),
('Quinto 2'),
('Sexto 1'),
('Sexto 2'),
('Septimo bl'),
('Noveno bl'),
('Octavo bl'),
('Septimo a '),
('Septimo b'),
('Octavo a'),
('Octavo b'),
('Noveno'),
('I bachillerato a'),
('I bachillerato b'),
('II bachillerato a'),
('II bachillerato b'),
('Informatica');

create table tabla_area(
area varchar(50) primary key
);
#consultas para area
insert into tabla_area(area)
values
('Bilingüe'),
('Colegio'),
('CFP');

create table tabla_prioridad(
prioridad varchar(50) primary key
);
#consultas para prioridad
insert into tabla_prioridad(prioridad)
values
('Alta'),
('Baja'),
('Media'),
('Urgente');

create table tabla_ticket
(
id_ticket int auto_increment primary key,
nombre_docente varchar(100),
asunto varchar(500),
descripcion varchar(500),
fechaInicio date,
fechaResolucion date,
area varchar(50),
grado varchar(50),
estado varchar(50),
prioridad varchar(50),
solucion varchar(500),
nombre_admin varchar(100),
constraint foreign key fk_nombre_docente(nombre_docente) references tabla_docente(nombre_docente),
constraint foreign key fk_area(area) references tabla_area(area),
constraint foreign key fk_grado(grado) references tabla_grado(grado),
constraint foreign key fk_estado(estado) references tabla_estado(estado),
constraint foreign key fk_prioridad(prioridad) references tabla_prioridad(prioridad),
constraint foreign key fk_nombre_admin(nombre_admin) references tabla_administrador(nombre_admin)
);

insert into tabla_ticket(nombre_docente,asunto,descripcion, fechaInicio, area,grado,prioridad)
values
('docente1','Problemas Wifi','nuevamente tengo problemas con el wifi', '2023-03-04', 'Bilingüe', 'Kinder','Alta'),
('docente2','refrigerador','La refrigeradora no sirve', '2023-03-04', 'Colegio', 'Noveno','Alta');

# update ticket se llenan los campos de fechaResolucion, estado, solucion, nombre_admin
update tabla_ticket set fechaResolucion='2023-04-12', estado='Finalizado', solucion='Compre otro router', nombre_admin='?' where id_ticket='1';