# Store Settings API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Store Settings API manages merchant configuration.

Settings control storefront behaviour and business preferences.

# Base Route

/api/v1/store/settings

# Merchant Workflow

Configure Store

↓

Upload Branding

↓

Configure Checkout

↓

Enable Delivery

↓

Publish Store

# Endpoints

## Retrieve Store Settings

GET /api/v1/store/settings

Authentication

Required

Response

200 OK

---

## Update Store Settings

PATCH /api/v1/store/settings

Authentication

Required

Description

Updates store preferences.

Editable Fields

Business Information

Branding

Order Acceptance

Delivery

Pickup

Primary Color

Response

200 OK

---

## Upload Store Logo

POST /api/v1/store/settings/logo

Authentication

Required

Content-Type

multipart/form-data

Response

201 Created

---

## Upload Store Banner

POST /api/v1/store/settings/banner

Authentication

Required

Content-Type

multipart/form-data

Response

201 Created

# Business Rules

Each Store owns exactly one Settings record.

At least one fulfillment method must remain enabled.

Brand assets are optional.

Only supported image formats may be uploaded.

# Security

Only Store Owners may update settings.

Image uploads are validated.

# Status

Frozen