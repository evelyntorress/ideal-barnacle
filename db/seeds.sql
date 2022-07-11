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
VALUES ("Josh", "Richardson", "Store manager", NULL),
 ("Suddash","Singh", "Assistant manager", 1), 
 ("Bashi", "Basra", "Lead", 1), 
 ("Ana","Jara","Accountant", 1),
 ("Mannahz","Monfared","Lead", 1),
 ("Devang","Khanpara","Grocery clerk", 1),
 ("Colette","Petrovic","Meat clerk", 4),
 ("Vat","Babic","Grocery clerk", 1),
 ("Steve","Rowden", "Meat manager", 1),
 ("Michael", "Wong", "Meat clerk", 4);