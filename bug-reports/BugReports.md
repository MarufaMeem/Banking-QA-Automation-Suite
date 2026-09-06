# Banking QA Bug Reports

| Bug ID  | Summary                                                   | Severity | Priority | Status |
| ------- | --------------------------------------------------------- | -------- | -------- | ------ |
| BUG-001 | Login succeeds with blank spaces as username              | Critical | High     | Open   |
| BUG-002 | Forgot Password accepts invalid email format              | High     | High     | Open   |
| BUG-003 | Session remains active after logout                       | Critical | High     | Open   |
| BUG-004 | Customer can be created with duplicate email              | Critical | High     | Open   |
| BUG-005 | Customer search returns incorrect records                 | High     | Medium   | Open   |
| BUG-006 | Customer profile page crashes for inactive customers      | High     | High     | Open   |
| BUG-007 | Account creation allows duplicate account numbers         | Critical | High     | Open   |
| BUG-008 | Frozen account still allows fund transfer                 | Critical | Critical | Open   |
| BUG-009 | Closed account appears in active account search           | High     | Medium   | Open   |
| BUG-010 | Negative opening balance accepted during account creation | Critical | High     | Open   |
| BUG-011 | Transfer succeeds with insufficient balance               | Critical | Critical | Open   |
| BUG-012 | Transfer allows amount = 0                                | High     | High     | Open   |
| BUG-013 | Transfer limit validation not enforced                    | Critical | High     | Open   |
| BUG-014 | Invalid beneficiary account accepted                      | Critical | High     | Open   |
| BUG-015 | Deposit transaction not recorded in history               | High     | High     | Open   |
| BUG-016 | Withdrawal updates balance incorrectly                    | Critical | Critical | Open   |
| BUG-017 | Transaction history missing latest transaction            | High     | Medium   | Open   |
| BUG-018 | JWT token remains valid after logout                      | Critical | Critical | Open   |
| BUG-019 | Normal user can access admin APIs                         | Critical | Critical | Open   |
| BUG-020 | Sensitive account data visible in browser response        | Critical | Critical | Open   |

---

# Detailed Bug Report Example

## BUG-001

### Summary

Login succeeds with blank spaces as username.

### Description

The system allows authentication when username contains only whitespace characters.

### Steps to Reproduce

1. Open Login Page
2. Enter:

   * Username = "     "
   * Password = admin123
3. Click Login

### Expected Result

System should display validation message:

```text id="m7x4p4"
Username is required
```

### Actual Result

User is authenticated and redirected to dashboard.

### Severity

```text id="4gljaf"
Critical
```

### Priority

```text id="qlw4xu"
High
```

### Status

```text id="jlwm3w"
Open
```

---

## BUG-008

### Summary

Frozen account still allows fund transfer.

### Description

Transfers can be executed from accounts with status = FROZEN.

### Steps to Reproduce

1. Freeze account ACC1001
2. Navigate to Transfer Module
3. Transfer 5000 to ACC1002
4. Submit transfer

### Expected Result

Transfer should be blocked.

### Actual Result

Transfer completed successfully.

### Severity

Critical

### Priority

Critical

### Status

Open

---

## BUG-011

### Summary

Transfer succeeds with insufficient balance.

### Description

System processes transfer even when source account balance is lower than transfer amount.

### Steps to Reproduce

1. Source Balance = 10,000
2. Transfer Amount = 50,000
3. Submit transfer

### Expected Result

Transfer rejected with error message.

### Actual Result

Transfer processed successfully.

### Severity

Critical

### Priority

Critical

### Status

Open
