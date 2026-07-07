# Orders Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Orders table stores every customer purchase made within a Store.

Orders represent the complete transaction between a customer and a merchant.

Order history must remain permanent.

Orders are never physically deleted.

# Table Name

orders

# Description

Every order belongs to

- One Store
- One Customer

An order contains one or more Order Items.

Financial information stored in an order represents a snapshot at the time of purchase.

Future product price changes must never affect historical orders.

# Columns

## id

Type

UUID

Required

Yes

Primary Key

## order_number

Type

String

Required

Yes

Unique

Yes

Description

Human-readable order reference.

Example

OJA-20260712-000001

## store_id

Type

UUID

Required

Yes

References

stores.id

## customer_id

Type

UUID

Required

Yes

References

customers.id

## subtotal

Type

Decimal(12,2)

Required

Yes

## delivery_fee

Type

Decimal(12,2)

Required

Yes

Default

0.00

## discount

Type

Decimal(12,2)

Required

Yes

Default

0.00

## total

Type

Decimal(12,2)

Required

Yes

## payment_method

Type

Enum

Required

Yes

Values

PAYSTACK

BANK_TRANSFER

CASH_ON_DELIVERY

## payment_status

Type

Enum

Required

Yes

Values

PENDING

PAID

FAILED

REFUNDED

Default

PENDING

## order_status

Type

Enum

Required

Yes

Values

PENDING

CONFIRMED

PROCESSING

READY_FOR_PICKUP

SHIPPED

DELIVERED

COMPLETED

CANCELLED

Default

PENDING

## delivery_method

Type

Enum

Required

Yes

Values

DELIVERY

PICKUP

## notes

Type

Text

Required

No

Description

Customer notes.

## confirmed_at

Type

Timestamp

Required

No

## shipped_at

Type

Timestamp

Required

No

## delivered_at

Type

Timestamp

Required

No

## completed_at

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

1 → Many Orders

Customer

1 → Many Orders

Order

1 → Many Order Items

Order

1 → One Payment

# Constraints

Primary Key

id

Unique

order_number

Foreign Key

store_id

Foreign Key

customer_id

# Indexes

id

order_number

store_id

customer_id

payment_status

order_status

created_at

# Business Rules

Every order belongs to one Store.

Every order belongs to one Customer.

Every order contains at least one Order Item.

Completed orders cannot be modified.

Cancelled orders remain in history.

Historical prices never change.

# Security Rules

Merchants can only access orders belonging to their Store.

Customers never access another Store's orders.

# Future Expansion

Coupons

Returns

Refund Requests

Invoices

Shipment Tracking Numbers

Multiple Deliveries

# Referenced By

order_items

payments

# Status

Frozen