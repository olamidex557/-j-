# Stores API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Stores API manages merchant stores.

Each authenticated merchant owns one Store during the MVP.

Future versions may support multiple stores per account.

# Base Route

/api/v1/store

# Endpoints

## Get Current Store

GET /api/v1/store

Authentication

Required

Description

Returns the authenticated merchant's store.

Response

200 OK

---

## Create Store

POST /api/v1/store

Authentication

Required

Description

Creates a merchant store during onboarding.

Request

{
  "name": "",
  "slug": "",
  "description": ""
}

Response

201 Created

---

## Update Store

PATCH /api/v1/store

Authentication

Required

Description

Updates store information.

Editable Fields

- Name
- Description
- Business Email
- Business Phone
- Address

Response

200 OK

---

## Check Slug Availability

GET /api/v1/store/check-slug?value=my-store

Authentication

Optional

Description

Checks whether a store slug is available.

Response

{
    "available": true
}

---

## Get Public Store

GET /api/v1/store/{slug}

Authentication

Not Required

Description

Returns public storefront information.

Used by customers.

# Validation

Store Name

Required

Maximum Length

150

Slug

Required

Unique

Lowercase

Letters

Numbers

Hyphens

Description

Maximum Length

500

# Errors

400

Validation Failed

401

Unauthenticated

404

Store Not Found

409

Slug Already Exists

# Business Rules

Each merchant may own one Store during MVP.

Slug is unique platform-wide.

Slug cannot be changed after publication.

Public Store endpoint exposes only storefront information.

# Security

Only Store Owners may update Store information.

Private Store data is never exposed publicly.

# Status

Frozen