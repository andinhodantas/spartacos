DROP DATABASE IF EXISTS hotel;
CREATE DATABASE IF NOT EXISTS hotel;

use hotel;

CREATE TABLE clientes (
	id integer auto_increment,
    nome varchar(50),
    login varchar(20) unique,
    cpf char(14) unique,
    senha varchar(255),
    data_nascimento datetime,
    primary key (id)
);

CREATE TABLE categoria_quartos (
	id integer auto_increment,
    nome varchar(50),
    capacidade integer,
    valor_diaria numeric(7, 2),
    primary key (id)
);

CREATE TABLE quartos (
	id integer auto_increment,
    nome varchar(50),
    id_categoria integer,
    primary key (id),
    foreign key (id_categoria)
		references categoria_quartos(id)
);

CREATE TABLE reservas (
	id integer auto_increment,
    id_cliente integer not null,
    id_quarto integer not null,
    diarias integer not null,
    data_agendamento datetime not null,
    check_in datetime,
    check_out datetime,
    primary key(id),
    foreign key (id_cliente)
		references clientes(id),
	foreign key (id_quarto)
		references quartos(id)
);


DELIMITER //
CREATE PROCEDURE cadastrar_cliente(nome varchar(50),
cpf char(14), login varchar(20), senha varchar(255),
data_nascimento datetime)
BEGIN
	INSERT INTO clientes (clientes.nome, clientes.cpf,
    clientes.login, clientes.senha,
    clientes.data_nascimento)
    VALUES
    (nome, cpf, login, MD5(senha), data_nascimento);
END //

CREATE PROCEDURE cadastrar_categoria_quarto(nome varchar(50),
capacidade integer, valor_diaria numeric(7,2))
BEGIN
	INSERT INTO categoria_quartos (categoria_quartos.nome,
    categoria_quartos.capacidade,
    categoria_quartos.valor_diaria)
    VALUES
    (nome, capacidade, valor_diaria);
END //

CREATE PROCEDURE cadastrar_quarto(nome varchar(50),
id_categoria integer)
BEGIN
	INSERT INTO quartos (quartos.nome,
    quartos.id_categoria)
    VALUES
    (nome, id_categoria);
END //

CREATE PROCEDURE fazer_reservas(id_cliente integer, 
id_quarto integer, diarias integer, data_agendamento datetime)
BEGIN
	INSERT INTO reservas (reservas.id_cliente,
    reservas.id_quarto, reservas.diarias,
    reservas.data_agendamento)
    VALUES
    (id_cliente, id_quarto, diarias, data_agendamento);
END //
					
                    -- Inicio da questão 01
CREATE TRIGGER validar_check_in BEFORE update
ON reservas FOR EACH ROW
BEGIN
	if (old.data_agendamento > new.check_in) then
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'A data de check_in deve ser posterior a data de agendamento';
	end if;
END //
					-- Fim da Questão 01 

					-- Inicio da questão 02
CREATE TRIGGER validar_conflito_datas BEFORE INSERT
ON reservas FOR EACH ROW
BEGIN
	DECLARE date_sum datetime;
	DECLARE new_date_sum datetime;

	select date_add(data_agendamento, interval diarias day)
	from reservas where id_quarto = new.id_quarto
	into date_sum;
    
	select date_add(new.data_agendamento, interval new.diarias day)
	from reservas where id_quarto = new.id_quarto
	into new_date_sum;
    
	if exists (select id_quarto from reservas where new.id_quarto = reservas.id_quarto 
    and new.data_agendamento = reservas.data_agendamento
    
    or( new_date_sum > reservas.data_agendamento -- final dentro
    and new_date_sum <= date_sum )
    
	or ( new.data_agendamento > reservas.data_agendamento    -- inicio dentro
    and new.data_agendamento < date_sum)
    
    or  new.data_agendamento < reservas.data_agendamento    -- os dois fora
    and new_date_sum > date_sum
    ) then
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Este quarto já esta agendado para está data.';
	end if;
END //
								-- Fim da Questão 02 
                                
								-- Inicio da questão 03
