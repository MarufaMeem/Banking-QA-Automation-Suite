# Defect Tracking Sheet

## Purpose

This defect tracker records defects identified during testing of the Banking QA Automation Suite. It provides visibility into defect severity, priority, ownership, status, and resolution.

| Bug ID  | Module         | Summary                                        | Severity | Priority | Status | Environment | Detected By |
| ------- | -------------- | ---------------------------------------------- | -------- | -------- | ------ | ----------- | ----------- |
| BUG-001 | Authentication | Login accepts whitespace username              | Critical | High     | Open   | QA          | QA Engineer |
| BUG-002 | Authentication | Forgot Password accepts invalid email          | High     | High     | Open   | QA          | QA Engineer |
| BUG-003 | Authentication | Session remains active after logout            | Critical | High     | Open   | QA          | QA Engineer |
| BUG-004 | Customer       | Duplicate customer email accepted              | Critical | High     | Open   | QA          | QA Engineer |
| BUG-005 | Customer       | Customer search returns incorrect records      | High     | Medium   | Open   | QA          | QA Engineer |
| BUG-006 | Customer       | Customer profile crashes for inactive customer | High     | High     | Open   | QA          | QA Engineer |
| BUG-007 | Account        | Duplicate account number accepted              | Critical | High     | Open   | QA          | QA Engineer |
| BUG-008 | Account        | Frozen account allows transfer                 | Critical | Critical | Open   | QA          | QA Engineer |
| BUG-009 | Account        | Closed account appears as active               | High     | Medium   | Open   | QA          | QA Engineer |
| BUG-010 | Account        | Negative opening balance accepted              | Critical | High     | Open   | QA          | QA Engineer |
| BUG-011 | Transfer       | Transfer succeeds with insufficient balance    | Critical | Critical | Open   | QA          | QA Engineer |
| BUG-012 | Transfer       | Zero-value transfer accepted                   | High     | High     | Open   | QA          | QA Engineer |
| BUG-013 | Transfer       | Daily transfer limit not enforced              | Critical | High     | Open   | QA          | QA Engineer |
| BUG-014 | Transfer       | Invalid beneficiary account accepted           | Critical | High     | Open   | QA          | QA Engineer |
| BUG-015 | Transaction    | Deposit missing from transaction history       | High     | High     | Open   | QA          | QA Engineer |
| BUG-016 | Transaction    | Withdrawal calculates balance incorrectly      | Critical | Critical | Open   | QA          | QA Engineer |
| BUG-017 | Transaction    | Latest transaction missing from history        | High     | Medium   | Open   | QA          | QA Engineer |
| BUG-018 | Security       | JWT remains valid after logout                 | Critical | Critical | Open   | QA          | QA Engineer |
| BUG-019 | Security       | Normal user can access admin APIs              | Critical | Critical | Open   | QA          | QA Engineer |
| BUG-020 | Security       | Sensitive account data exposed in response     | Critical | Critical | Open   | QA          | QA Engineer |

---

## Defect Status Lifecycle

```text
Open
  ↓
Assigned
  ↓
In Progress
  ↓
Fixed
  ↓
Retest
  ↓
Verified
  ↓
Closed
```

If the defect still exists:

```text
Retest
  ↓
Failed
  ↓
Reopened
  ↓
In Progress
```

---

## Severity vs Priority

### Severity

Severity describes **how badly the defect affects the system**.

```text
Critical → Banking/financial/security functionality severely affected
High     → Major functionality affected
Medium   → Functionality affected but workaround exists
Low      → Minor issue
```

### Priority

Priority describes **how quickly the defect should be fixed**.

For example:

```text
Insufficient balance transfer succeeds
```

would be:

```text
Severity = Critical
Priority = Critical
```

because it can cause direct financial impact.

---

## Defect Reporting Workflow

```text
Tester finds defect
        ↓
Reproduce defect
        ↓
Create bug report
        ↓
Developer investigates
        ↓
Developer fixes
        ↓
QA retests
        ↓
Pass → Close
Fail → Reopen
```
