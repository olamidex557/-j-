# Subscriptions Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Subscriptions table manages merchant subscriptions to Oja.

Subscriptions determine whether a Store can continue operating on the platform after the trial period.

Customer payments never pass through this table.

# Table Name

subscriptions

# Description

Every Store has exactly one active subscription record.

The subscription controls

- Trial Period
- Active Plan
- Billing Status
- Renewal Date

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

## plan

Type

Enum

Required

Yes

Values

TRIAL

PRO

Default

TRIAL

## status

Type

Enum

Required

Yes

Values

ACTIVE

EXPIRED

CANCELLED

SUSPENDED

Default

ACTIVE

## amount

Type

Decimal(12,2)

Required

Yes

Default

0.00

Description

Current subscription fee.

## billing_cycle

Type

Enum

Required

Yes

Values

MONTHLY

YEARLY

Default

MONTHLY

## starts_at

Type

Timestamp

Required

Yes

## ends_at

Type

Timestamp

Required

Yes

## renewed_at

Type

Timestamp

Required

No

## cancelled_at

Type

Timestamp

Required

No

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

1 → 1 Subscription

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

status

plan

ends_at

# Business Rules

Every Store starts with a Trial subscription.

Only one active subscription may exist per Store.

Expired subscriptions deactivate the Store.

Cancelled subscriptions remain in history.

# Security Rules

Subscription updates occur only through verified payment events.

Merchants cannot manually change subscription status.

# Future Expansion

Growth Plan

Enterprise Plan

Annual Billing

Promo Codes

Invoices

# Referenced By

stores

# Status

Frozen