# Product Options Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Product Options table defines the configurable option types available for a Product.

Examples

Color

Size

Material

Capacity

Length

Weight

Each Product may have multiple options.

# Table Name

product_options

# Description

Options define the attributes customers can choose before purchasing a product.

Options themselves do not represent purchasable items.

They define the available option groups.

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

## name

Type

String

Required

Yes

Maximum Length

100

Examples

Color

Size

Material

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

# Relationships

Product

1 → Many Product Options

Product Option

1 → Many Product Option Values

# Constraints

Primary Key

id

Foreign Key

product_id

Unique

product_id + name

# Indexes

id

product_id

display_order

# Business Rules

Option names must be unique within a Product.

Display order determines how options appear on the storefront.

Deleting a Product removes its options.

# Security Rules

Only the owning Store may manage Product Options.

# Future Expansion

Option descriptions

Option tooltips

Color swatches

Image swatches

# Referenced By

product_option_values

# Status

Frozen