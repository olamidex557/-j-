# Product Variants Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Product Variants table represents every purchasable variation of a Product.

A Variant is the actual item a customer purchases.

Examples

Product

T-Shirt

Variant 1

Brown / Small

Variant 2

Brown / Medium

Variant 3

Black / Medium

Each Variant maintains its own inventory, SKU and pricing.

# Table Name

product_variants

# Description

Variants are generated from combinations of Product Option Values.

Every Variant belongs to exactly one Product.

# Columns

## id

Type

UUID

Required

Yes

Primary Key

## product_id

Type

UUID

Required

Yes

References

products.id

## sku

Type

String

Required

No

Description

Merchant SKU.

## barcode

Type

String

Required

No

Description

Product barcode.

## price

Type

Decimal(12,2)

Required

No

Description

Overrides base product price.

## quantity

Type

Integer

Required

Yes

Default

0

Description

Available inventory.

## is_default

Type

Boolean

Required

Yes

Default

false

Description

Default selected variant.

## is_active

Type

Boolean

Required

Yes

Default

true

Description

Whether customers can purchase the variant.

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

Product

1 → Many Product Variants

Variant

Many → Many Product Option Values

Variant

1 → Many Order Items

# Constraints

Primary Key

id

Foreign Key

product_id

Only one default variant per Product.

# Indexes

id

product_id

sku

barcode

is_active

# Business Rules

Each Variant represents one purchasable combination.

Inventory belongs to the Variant.

Inactive Variants cannot be purchased.

Price may override Product price.

Deleting a Product removes all Variants.

# Security Rules

Variants inherit Store ownership through Product.

# Future Expansion

Weight

Dimensions

Cost Price

Supplier SKU

Image Assignment

Tax Class

# Referenced By

variant_option_values

order_items

# Status

Frozen