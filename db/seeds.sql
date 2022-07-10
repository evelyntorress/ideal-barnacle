USE employee_db

INSERT INTO department(name)
VALUES ("Management"), 
       ("File office"), 
       ("HR"), 
       ("Sales");

INSERT INTO role 
(title, salary, department_id)
VALUES ("Store manager", 100000, 1),
       ("Asistant manager", 80000, 1)
       ("Lead", 60000, 2), 
       ("Accountant", 70000, 1), 
       ("Meat clerk", 30000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Richardson", 1, 1),
 ("Suddash","Singh", 2, 1), 
 ("Bashi", "Basra", 1, 2), 
 ("Abdalla","Jama",2, 2),
 ("Michael", "Wong", 4, 4);