# Banking API Documentation

## Base URL

```http
https://api.bankingsystem.com/api/v1
```

---

# Authentication APIs

## 1. Login

### Endpoint

```http
POST /auth/login
```

### Headers

```json
{
  "Content-Type": "application/json"
}
```

### Request Body

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Expected Response

```json
{
  "success": true,
  "token": "jwt_token_here",
  "message": "Login Successful"
}
```

### Status Code

```http
200 OK
```

### Postman Test

```javascript
pm.test("Status Code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Token Exists", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.exist;
});
```

---

## 2. Logout

### Endpoint

```http
POST /auth/logout
```

### Headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

### Expected Response

```json
{
  "message": "Logout Successful"
}
```

---

## 3. Forgot Password

### Endpoint

```http
POST /auth/forgot-password
```

### Request

```json
{
  "email": "john@example.com"
}
```

### Expected Response

```json
{
  "message": "Reset link sent"
}
```

---

# Customer APIs

## 4. Create Customer

### Endpoint

```http
POST /customers
```

### Headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

### Request

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "01711111111"
}
```

### Expected Response

```json
{
  "customerId": 101,
  "message": "Customer Created Successfully"
}
```

### Postman Test

```javascript
pm.test("Customer Created", function () {
    pm.response.to.have.status(201);
});
```

---

## 5. Get Customer

### Endpoint

```http
GET /customers/101
```

### Expected Response

```json
{
  "customerId": 101,
  "firstName": "John",
  "lastName": "Doe"
}
```

---

## 6. Update Customer

### Endpoint

```http
PUT /customers/101
```

### Request

```json
{
  "phone": "01888888888"
}
```

### Expected Response

```json
{
  "message": "Customer Updated Successfully"
}
```

---

## 7. Delete Customer

### Endpoint

```http
DELETE /customers/101
```

### Expected Response

```json
{
  "message": "Customer Deleted Successfully"
}
```

---

# Account APIs

## 8. Create Account

### Endpoint

```http
POST /accounts
```

### Request

```json
{
  "customerId": 101,
  "accountType": "SAVINGS",
  "openingBalance": 50000
}
```

### Expected Response

```json
{
  "accountNumber": "ACC1001",
  "message": "Account Created"
}
```

---

## 9. Get Account

### Endpoint

```http
GET /accounts/ACC1001
```

---

## 10. Freeze Account

### Endpoint

```http
PUT /accounts/freeze
```

### Request

```json
{
  "accountNumber": "ACC1001"
}
```

### Expected Response

```json
{
  "status": "FROZEN"
}
```

---

## 11. Close Account

### Endpoint

```http
PUT /accounts/close
```

### Request

```json
{
  "accountNumber": "ACC1001"
}
```

### Expected Response

```json
{
  "status": "CLOSED"
}
```

---

# Transfer APIs

## 12. Internal Transfer

### Endpoint

```http
POST /transfers/internal
```

### Request

```json
{
  "fromAccount": "ACC1001",
  "toAccount": "ACC1002",
  "amount": 5000
}
```

### Expected Response

```json
{
  "message": "Transfer Successful"
}
```

### Validation

* Status Code = 200
* Source Balance Reduced
* Destination Balance Increased
* Transfer Record Created

---

## 13. External Transfer

### Endpoint

```http
POST /transfers/external
```

### Request

```json
{
  "fromAccount": "ACC1001",
  "bankCode": "DBBL",
  "beneficiaryAccount": "123456789",
  "amount": 5000
}
```

### Expected Response

```json
{
  "message": "Transfer Successful"
}
```

---

# Transaction APIs

## 14. Deposit

### Endpoint

```http
POST /transactions/deposit
```

### Request

```json
{
  "accountNumber": "ACC1001",
  "amount": 10000
}
```

### Expected Response

```json
{
  "message": "Deposit Successful"
}
```

---

## 15. Withdraw

### Endpoint

```http
POST /transactions/withdraw
```

### Request

```json
{
  "accountNumber": "ACC1001",
  "amount": 2000
}
```

### Expected Response

```json
{
  "message": "Withdrawal Successful"
}
```

---

## 16. Transaction History

### Endpoint

```http
GET /transactions/history/ACC1001
```

### Expected Response

```json
[
  {
    "transactionId": 1,
    "amount": 5000,
    "type": "TRANSFER"
  }
]
```

---

# Common API Validations

For every API verify:

* Status Code
* Response Body
* Response Time
* Headers
* Authentication
* Authorization
* Business Rules
* Database Consistency

---

# Authentication Scenarios

* Valid JWT Token
* Invalid JWT Token
* Expired JWT Token
* Missing JWT Token

---

# Negative Testing Scenarios

* Blank Fields
* Invalid Account Number
* Duplicate Customer
* Duplicate Account
* Insufficient Balance
* Transfer Limit Exceeded
* Invalid Email Format

---

# Security Testing Scenarios

* SQL Injection
* XSS Validation
* Unauthorized Access
* Role-Based Access Control
* Session Management
