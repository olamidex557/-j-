# Customers Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Customers table stores customer information collected through orders.

Customers belong to a Store.

Customer accounts are not part of the MVP.

# Table Name

customers

# Description

Customers are created automatically when an order is placed.

If an existing customer places another order using the same contact information, the existing record should be updated instead of creating a duplicate.

# Columns

## id

Type

UUID

Required

Yes

Primary Key

## store_id

Type

UUID

Required

Yes

References

stores.id

## first_name

Type

String

Required

Yes

Maximum Length

100

## last_name

Type

String

Required

No

Maximum Length

100

## email

Type

String

Required

No

## phone_number

Type

String

Required

Yes

## address

Type

Text

Required

No

## total_orders

Type

Integer

Required

Yes

Default

0

## total_spent

Type

Decimal(12,2)

Required

Yes

Default

0.00

## last_order_at

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

Store

1 → Many Customers

Customer

1 → Many Orders

# Constraints

Primary Key

id

Foreign Key

store_id

Unique

store_id + phone_number

# Indexes

id

store_id

phone_number

email

created_at

last_order_at

# Business Rules

Customers are created automatically during checkout.

A customer may place multiple orders.

Customer statistics update automatically after every completed order.

Deleting a customer does not delete order history.

# Security Rules

Customer information is visible only to the owning Store.

Customer data must never be shared across Stores.

# Future Expansion

Customer accounts

Saved addresses

Wishlists

Loyalty points

Marketing preferences

Customer notes

# Referenced By

orders

# Status

Frozen