create procedure quartos_disponiveis(inicio datetime, fim datetime)
BEGIN
	select quartos.id,quartos.nome,categoria_quartos.valor_diaria from quartos join categoria_quartos  
    on quartos.id_categoria = categoria_quartos.id  where quartos.id not in 
	(select id_quarto from reservas where quartos.id = reservas.id_quarto 
    and data_agendamento = inicio
    
    or data_agendamento = fim
    
    or (fim > reservas.data_agendamento
	and fim <= date_add(data_agendamento, interval diarias day))
    
	or (inicio > reservas.data_agendamento
    and inicio < date_add(data_agendamento, interval diarias day))
    
    or (inicio < reservas.data_agendamento
    and fim > date_add(data_agendamento, interval diarias day))
    ) ;
END //
							-- Fim da Questão 03

CREATE TRIGGER validar_data_reserva BEFORE INSERT
ON reservas FOR EACH ROW
BEGIN
	if (new.data_agendamento < now()) then
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'A data de agendamento
        deve ser posterior a data de hoje';
	end if;
END //

CREATE FUNCTION valor_total_reserva(id_reserva integer)
RETURNS numeric(7, 2) DETERMINISTIC
BEGIN
	DECLARE total numeric(7, 2);
    
    SELECT reservas.diarias * categoria_quartos.valor_diaria
    INTO total
    FROM reservas join quartos
    ON reservas.id_quarto = quartos.id
    JOIN categoria_quartos
    ON quartos.id_categoria = categoria_quartos.id
    where reservas.id = id_reserva;    
    
    RETURN total;
END //

					
DELIMITER ;

CALL cadastrar_cliente('Asafe', '111.111.111-11',
'html.css', 'amorHtMl', '2002-05-27');
CALL cadastrar_cliente('Ale', '222.222.222-22',
'asafinho', 'brincadeira', '1979-01-31');

CALL cadastrar_categoria_quarto('Simples', 1, 100);
CALL cadastrar_categoria_quarto('Casal', 2, 130);
CALL cadastrar_categoria_quarto('Master', 4, 200);
CALL cadastrar_categoria_quarto('Suite Presidencial', 2, 500);

SET @id_simples = (SELECT id from categoria_quartos
					where nome = 'Simples');
SET @id_casal = (SELECT id from categoria_quartos
					where nome = 'Casal');
SET @id_master = (SELECT id from categoria_quartos
					where nome = 'Master');
SET @id_suite = (SELECT id from categoria_quartos
					where nome = 'Suite Presidencial');

CALL cadastrar_quarto('101', @id_simples);
CALL cadastrar_quarto('102', @id_simples);
CALL cadastrar_quarto('103', @id_casal);
CALL cadastrar_quarto('201', @id_simples);
CALL cadastrar_quarto('202', @id_simples);
CALL cadastrar_quarto('203', @id_master);
CALL cadastrar_quarto('301', @id_suite);
CALL cadastrar_quarto('401', @id_suite);

SET @id_asafe = (SELECT id from clientes 
					where nome = 'Asafe');
SET @id_ale = (SELECT id from clientes 
					where nome = 'Ale');
SET @id_q401 = (SELECT id from quartos 
					where nome = '401');
SET @id_q103 = (SELECT id from quartos 
					where nome = '103');

CALL fazer_reservas(@id_asafe, @id_q401, 5, '2022-12-25');
CALL fazer_reservas(@id_ale, @id_q103, 2, '2022-12-31');

				-- Verificaçao da questão 01
UPDATE reservas set check_in='2022-12-28' where id = 1;
UPDATE reservas set check_in='2022-12-28' where id = 2;

		-- Verificaçao da questão 02
-- CALL fazer_reservas(10, 3, 7, '2022-12-28');
-- CALL fazer_reservas(10, 8, 3, '2022-12-24');
-- CALL fazer_reservas(10, 8, 15, '2022-12-23');

		-- Verificação da questão 03
call quartos_disponiveis ('2022-12-20','2022-12-31');
call quartos_disponiveis ('2022-12-20','2022-12-26');
call quartos_disponiveis ('2022-12-10','2022-12-15');

select valor_total_reserva(id) from reservas;

-- select * from clientes;
-- select * from categoria_quartos;
-- select * from quartos;
-- select * from reservas;



