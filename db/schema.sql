DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE DATABASE employee_db; 


/*DEPARTMENT TABLE*/
CREATE TABLE department(
    id INT PRIMARY KEY,

    name VARCHAR(30) NOT NULL
)

/*ROLE TABLE*/

CREATE TABLE role(
    id INT PRIMARY KEY,

    title VARCHAR(30) ,

    salary DECIMAL,

    department_id INT 
)

/*EMPLOYEE*/
CREATE DATABASE employee(
    id INT PRIMARY KEY

    first_name VARCHAR(30),

    last_name VARCHAR(30),

    role_id INT,

    manager_id INT
)


