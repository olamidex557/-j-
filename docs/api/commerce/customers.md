# Customers API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Customers API allows merchants to view and manage customer information collected through orders.

Customers are automatically created when they place their first order.

There is no customer registration in the MVP.

# Base Route

/api/v1/customers

# Merchant Workflow

Customer Places First Order

↓

Customer Record Created

↓

Merchant Views Customer

↓

Merchant Views Customer Orders

↓

Merchant Contacts Customer

# Endpoints

## Retrieve Customers

GET /api/v1/customers

Authentication

Required

Query Parameters

page

limit

search

sort

Response

200 OK

---

## Retrieve Customer

GET /api/v1/customers/{id}

Authentication

Required

Response

200 OK

---

## Retrieve Customer Orders

GET /api/v1/customers/{id}/orders

Authentication

Required

Response

200 OK

---

## Update Customer

PATCH /api/v1/customers/{id}

Authentication

Required

Description

Updates merchant-managed customer information.

Editable Fields

Address

Notes (Future)

Response

200 OK

# Business Rules

Customers are created automatically.

Duplicate customers are prevented using contact information.

Customers cannot be permanently deleted.

Customer statistics update after completed orders.

# Security

Merchants can access only customers belonging to their Store.

# Status

Frozen