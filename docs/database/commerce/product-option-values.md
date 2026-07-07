# Product Option Values Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Product Option Values table stores every selectable value for a Product Option.

Examples

Option

Color

Values

Brown

Black

White

Option

Size

Values

S

M

L

XL

XXL

# Table Name

product_option_values

# Description

Each value belongs to one Product Option.

Values may have independent inventory and pricing.

# Columns

## id

Type

UUID

Required

Yes

Primary Key

## option_id

Type

UUID

Required

Yes

References

product_options.id

## value

Type

String

Required

Yes

## sku

Type

String

Required

No

## price_adjustment

Type

Decimal(12,2)

Required

Yes

Default

0.00

Description

Additional amount added to the base product price.

## quantity

Type

Integer

Required

Yes

Default

0

## is_active

Type

Boolean

Required

Yes

Default

true

## display_order

Type

Integer

Required

Yes

Default

0

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

Product Option

1 → Many Product Option Values

# Constraints

Primary Key

id

Foreign Key

option_id

Unique

option_id + value

# Indexes

id

option_id

sku

display_order

# Business Rules

Values inherit their parent Product.

Inactive values cannot be selected.

Quantity cannot be negative.

Price adjustment may be positive, negative or zero.

# Security Rules

Values inherit ownership through their parent Product.

# Future Expansion

Images

Barcodes

Weight

Dimensions

Supplier SKU

# Referenced By

Future

order_items

inventory

# Status

Frozen