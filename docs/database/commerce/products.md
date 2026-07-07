# Products Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Products table stores every item a merchant sells.

Products belong to exactly one Store and may optionally belong to one Category.

Products are displayed on the merchant's storefront.

# Table Name

products

# Description

Products represent physical items available for purchase.

Every product is owned by a Store.

A product may contain multiple images and multiple variants.

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

## category_id

Type

UUID

Required

No

References

categories.id

## name

Type

String

Required

Yes

Maximum Length

200

## slug

Type

String

Required

Yes

Description

SEO-friendly product identifier.

## description

Type

Text

Required

No

## sku

Type

String

Required

No

Description

Merchant-defined stock keeping unit.

## price

Type

Decimal(12,2)

Required

Yes

Minimum

0

## discount_price

Type

Decimal(12,2)

Required

No

Must be less than price.

## quantity

Type

Integer

Required

Yes

Default

0

## track_inventory

Type

Boolean

Required

Yes

Default

true

## status

Type

Enum

Required

Yes

Values

DRAFT

PUBLISHED

ARCHIVED

Default

DRAFT

## is_featured

Type

Boolean

Required

Yes

Default

false

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

# Product Images

Product images are stored separately.

Relationship

Product

1 → Many Product Images

Images are stored in Cloudflare R2.

# Product Variants

Variants are stored separately.

Relationship

Product

1 → Many Product Variants

Examples

Size

Color

Material

Capacity

Future examples

Storage

Weight

Dimensions

# Relationships

Store

1 → Many Products

Category

1 → Many Products

Product

1 → Many Variants

Product

1 → Many Images

Product

1 → Many Order Items

# Constraints

Primary Key

id

Foreign Key

store_id

Foreign Key

category_id

Unique

store_id + slug

# Indexes

id

store_id

category_id

status

name

sku

created_at

# Business Rules

Product names are unique per Store.

Draft products are not visible.

Archived products cannot be purchased.

Quantity cannot be negative.

Discount price must always be less than selling price.

Deleting a product does not remove completed order history.

# Security Rules

Merchants may only manage products belonging to their Store.

Products from another Store are inaccessible.

# Future Expansion

Digital products

Bundles

Subscriptions

Product SEO

Related products

Collections

Product reviews

# Referenced By

product_images

product_variants

order_items

# Status

Frozen