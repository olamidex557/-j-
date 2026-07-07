# Variant Option Values Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

This table links Product Variants to Product Option Values.

It allows Oja to determine which option values belong to each Variant.

# Table Name

variant_option_values

# Description

This is a junction table.

Example

Variant

Brown / Medium

Links to

Color → Brown

Size → Medium

Another Variant

Black / Large

Links to

Color → Black

Size → Large

# Columns

## variant_id

Type

UUID

Required

Yes

References

product_variants.id

## option_value_id

Type

UUID

Required

Yes

References

product_option_values.id

## created_at

Type

Timestamp

Required

Yes

# Relationships

Variant

Many → Many Product Option Values

# Constraints

Composite Primary Key

variant_id

option_value_id

Foreign Keys

variant_id

option_value_id

# Indexes

variant_id

option_value_id

# Business Rules

A Variant must contain at least one Option Value.

A Variant cannot contain duplicate Option Values.

Every Option Value must belong to the same Product as the Variant.

Deleting a Variant removes its relationships.

Deleting an Option Value removes its relationships.

# Security Rules

Ownership is inherited through the parent Product.

# Future Expansion

Variant-specific metadata

Variant image mapping

Inventory reservations

# Referenced By

product_variants

product_option_values

# Status

Frozen