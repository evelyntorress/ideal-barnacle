USE employee_db

INSERT INTO department(name)
VALUES ("Management"), 
       ("File office"), 
       ("Grocery"), 
       ("Meat department");

INSERT INTO role 
(title, salary, department_id)
VALUES ("Store manager", 100000, 1),
       ("Assistant manager", 80000, 1),
       ("Meat manager", 70000, 4),
       ("Lead", 60000, 2), 
       ("Accountant", 70000, 1), 
       ("Meat clerk", 30000, 4),
       ("Grocery clerk", 30000, 3);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Richardson", 1, NULL),
 ("Suddash","Singh", 2, 1), 
 ("Bashi", "Basra", 3, 1), 
 ("Abdalla","Jama",5, 1),
 ("Mannahz","Monfared",3, 1),
 ("Devang","Khanpara",6, 1),
 ("Colette","Petrovic",6, 4),
 ("Vat","Babic",6, 1),
 ("Steve","Rowden",4, 1),
 ("Michael", "Wong", 6, 4);