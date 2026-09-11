# Banking QA Automation Suite

## Overview

The **Banking QA Automation Suite** is an industry-style QA portfolio project designed to demonstrate manual testing, automation testing, API testing, database testing, defect management, and QA documentation for a Banking Customer Management System.

Watch the video demonstration here:

[![Banking QA Automation Suite Demo](https://img.youtube.com/vi/KZm19rkT6zI/0.jpg)](https://www.youtube.com/watch?v=KZm19rkT6zI)

This project follows real-world QA practices used in Banking and FinTech applications and showcases skills required for:

* QA Engineer
* Software Test Engineer
* QA Automation Engineer
* FinTech QA Engineer
* SDET (Entry Level)

---

# Project Objectives

The primary goals of this project are:

* Validate banking business workflows
* Perform functional and regression testing
* Automate critical user journeys using Cypress
* Validate APIs using Postman
* Verify backend data using SQL
* Track defects using professional bug reports
* Follow SDLC, STLC, Agile, and Scrum practices
* Build a recruiter-friendly QA portfolio

---

# Banking Modules Covered

## Authentication & Authorization

* Login
* Logout
* Invalid Login
* Forgot Password
* Session Validation
* Role-Based Access Control

## Customer Management

* Add Customer
* Update Customer
* Delete Customer
* Search Customer
* View Customer Profile

## Account Management

* Create Account
* Update Account
* Freeze Account
* Close Account

## Fund Transfer

* Internal Transfer
* External Transfer
* Balance Validation
* Transfer Validation

## Transaction Management

* Deposit
* Withdraw
* Transaction History
* Transaction Search

---

# Technology Stack

| Tool       | Purpose             |
| ---------- | ------------------- |
| Cypress    | UI Automation       |
| JavaScript | Test Scripting      |
| Postman    | API Testing         |
| MySQL      | Database            |
| SQL        | Database Validation |
| Git        | Version Control     |
| GitHub     | Portfolio Hosting   |

---

# Project Structure

```text
Banking-QA-Automation-Suite
│
├── cypress
│   ├── e2e
│   │   ├── authentication
│   │   ├── customer
│   │   ├── account
│   │   └── transfer
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   ├── pages
│   │   ├── LoginPage.js
│   │   ├── CustomerPage.js
│   │   ├── AccountPage.js
│   │   └── TransferPage.js
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── database
│   ├── schema.sql
│   ├── seed_data.sql
│   └── validation_queries.sql
│
├── postman
│   └── Banking_API_Collection.json
│
├── test-cases
│
├── bug-reports
│
├── reports
│
├── screenshots
│
├── docs
│   ├── TestPlan.md
│   ├── TestExecutionReport.md
│   └── DefectTracker.xlsx
│
├── package.json
└── README.md
```

---

# QA Automation Learning Guide

This section is intentionally written so that I can revisit the project later and quickly remember how Cypress automation works.

---

## What is Cypress?

Cypress is a modern end-to-end testing framework used to automate web applications.

Manual Action:

```text
Open Website
Type Username
Type Password
Click Login
Verify Dashboard
```

Automation Version:

```javascript
cy.visit()
cy.get()
cy.type()
cy.click()
cy.should()
```

---

# Core Cypress Commands

## Open Page

```javascript
cy.visit('/login')
```

Meaning:

```text
Open the login page
```

---

## Find Element

```javascript
cy.get('input[name="username"]')
```

Meaning:

```text
Find username textbox
```

---

## Type Text

```javascript
cy.get('input[name="username"]')
  .type('Admin')
```

Meaning:

```text
Enter Admin into textbox
```

---

## Click Element

```javascript
cy.get('button')
  .click()
```

Meaning:

```text
Perform mouse click
```

---

## Assertion

```javascript
cy.url()
  .should('include','dashboard')
```

Meaning:

```text
Verify expected result
```

Assertions determine whether a test passes or fails.

---

# What is a Locator?

A locator tells Cypress where an element exists.

Example HTML:

```html
<input name="username">
```

Locator:

```javascript
input[name="username"]
```

Used as:

```javascript
cy.get('input[name="username"]')
```

---

# What is a Page Object Model (POM)?

Page Object Model is a design pattern where page elements and page actions are separated from test scripts.

Instead of writing:

```javascript
cy.get('input[name="username"]').type('Admin')
cy.get('input[name="password"]').type('admin123')
cy.get('button[type="submit"]').click()
```

We create:

```javascript
loginPage.login('Admin','admin123')
```

Benefits:

* Reusable
* Cleaner code
* Easy maintenance
* Industry standard

---

# Framework Architecture

## Fixtures

Purpose:

Store test data.

Example:

```json
{
  "admin": {
    "username": "Admin",
    "password": "admin123"
  }
}
```

Usage:

```javascript
cy.fixture('users')
```

---

## Pages

Purpose:

Store locators and actions.

Example:

```javascript
enterUsername(username)
```

Meaning:

```text
Find username field and type value
```

---

## E2E Tests

Purpose:

Store actual test scenarios.

Example:

```javascript
Valid Login
Invalid Login
Search Customer
Create Account
Transfer Funds
```

---

## Support

Purpose:

Reusable commands and utilities.

Example:

```javascript
cy.login()
```

Used across multiple tests.

---

# Automation Thinking Process

Whenever creating a new test:

## Step 1

Write manual test case.

Example:

```text
Open Login Page
Enter Username
Enter Password
Click Login
Verify Dashboard
```

---

## Step 2

Identify locators.

Example:

```javascript
input[name="username"]
input[name="password"]
button[type="submit"]
```

---

## Step 3

Create page methods.

Example:

```javascript
enterUsername()
enterPassword()
clickLogin()
```

---

## Step 4

Create business action.

Example:

```javascript
login()
```

which combines:

```javascript
enterUsername()
enterPassword()
clickLogin()
```

---

## Step 5

Write assertions.

Example:

```javascript
cy.url()
  .should('include','dashboard')
```

---

# Database Testing

Database validation is critical in banking systems.

Example:

Verify account exists:

```sql
SELECT *
FROM accounts
WHERE account_number='ACC1001';
```

Verify balance:

```sql
SELECT balance
FROM accounts
WHERE account_number='ACC1001';
```

Verify transfer:

```sql
SELECT *
FROM transfers
WHERE transfer_amount=5000;
```

---

# API Testing

API validation is performed using Postman.

Covered APIs:

* Login API
* Customer API
* Account API
* Transfer API
* Transaction API

Validation Areas:

* Status Code
* Response Body
* Schema Validation
* Authentication
* Business Rules

---

# Testing Types Covered

* Functional Testing
* Smoke Testing
* Regression Testing
* Validation Testing
* Negative Testing
* Boundary Testing
* API Testing
* Database Testing
* Security Testing

---

# Execution Instructions

Install dependencies:

```bash
npm install
```

Open Cypress:

```bash
npx cypress open
```

Run all tests:

```bash
npx cypress run
```

Run a specific test:

```bash
npx cypress run --spec "cypress/e2e/authentication/login.cy.js"
```

---

# QA Interview Notes

## What is a Locator?

A locator identifies a web element so automation tools can interact with it.

## What is POM?

A design pattern that separates page actions from test scripts for better maintainability.

## What is an Assertion?

An assertion verifies actual results against expected results and determines pass/fail status.

## Why Use Fixtures?

Fixtures store test data separately from test scripts, improving reusability and maintainability.

## Why Automate Tests?

To increase speed, consistency, coverage, and reliability while reducing repetitive manual effort.

---

# Future Improvements

* CI/CD Integration
* GitHub Actions
* Jenkins Pipeline
* Docker Execution
* Allure Reporting
* API Automation Integration
* Cross Browser Execution
* Data Driven Testing
* Parallel Execution

---

# Author

**Marufa Meem**

QA Automation Engineer Portfolio Project

Focused on Banking, FinTech, API Testing, Database Testing, and Test Automation Engineering.
