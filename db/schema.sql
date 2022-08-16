DROP DATABASE IF EXISTS schema_db;
CREATE DATABASE schema_db;
USE DATABASE schema_db; 

CREATE TABLE department(
    id INT PRIMARY KEY,

    name VARCHAR(30) NOT NULL
)

CREATE TABLE role(
    id INT PRIMARY KEY,

    title VARCHAR(30) ,

    salary DECIMAL,

    department_id INT 
)


CREATE DATABASE employee(
    id INT PRIMARY KEY

    first_name VARCHAR(30),

    last_name VARCHAR(30),

    role_id INT,

    manager_id INT
)


