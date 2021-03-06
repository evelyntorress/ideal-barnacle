// Dependencies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();
const table = require("console.table");
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password11!",
    database: "employee_db",
  },
  console.log(`Connected to MySQL`)
);

// Connect to mySql server and database
db.connect(function (err) {
  if (err) throw err;
  start();
});

//  Starts the prompt with questions
function start() {
  inquirer
    .prompt({
      name: "selection",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update a role",
      ],
    })
    .then(function (answer) {
      console.log(answer);

      if (answer.selection === "View all departments") {
        viewDepts();
      } else if (answer.selection === "View all roles") {
        viewRole();
      } else if (answer.selection === "View all employees") {
        viewAllEmployees();
      } else if (answer.selection === "Add a department") {
        addDepartment();
      } else if (answer.selection === "Add a role") {
        addRole();
      } else if (answer.selection === "Add an employee") {
        addEmployee();
      } else if (answer.selection === "Update a role") {
        updateRole();
      } else {
        db.end();
      }
    });
}

// View departments

function viewDepts() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}
// View roles

function viewRole() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// View all employees

function viewAllEmployees() {
  db.query(
    "SELECT * FROM employee",
    (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    }
  );
}

// Add department

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Insert a new department",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO department VALUE (DEFAULT, ?)",
        [answer.department],
        function (err) {
          if (err) throw err;
          console.log(`Department added.`);
          start();
        }
      );
    });
}

// Add role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Role title",
      },
      {
        type: "number",
        name: "salary",
        message: "Enter salary",
      },
      {
        type: "number",
        name: "department_id",
        message: "Enter the Department id ",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id,
        },

        function (err) {
          if (err) throw err;
          console.log(`Role added.`);
          start();
        }
      );
    });  
}

// Add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter first name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter last name",
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter role",
      },
      {
        type: "number",
        name: "manager_id",
        message: "Enter manager",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id,
        },

        function (err) {
          if (err) throw err;
          console.log(`Employee added.`);
          start();
        }
      );
    });
}


// Update an employee role
         
function updateRole() {
  db.promise().query("SELECT * FROM employee").then(([rows]) => {
      console.table(rows)
  }).then(() => {
      db.promise().query("SELECT * FROM role").then(([rows]) => {
          console.table(rows)
          inquirer.prompt([
              {
                  type: "number",
                  name: "roleId",
                  message: "Enter role id"
              }, {
                  type: "number",
                  name: "employeeId",
                  message: "Enter employee id"
              }, {
                type: "number",
                name: "newRole",
                message: "Enter employee new role"
            },

          ]).then(function (answer) {
              db.query("UPDATE employee SET role_id = ? WHERE id = ?", [
                  answer.roleId, answer.employeeId, answer.newRole,
              ], function (err) {
                  if (err) 
                      throw err;
                  
                  console.log(`Employee updated.`);
                  start();
              });
          });


      })
  })
}