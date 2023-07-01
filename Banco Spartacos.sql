DROP DATABASE IF EXISTS spartacos;
CREATE DATABASE IF NOT EXISTS Spartacos; 
use Spartacos;
CREATE TABLE usuario (
	id integer auto_increment,
    nome varchar(50),
    email varchar(60) unique,
    senha varchar(255),
    primary key (id)
);
CREATE TABLE treino (
	id integer auto_increment,
    nome varchar(50),
    id_usuario integer,
    primary key (id),
    foreign key (id_usuario)
		references usuario(id)
);
CREATE TABLE exercicios (
	id integer auto_increment,
    nome varchar(50),
    primary key (id)
);
CREATE TABLE treino_exercicios (
	carga integer ,
    repeticoes integer ,
    serie integer ,
    id_treino integer not null,
    id_usuario integer not null,
    id_exercicios integer  not null,
    primary key (id_usuario,id_exercicios,id_treino),
    foreign key (id_usuario)
		references usuario(id),
	foreign key (id_exercicios)
		references exercicios(id),
	foreign key (id_treino)
		references treino(id)
);