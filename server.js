// Dependencies
const express = require('express');
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require("console.table");
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to MySQL
const connection = mysql.createConnection(
  {
    host: "localhost",
    port: 3301,
    user: "root",
    password: "Password11!",
    database: "employee_db",
  },
  console.log(`Connected to MySQL`)
);

// Connect to mySql server and database
connection.connect(() => {
  start();
});

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
        connection.end();
      }
    });
}

// View departments
// function viewDepts() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "viewDepts",
//         message: "Select one to view:",
//         choices: ["Management", "File office", "HR", "Sales"],
//       },
//     ])
//   }
// 

// function to view all departments

function viewDepts() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err)
    throw err;
    console.table(res)
    start();
  })
}



// View roles
function viewRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "viewRole",
        message: "Select one to view:",
        choices: ["Store manager", "Assistant manager", "Meat manager", "Lead", "Accountant","Meat clerk", "Grocery clerk" ],
      },
    ])
  
}


// const viewRole = () => {
//   db.query("SELECT * FROM role", (err, res) => {
//     if (err)
//     throw err;
//     console.table(res)
//     start();
//   })
// }

// function to view all employees

const viewAllEmployees = () => {
  connection.query("SELECT first_name, last_name FROM employee", (err, res) => {
    if (err)
    throw err;
    console.table(res)
    start();
  })
}
