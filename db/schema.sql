DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_id INT,
    role_id INT,
    manager_id INT, 
);

INSERT INTO department (name)
VALUES ("Management"), ("File office"), ("HR"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Store manager", 100000, 1), ("Lead", 60000, 2), ("Accountant", 70000, 3), ("Meat clerk", 30000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Josh", "Richardson", "Store manager", null), ("Suddash","Singh","Assistant Manager",1), ("Bashi","Basra","Lead",2), ("Abdalla","Jama","Accountant",3),