-- CUSTOMER VALIDATION QUERIES


-- SQL-001 Verify Customer Exists
SELECT *
FROM customers
WHERE customer_id = 1;

-- SQL-002 Verify Customer Created Successfully
SELECT COUNT(*)
FROM customers
WHERE email = 'john@example.com';

-- SQL-003 Verify Duplicate Email Does Not Exist
SELECT email, COUNT(*)
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;

-- SQL-004 Verify Customer First Name
SELECT first_name
FROM customers
WHERE customer_id = 1;

-- SQL-005 Verify Customer Last Name
SELECT last_name
FROM customers
WHERE customer_id = 1;

-- SQL-006 Verify Customer Status
SELECT status
FROM customers
WHERE customer_id = 1;


-- ACCOUNT VALIDATION QUERIES


-- SQL-007 Verify Account Exists
SELECT *
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-008 Verify Account Type
SELECT account_type
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-009 Verify Opening Balance
SELECT balance
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-010 Verify Account Status
SELECT status
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-011 Verify Frozen Account
SELECT *
FROM accounts
WHERE status = 'FROZEN';

-- SQL-012 Verify Closed Account
SELECT *
FROM accounts
WHERE status = 'CLOSED';


-- TRANSACTION VALIDATION QUERIES


-- SQL-013 Verify Transaction Exists
SELECT *
FROM transactions
WHERE transaction_id = 1;

-- SQL-014 Verify Deposit Transaction
SELECT *
FROM transactions
WHERE transaction_type = 'DEPOSIT';

-- SQL-015 Verify Withdrawal Transaction
SELECT *
FROM transactions
WHERE transaction_type = 'WITHDRAW';

-- SQL-016 Verify Transaction Amount
SELECT amount
FROM transactions
WHERE transaction_id = 1;

-- SQL-017 Verify Latest Transaction
SELECT *
FROM transactions
ORDER BY transaction_date DESC
LIMIT 1;

-- SQL-018 Verify Transaction Count
SELECT COUNT(*)
FROM transactions;


-- TRANSFER VALIDATION QUERIES


-- SQL-019 Verify Transfer Record Exists
SELECT *
FROM transfers
WHERE transfer_id = 1;

-- SQL-020 Verify Internal Transfer
SELECT *
FROM transfers
WHERE transfer_type = 'INTERNAL';

-- SQL-021 Verify External Transfer
SELECT *
FROM transfers
WHERE transfer_type = 'EXTERNAL';

-- SQL-022 Verify Transfer Amount
SELECT amount
FROM transfers
WHERE transfer_id = 1;

-- SQL-023 Verify Transfer Date
SELECT transfer_date
FROM transfers
WHERE transfer_id = 1;


-- BALANCE VALIDATION QUERIES


-- SQL-024 Verify Account Balance
SELECT balance
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-025 Verify Source Account Balance After Transfer
SELECT balance
FROM accounts
WHERE account_number = 'ACC1001';

-- SQL-026 Verify Destination Account Balance After Transfer
SELECT balance
FROM accounts
WHERE account_number = 'ACC1002';

-- SQL-027 Verify Negative Balance Accounts
SELECT *
FROM accounts
WHERE balance < 0;

-- SQL-028 Verify High Value Accounts
SELECT *
FROM accounts
WHERE balance > 100000;


-- DATA INTEGRITY QUERIES


-- SQL-029 Verify Every Account Has Customer
SELECT a.account_number
FROM accounts a
LEFT JOIN customers c
ON a.customer_id = c.customer_id
WHERE c.customer_id IS NULL;

-- SQL-030 Verify Every Transaction Has Valid Account
SELECT t.transaction_id
FROM transactions t
LEFT JOIN accounts a
ON t.account_number = a.account_number
WHERE a.account_number IS NULL;