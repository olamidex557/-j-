# Store Settings Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Store Settings table stores all configurable settings for a Store.

Each Store has exactly one settings record.

The table centralizes operational, branding, checkout and communication preferences.

# Table Name

store_settings

# Description

Store Settings contains merchant preferences that affect how the storefront and dashboard behave.

This table should contain configuration only.

Business records such as Products and Orders must never be stored here.

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

Unique

Yes

Description

The Store this configuration belongs to.

## currency

Type

Enum

Required

Yes

Default

NGN

Supported Values

NGN

Description

Currency used throughout the store.

## business_email

Type

String

Required

No

Description

Primary business email.

## business_phone

Type

String

Required

No

Description

Primary business phone number.

## business_address

Type

Text

Required

No

Description

Business address.

## logo_url

Type

String

Required

No

Description

Store logo stored in Cloudflare R2.

## banner_url

Type

String

Required

No

Description

Store banner stored in Cloudflare R2.

## primary_color

Type

String

Required

No

Description

Store branding color.

## accept_orders

Type

Boolean

Required

Yes

Default

true

Description

Whether customers can place new orders.

## delivery_enabled

Type

Boolean

Required

Yes

Default

true

## pickup_enabled

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

1 → 1 Store Settings

# Constraints

Primary Key

id

Foreign Key

store_id

Unique

store_id

# Indexes

id

store_id

# Business Rules

Every Store has exactly one Store Settings record.

Disabling order acceptance prevents new checkouts.

At least one fulfillment method must remain enabled.

Brand assets are optional.

# Security Rules

Only Store owners may modify Store Settings.

Settings changes must be validated on the backend.

# Future Expansion

Business Hours

Social Media Links

SEO Settings

Custom Domain

Analytics Preferences

Email Templates

Tax Configuration

Shipping Zones

# Referenced By

stores

checkout

storefront

# Status

Frozen