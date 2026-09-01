-- CUSTOMER VALIDATIONS
-- Verify customer exists
SELECT *
FROM customers
WHERE email='john@example.com';

-- Verify active customers
SELECT *
FROM customers
WHERE status='ACTIVE';

-- Verify duplicate email
SELECT email, COUNT(*)
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;

-- Total customers
SELECT COUNT(*)
FROM customers;

-- Customer by phone number
SELECT *
FROM customers
WHERE phone='01711111111';



-- ACCOUNT VALIDATIONS
-- Verify account exists
SELECT *
FROM accounts
WHERE account_number='ACC1001';

-- Verify active accounts
SELECT *
FROM accounts
WHERE status='ACTIVE';

-- Verify account balance
SELECT balance
FROM accounts
WHERE account_number='ACC1001';

-- Total accounts
SELECT COUNT(*)
FROM accounts;

-- Find accounts with balance > 50000
SELECT *
FROM accounts
WHERE balance > 50000;



-- TRANSACTION VALIDATIONS
-- Verify deposit transactions
SELECT *
FROM transactions
WHERE transaction_type='DEPOSIT';

-- Verify withdrawal transactions
SELECT *
FROM transactions
WHERE transaction_type='WITHDRAW';

-- Total transactions
SELECT COUNT(*)
FROM transactions;

-- Highest transaction amount
SELECT MAX(amount)
FROM transactions;

-- Lowest transaction amount
SELECT MIN(amount)
FROM transactions;



-- TRANSFER VALIDATIONS
-- Verify transfer record
SELECT *
FROM transfers
WHERE transfer_amount=5000;

-- Total transfers
SELECT COUNT(*)
FROM transfers;

-- Largest transfer
SELECT MAX(transfer_amount)
FROM transfers;

-- Smallest transfer
SELECT MIN(transfer_amount)
FROM transfers;

-- Transfers from account 1
SELECT *
FROM transfers
WHERE from_account=1;



-- JOIN VALIDATIONS
SELECT
c.customer_id,
c.first_name,
c.last_name,
a.account_number,
a.balance
FROM customers c
JOIN accounts a
ON c.customer_id=a.customer_id;