# Payments API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Payments API manages payment verification for customer orders.

Customer payments are processed directly by the merchant's connected Paystack account.

Oja never stores customer card information.

# Merchant Base Route

/api/v1/payments

# Storefront Payment Route

/api/v1/store/{slug}/payments

# Merchant Workflow

Receive Payment

↓

Payment Verified

↓

Order Updated

↓

Merchant Views Payment

# Customer Workflow

Checkout

↓

Pay

↓

Payment Verification

↓

Order Confirmation

# Merchant Endpoints

## Retrieve Payments

GET /api/v1/payments

Authentication

Required

Query Parameters

page

limit

status

provider

date

search

Response

200 OK

---

## Retrieve Payment

GET /api/v1/payments/{id}

Authentication

Required

Response

200 OK

---

## Verify Payment

POST /api/v1/payments/verify

Authentication

Required

Description

Verifies payment with Paystack.

Updates payment status.

Updates order status.

Response

200 OK

# Storefront Endpoints

## Initialize Payment

POST /api/v1/store/{slug}/payments

Authentication

Not Required

Description

Creates a payment session for checkout.

Returns the Paystack authorization URL.

---

## Verify Checkout Payment

GET /api/v1/store/{slug}/payments/verify

Authentication

Not Required

Description

Verifies completed payment after customer returns from Paystack.

# Business Rules

Payment verification occurs only on the backend.

Payment records cannot be edited manually.

Successful payments automatically update the associated order.

Failed payments do not create duplicate orders.

# Security

Payment verification always uses Paystack's transaction reference.

Card details are never stored.

Payment status changes are logged.

# Status

Frozen