# Categories API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Categories API manages product organization.

Categories exist only within a Store.

# Base Route

/api/v1/categories

# Merchant Workflow

Create Category

↓

Assign Products

↓

Reorder Categories

↓

Update Category

↓

Archive Category

# Customer Workflow

Browse Categories

↓

Open Category

↓

Browse Products

# Endpoints

## Create Category

POST /api/v1/categories

Authentication

Required

---

## Retrieve Categories

GET /api/v1/categories

Authentication

Required

---

## Retrieve Category

GET /api/v1/categories/{id}

Authentication

Required

---

## Update Category

PATCH /api/v1/categories/{id}

Authentication

Required

---

## Archive Category

PATCH /api/v1/categories/{id}/archive

Authentication

Required

---

## Delete Empty Category

DELETE /api/v1/categories/{id}

Authentication

Required

Description

Only categories with no assigned products may be deleted.

---

## Reorder Categories

PATCH /api/v1/categories/reorder

Authentication

Required

Description

Updates category display order.

---

## Customer retrieves categories

GET /api/v1/store/{slug}/categories

Authentication

Not Required

# Business Rules

Category names must be unique within a Store.

Products remain active if a Category is archived.

Only empty Categories may be deleted.

Display order determines storefront navigation.

# Security

Categories are isolated by Store.

# Status

Frozen