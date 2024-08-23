drop database if exists cantina;
create database cantina;
use cantina;

create table produtos(
    id integer primary key auto_increment,
    nome varchar(100) not null,
    preco varchar(100) not null,
    descricao varchar(255) not null,
    custo varchar(255) not null
);

show tables;