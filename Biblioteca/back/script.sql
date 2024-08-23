drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table pedidos(
    id integer primary key auto_increment,
    livro varchar(150) not null,
    autor varchar(100) not null,
    publicacao int(8) not null,
    descricao varchar(200) not null,
    numeracao varchar(255) not null
);

show tables;