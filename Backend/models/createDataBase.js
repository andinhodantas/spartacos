const connection = require('./db')

const create = async () => {
    const usuario = `CREATE TABLE IF NOT EXISTS usuario (
                        id integer auto_increment,
                        nome varchar(50),
                        email varchar(60) unique,
                        senha varchar(255),
                        primary key (id)
                    )` 

    const treino = `CREATE TABLE IF NOT EXISTS treino (
                        id integer auto_increment,
                        nome varchar(50),
                        id_usuario integer,
                        primary key (id),
                        foreign key (id_usuario)
                            references usuario(id)
                    )`
    
    const exe = `CREATE TABLE IF NOT EXISTS exercicios (
                    id integer auto_increment,
                    nome varchar(50),
                    primary key (id)
                )`
    
    const treino_exe = `CREATE TABLE IF NOT EXISTS treino_exercicios (
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
                        )`

    await connection.execute(usuario)
    await connection.execute(treino)
    await connection.execute(exe)
    await connection.execute(treino_exe)

    }

    module.exports = create

