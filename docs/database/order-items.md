# Order Items Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Order Items table stores every product purchased within an Order.

This table preserves product information at the time of purchase.

Historical order data must never change even if the original product changes.

# Table Name

order_items

# Description

Each Order contains one or more Order Items.

Order Items store a snapshot of

- Product Name
- SKU
- Unit Price
- Quantity
- Total Price

Future product updates must not affect completed orders.

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

## product_id

Type

UUID

Required

Yes

References

products.id

## product_name

Type

String

Required

Yes

Description

Snapshot of product name.

## sku

Type

String

Required

No

Description

Snapshot of SKU.

## unit_price

Type

Decimal(12,2)

Required

Yes

## quantity

Type

Integer

Required

Yes

Minimum

1

## total_price

Type

Decimal(12,2)

Required

Yes

Description

unit_price × quantity

## created_at

Type

Timestamp

Required

Yes

# Relationships

Order

1 → Many Order Items

Product

1 → Many Order Items

# Constraints

Primary Key

id

Foreign Key

order_id

Foreign Key

product_id

# Indexes

id

order_id

product_id

# Business Rules

Every Order must contain at least one Order Item.

Product information is copied into Order Items when the order is created.

Completed Order Items are immutable.

# Security Rules

Order Items inherit Store ownership through their parent Order.

# Future Expansion

Variant snapshots

Discount snapshots

Tax snapshots

Inventory snapshots

# Referenced By

orders

products

# Status

Frozen