# Categories Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Categories table organizes products within a Store.

Categories improve product discovery and storefront navigation.

Categories are unique to each Store.

# Table Name

categories

# Description

Categories group products.

Examples

Electronics

Shoes

Furniture

Cosmetics

Building Materials

Categories cannot be shared between stores.

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

## name

Type

String

Required

Yes

Maximum Length

100

## slug

Type

String

Required

Yes

Description

SEO-friendly category identifier.

## description

Type

Text

Required

No

## image_url

Type

String

Required

No

Description

Category image.

## display_order

Type

Integer

Required

Yes

Default

0

Description

Homepage ordering.

## is_active

Type

Boolean

Required

Yes

Default

true

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

1 → Many Categories

Category

1 → Many Products

# Constraints

Primary Key

id

Foreign Key

store_id

Unique

store_id + slug

Unique

store_id + name

# Indexes

id

store_id

slug

display_order

created_at

# Business Rules

Category names must be unique within a Store.

Deleting a category must not delete products.

Products without categories remain valid.

Categories may be reordered.

# Security Rules

Categories are visible only within their owning Store.

# Future Expansion

Nested categories

Featured categories

Category icons

SEO metadata

# Referenced By

products

# Status

Frozen