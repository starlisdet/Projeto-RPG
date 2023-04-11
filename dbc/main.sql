-- Active: 1681252546488@@127.0.0.1@3306
create table [projetorpg].[user] {
    usrid int auto_increment PRIMARY KEY,
    name VARCHAR(30) not null,
    email VARCHAR(40) not null,
    password VARCHAR(30) not null,
};