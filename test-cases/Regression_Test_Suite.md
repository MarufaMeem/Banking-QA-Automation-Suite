# Regression Test Suite

## Objective

The Regression Test Suite ensures that existing functionalities continue to work correctly after new features, enhancements, bug fixes, or configuration changes are introduced.

---

| Regression ID | Related TC | Module         | Test Scenario                             | Priority |
| ------------- | ---------- | -------------- | ----------------------------------------- | -------- |
| REG-001       | AUTH-001   | Authentication | Login with valid credentials              | Critical |
| REG-002       | AUTH-002   | Authentication | Login with invalid password               | High     |
| REG-003       | AUTH-003   | Authentication | Login with invalid username               | High     |
| REG-004       | AUTH-007   | Authentication | Logout functionality                      | Critical |
| REG-005       | AUTH-009   | Authentication | Session timeout validation                | High     |
| REG-006       | CUST-001   | Customer       | Add Customer                              | Critical |
| REG-007       | CUST-004   | Customer       | Duplicate Email Validation                | Critical |
| REG-008       | CUST-006   | Customer       | Search Customer by ID                     | High     |
| REG-009       | CUST-008   | Customer       | Update Customer                           | Critical |
| REG-010       | CUST-009   | Customer       | Delete Customer                           | Critical |
| REG-011       | ACC-001    | Account        | Create Account                            | Critical |
| REG-012       | ACC-003    | Account        | Duplicate Account Validation              | Critical |
| REG-013       | ACC-006    | Account        | Update Account Information                | High     |
| REG-014       | ACC-007    | Account        | Freeze Account                            | Critical |
| REG-015       | ACC-008    | Account        | Transaction Restriction on Frozen Account | Critical |
| REG-016       | ACC-009    | Account        | Close Account                             | Critical |
| REG-017       | TRANS-001  | Transfer       | Internal Transfer                         | Critical |
| REG-018       | TRANS-002  | Transfer       | External Transfer                         | Critical |
| REG-019       | TRANS-003  | Transfer       | Insufficient Balance Validation           | Critical |
| REG-020       | TRANS-004  | Transfer       | Invalid Destination Account Validation    | High     |
| REG-021       | TRANS-007  | Transfer       | Daily Limit Validation                    | High     |
| REG-022       | TRANS-008  | Transfer       | Balance Deduction Verification            | Critical |
| REG-023       | TRANS-009  | Transfer       | Balance Credit Verification               | Critical |
| REG-024       | TXN-001    | Transaction    | Deposit Funds                             | Critical |
| REG-025       | TXN-002    | Transaction    | Withdraw Funds                            | Critical |
| REG-026       | TXN-003    | Transaction    | Withdrawal with Insufficient Balance      | Critical |
| REG-027       | TXN-007    | Transaction    | Transaction History Display               | High     |
| REG-028       | SEC-003    | Security       | JWT Token Expiry Validation               | Critical |
| REG-029       | SEC-006    | Security       | RBAC Access Restriction                   | Critical |
| REG-030       | SEC-009    | Security       | Direct URL Access Restriction             | High     |

---

## Regression Entry Criteria

* Smoke Test Suite Passed
* Test Environment Stable
* Required Test Data Available
* Build Successfully Deployed

---

## Regression Exit Criteria

* All Critical Tests Passed
* No Open Critical Defects
* Test Execution Report Completed
* QA Sign-off Obtained

---

## Execution Frequency

Execute:

* Before release
* After major code changes
* After bug fixes
* Before UAT
* Before production deployment
