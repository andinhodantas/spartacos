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

--INCLUSÃO DE INSERTS E SELECT MALUCO

INSERT INTO usuario (nome, email, senha)
VALUES ('Amanda', 'amanda@mail.com', 'iloveacademia');

INSERT INTO usuario (nome, email, senha)
VALUES ('Claudio', 'claudiosv@mail.com', 'ilovesaovicente');

INSERT INTO treino (nome, id_usuario)
VALUES ('Treino de Amanda', 1);

-- ALTER TABLE exercicios
-- ADD COLUMN id_usuario INTEGER,
-- ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id);


-- INSERT INTO treino (nome, id_usuario)
-- VALUES ('Treino de Claudio', 2);

-- INSERT INTO exercicios (nome, id_usuario)
-- VALUES ('Monociculo', 1);

-- INSERT INTO exercicios (nome, id_usuario)
-- VALUES ('Triciculo', 1);

-- INSERT INTO exercicios (nome, id_usuario)
-- VALUES ('Quadriciculo', 1);

-- INSERT INTO exercicios (nome, id_usuario)
-- VALUES ('Tudo', 2);

INSERT INTO exercicios (nome)
VALUES ('Monociculo');

INSERT INTO exercicios (nome)
VALUES ('Triciculo');

INSERT INTO exercicios (nome)
VALUES ('Quadriciculo');

INSERT INTO exercicios (nome)
VALUES ('Tudo');

INSERT INTO treino_exercicios (carga, repeticoes, serie, id_treino, id_usuario, id_exercicios)
VALUES (100, 10, 3, 1, 1, 1);

INSERT INTO treino_exercicios (carga, repeticoes, serie, id_treino, id_usuario, id_exercicios)
VALUES (80, 12, 4, 1, 1, 2);

INSERT INTO treino_exercicios (carga, repeticoes, serie, id_treino, id_usuario, id_exercicios)
VALUES (60, 15, 3, 1, 1, 3);

INSERT INTO treino_exercicios (carga, repeticoes, serie, id_treino, id_usuario, id_exercicios)
VALUES (70, 8, 3, 2, 2, 4);

SELECT usuario.nome AS Nome, treino.nome AS Nome_Treino, exercicios.nome AS Nome_Exercicio, treino_exercicios.carga AS Carga, treino_exercicios.repeticoes AS Repeticoes, treino_exercicios.serie AS Serie FROM usuario
JOIN treino ON usuario.id = treino.id_usuario
JOIN treino_exercicios ON usuario.id = treino_exercicios.id_usuario
JOIN exercicios ON exercicios.id = treino_exercicios.id_exercicios
WHERE usuario.id = 1;
