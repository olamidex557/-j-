# Stores Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Stores table is the core entity of Oja.

Every merchant owns a Store.

Every business record in the platform belongs to a Store.

The Store acts as the tenant boundary for data isolation.

# Table Name

stores

# Description

A Store represents a merchant's business on Oja.

Each store has its own

- Products
- Categories
- Customers
- Orders
- Payment Settings
- Branding
- Delivery Settings

Every business query must reference a Store.

# Columns

## id

Type

UUID

Required

Yes

Constraints

Primary Key

Description

Unique store identifier.

## owner_id

Type

UUID

Required

Yes

References

users.id

Description

Store owner.

## name

Type

String

Required

Yes

Maximum Length

150

Description

Business name.

## slug

Type

String

Required

Yes

Unique

Yes

Description

Subdomain.

Example

nike

Produces

nike.oja.com

## description

Type

Text

Required

No

Description

Business description.

## logo_url

Type

String

Required

No

Description

Store logo.

## banner_url

Type

String

Required

No

Description

Store banner.

## email

Type

String

Required

No

Description

Business email.

## phone_number

Type

String

Required

No

Description

Business contact.

## address

Type

Text

Required

No

Description

Business address.

## currency

Type

Enum

Required

Yes

Default

NGN

Description

Store currency.

## is_active

Type

Boolean

Required

Yes

Default

true

Description

Store availability.

## subscription_status

Type

Enum

Required

Yes

Values

TRIAL

ACTIVE

EXPIRED

SUSPENDED

Default

TRIAL

Description

Current subscription state.

## trial_ends_at

Type

Timestamp

Required

Yes

Description

Trial expiration.

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

User

1 → Many Stores (future)

Store

1 → Many Products

Store

1 → Many Categories

Store

1 → Many Orders

Store

1 → Many Customers

Store

1 → Many Payments

Store

1 → One Subscription

# Constraints

Primary Key

id

Unique

slug

Foreign Key

owner_id

# Indexes

id

owner_id

slug

subscription_status

created_at

# Business Rules

Store slug cannot change after publication.

One active trial per store.

Inactive stores cannot receive orders.

Every product belongs to one store.

Every category belongs to one store.

# Security Rules

Every request must verify Store ownership.

Cross-store access is prohibited.

# Future Expansion

Custom domains

Store themes

Store staff

Multiple branches

Store verification

# Referenced By

products

categories

customers

orders

payments

subscriptions

# Status

Frozen