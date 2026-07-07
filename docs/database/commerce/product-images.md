# Product Images Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Product Images table stores all images belonging to a Product.

Images are stored in Cloudflare R2.

The database stores only metadata and URLs.

# Table Name

product_images

# Description

A Product can have multiple images.

One image may be designated as the primary display image.

Image ordering determines gallery display.

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

## image_url

Type

String

Required

Yes

Description

Cloudflare R2 object URL.

## alt_text

Type

String

Required

No

Maximum Length

255

Description

Accessibility description.

## display_order

Type

Integer

Required

Yes

Default

0

Description

Gallery ordering.

## is_primary

Type

Boolean

Required

Yes

Default

false

Description

Primary product image.

## created_at

Type

Timestamp

Required

Yes

# Relationships

Product

1 → Many Product Images

# Constraints

Primary Key

id

Foreign Key

product_id

Only one primary image per product.

# Indexes

id

product_id

display_order

is_primary

# Business Rules

Every product should have one primary image.

Deleting a product removes associated images.

Display order determines storefront gallery.

# Security Rules

Only the owning Store may manage images.

Image URLs must originate from approved storage.

# Future Expansion

Image optimization

Multiple resolutions

Video support

360° images

# Referenced By

products

# Status

Frozen