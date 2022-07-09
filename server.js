// Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  port: 3301,
  user:"root",
  password:"Password11!",
  database:"employee_db"
});

// Connect to mySql server and database
connection.connect((err) => {
  if(err)throw err;
// add start function here
  start();
});



function start() {
   inquirer
   .prompt({
      name: "selection",
      type: "list",
      message: "What would you like to do?",
      choices: 
        [
            "View all departments",
            "View all roles",
            "View all employees", 
            "Add a department",
            "Add a role", 
            "Add an employee",
            "Update a role",
        ]
      })
      .then(function(answer) {
          console.log(answer);
        
        if (answer.selection === "View all departments") {
          viewDepts();
        }
        else if(answer.selection === "View all roles") {
          viewRole();
    
        } 
        else if(answer.selection === "View all employees") {
          viewAll();
    
        }
        else if(answer.selection === "Add a department") {
          addDepart();
    
        }
        else if(answer.selection === "Add a role") {
          addRole();
    
        }
        else if(answer.selection === "Add an employee") {
          addEmployee();
    
        }
        else if(answer.selection === "Update a role") {
          updateRole();
    
        }else{
          connection.end();
        }
      });
    }

    // View departments

 // VIEW FUNCTION SET
function view(){
  inquirer
    .prompt([
          {
            type:"list",
            name:"view",
            message:"Select one to view:",
            choices: ["All employess", "By department", "By role"]
          }
         ])
         .then(function(res){
             switch(res.view){
              case "All employees":
                  viewAllEmployees();
                  break;
              case "By department":
                  viewByDepartment();
                  break;
              case "By role":
                  viewByRole();I
              default:
                    console.log("default");
             }
            });
          }
                 
        

          


            // console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20

// code
