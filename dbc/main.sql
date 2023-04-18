create SCHEMA projetorpg;
create table user {
    usrid int auto_increment PRIMARY KEY,
    name VARCHAR(30) not null,
    email VARCHAR(40) not null,
    password VARCHAR(30) not null,
};
CREATE TABLE characters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  race VARCHAR(255) NOT NULL,
  class VARCHAR(255) NOT NULL,
  level INT NOT NULL,
  hp INT NOT NULL,
  ac INT NOT NULL,
  str INT NOT NULL,
  dex INT NOT NULL,
  con INT NOT NULL,
  intelligence INT NOT NULL,
  wis INT NOT NULL,
  cha INT NOT NULL
);