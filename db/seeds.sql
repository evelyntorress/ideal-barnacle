INSERT INTO department (dep_name)
VALUES ("Management"), 
       ("File office"), 
       ("HR"), 
       ("Sales");

INSERT INTO role 
(title, salary, department_id)
VALUES ("Store manager", 100000, 1),
       ("Lead", 60000, 2), 
       ("Accountant", 70000, 3), 
       ("Meat clerk", 30000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES("Josh", "Richardson", "Store manager", null),
 ("Suddash","Singh","Assistant Manager",1), 
 ("Bashi","Basra","Lead",2), 
 ("Abdalla","Jama","Accountant",3),
