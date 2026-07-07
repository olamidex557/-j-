# Payments Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Payments table records payment transactions associated with orders.

Customer funds are never processed or held by Oja.

Payments are made directly to the merchant.

Oja stores only transaction metadata.

# Table Name

payments

# Description

Every payment belongs to exactly one Order.

Payment verification is performed using Paystack.

# Columns

## id

Type

UUID

Required

Yes

Primary Key

## order_id

Type

UUID

Required

Yes

References

orders.id

## store_id

Type

UUID

Required

Yes

References

stores.id

## provider

Type

Enum

Required

Yes

Values

PAYSTACK

BANK_TRANSFER

CASH_ON_DELIVERY

## transaction_reference

Type

String

Required

No

Description

Reference returned by payment provider.

## provider_transaction_id

Type

String

Required

No

Description

Provider transaction identifier.

## amount

Type

Decimal(12,2)

Required

Yes

## currency

Type

Enum

Required

Yes

Default

NGN

## status

Type

Enum

Required

Yes

Values

PENDING

SUCCESS

FAILED

CANCELLED

REFUNDED

Default

PENDING

## paid_at

Type

Timestamp

Required

No

## created_at

Type

Timestamp

Required

Yes

## updated_at

Type

Timestamp

Required

Yes

# Relationships

Order

1 → One Payment

Store

1 → Many Payments

# Constraints

Primary Key

id

Foreign Key

order_id

Foreign Key

store_id

Unique

transaction_reference

# Indexes

id

order_id

store_id

status

provider

created_at

# Business Rules

Every payment belongs to one Order.

Payment records are immutable after successful verification.

Cash on Delivery orders create payment records.

Refunds create status changes instead of deleting records.

Payment verification occurs only on the backend.

# Security Rules

Card information is never stored.

CVV is never stored.

Card expiry is never stored.

Sensitive payment credentials are never persisted.

# Future Expansion

Split Payments

Refund Tracking

Payment Disputes

Multiple Payment Providers

Installment Payments

# Referenced By

orders

# Status

Frozen