-- Active: 1681252546488@@127.0.0.1@3306
create table [projetorpg].[user] {
    usrid int not null auto increment PRIMARY KEY,
    name VARCHAR(30),
    username VARCHAR(15),
    email VARCHAR(40),
    password VARCHAR(30),
};