# Smoke Test Suite

## Objective

The Smoke Test Suite validates that the critical functionalities of the Banking Customer Management System are working correctly after a new build deployment.

---

| Smoke ID | Related TC | Module         | Test Scenario                     | Priority |
| -------- | ---------- | -------------- | --------------------------------- | -------- |
| SMK-001  | AUTH-001   | Authentication | Login with valid credentials      | Critical |
| SMK-002  | AUTH-007   | Authentication | Logout functionality              | Critical |
| SMK-003  | AUTH-008   | Authentication | Forgot Password page opens        | High     |
| SMK-004  | CUST-001   | Customer       | Add Customer                      | Critical |
| SMK-005  | CUST-006   | Customer       | Search Customer by ID             | High     |
| SMK-006  | CUST-010   | Customer       | View Customer Profile             | High     |
| SMK-007  | ACC-001    | Account        | Create Account                    | Critical |
| SMK-008  | ACC-007    | Account        | Freeze Account                    | Critical |
| SMK-009  | ACC-010    | Account        | Search Account                    | High     |
| SMK-010  | TRANS-001  | Transfer       | Internal Fund Transfer            | Critical |
| SMK-011  | TRANS-002  | Transfer       | External Fund Transfer            | Critical |
| SMK-012  | TRANS-008  | Transfer       | Balance Deduction Verification    | Critical |
| SMK-013  | TRANS-009  | Transfer       | Balance Credit Verification       | Critical |
| SMK-014  | TXN-001    | Transaction    | Deposit Funds                     | Critical |
| SMK-015  | TXN-002    | Transaction    | Withdraw Funds                    | Critical |
| SMK-016  | TXN-007    | Transaction    | View Transaction History          | High     |
| SMK-017  | SEC-003    | Security       | JWT Token Validation              | Critical |
| SMK-018  | SEC-006    | Security       | RBAC Restriction Validation       | Critical |
| SMK-019  | SEC-007    | Security       | Admin Authorization Validation    | Critical |
| SMK-020  | SEC-008    | Security       | Session Invalidation After Logout | High     |

---

## Smoke Test Exit Criteria

* All Critical Smoke Tests Pass
* No Critical Defects Found
* Application Ready for Further Testing

---

## Execution Frequency

Execute:

* After every deployment
* Before regression testing
* Before UAT testing
* Before production release
