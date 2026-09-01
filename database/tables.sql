CREATE DATABASE banking_db;
USE banking_db;
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO customers
(first_name,last_name,email,phone,date_of_birth)
VALUES
('John','Doe','john@example.com','01711111111','1995-05-10'),
('Sarah','Smith','sarah@example.com','01822222222','1998-08-15'),
('David','Brown','david@example.com','01933333333','1992-12-01');

CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    account_number VARCHAR(20) UNIQUE,
    account_type VARCHAR(20),
    balance DECIMAL(12,2),
    status VARCHAR(20) DEFAULT 'ACTIVE',

    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id)
);

INSERT INTO accounts
(customer_id,account_number,account_type,balance)
VALUES
(1,'ACC1001','Savings',50000),
(2,'ACC1002','Savings',25000),
(3,'ACC1003','Current',100000);
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.account_number,
    a.balance
FROM customers c
INNER JOIN accounts a
ON c.customer_id = a.customer_id;

CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    transaction_type VARCHAR(20) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (account_id)
    REFERENCES accounts(account_id)
);
INSERT INTO transactions
(account_id, transaction_type, amount)
VALUES
(1,'DEPOSIT',10000),
(1,'WITHDRAW',2000),
(2,'DEPOSIT',5000),
(3,'DEPOSIT',25000);
CREATE TABLE transfers (
    transfer_id INT AUTO_INCREMENT PRIMARY KEY,
    from_account INT NOT NULL,
    to_account INT NOT NULL,
    transfer_amount DECIMAL(12,2) NOT NULL,
    transfer_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO transfers
(from_account,to_account,transfer_amount)
VALUES
(1,2,5000),
(2,3,1000),
(3,1,2000);