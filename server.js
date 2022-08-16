//REQUIRE PACKAGES//

const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable = require('console.table');
const PORT = process.env.PORT || 3001;


//SETTING UP CONNECTION TO DATABASE
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'mysqlpassword',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

//START OF THE APLLICATION
start();
function start() {
inquirer
    .prompt([
        {
            type: "list",
            name: "start",
            message: "Select information from employees, departments, and employee roles. What do you choose? ",
            choices: ["View", "Add", "Update", "Exit"]
        }
    ]).then (function(res){
        switch(res.start){
            case "View":
                view();
                break;
            case "Add":
                add();
                break;
            case "Update":
                update();
                break;
            case "Exit":
                console.log("Done");
        }
    })
    };


//VIEW FUNCTION
function view(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "view",
            message: "Select onw of the following options to view",
            choices: ["View all exployees", "View all exployees by department", "View all exployees by role", "Exit"]
        }
    ]).then (function(res){
        switch(res.view){
            case "All employees":
                allEmployees();
                break;
            case "by Department":
                byDepartment();
                break;
            case "By Role":
                byRole();
                break;
            case "Exit":
                console.log("Done");
        }
    });
    
}