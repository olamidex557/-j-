# Products API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Products API manages the complete product lifecycle.

Products belong to a Store.

Only authenticated Store owners can manage products.

Customers can only view published products.

# Base Route

/api/v1/products

# Merchant Workflow

Create Product

↓

Upload Images

↓

Configure Options

↓

Generate Variants

↓

Publish Product

↓

Update Inventory

↓

Archive Product

# Customer Workflow

Browse Products

↓

View Product

↓

Select Variant

↓

Add to Cart

↓

Checkout

# Endpoints

## Merchant creates a product

POST /api/v1/products

Authentication

Required

Description

Creates a draft product.

Response

201 Created

---

## Merchant retrieves products

GET /api/v1/products

Authentication

Required

Query Parameters

page

limit

search

category

status

sort

Response

200 OK

---

## Merchant views one product

GET /api/v1/products/{id}

Authentication

Required

Response

200 OK

---

## Merchant updates a product

PATCH /api/v1/products/{id}

Authentication

Required

Response

200 OK

---

## Merchant archives a product

PATCH /api/v1/products/{id}/archive

Authentication

Required

Response

200 OK

---

## Merchant restores a product

PATCH /api/v1/products/{id}/restore

Authentication

Required

Response

200 OK

---

## Merchant deletes a draft product

DELETE /api/v1/products/{id}

Authentication

Required

Response

204 No Content

Only draft products may be permanently deleted.

---

## Merchant uploads product images

POST /api/v1/products/{id}/images

Authentication

Required

Content-Type

multipart/form-data

Response

201 Created

---

## Merchant removes product image

DELETE /api/v1/products/{id}/images/{imageId}

Authentication

Required

Response

204 No Content

---

## Merchant creates product options

POST /api/v1/products/{id}/options

Authentication

Required

Example

Color

Size

Material

---

## Merchant generates variants

POST /api/v1/products/{id}/variants

Authentication

Required

Description

Generates product variants from selected option values.

---

## Merchant updates inventory

PATCH /api/v1/products/{id}/inventory

Authentication

Required

Response

200 OK

---

## Customer views storefront products

GET /api/v1/store/{slug}/products

Authentication

Not Required

Description

Returns published products only.

---

## Customer views one product

GET /api/v1/store/{slug}/products/{productSlug}

Authentication

Not Required

# Business Rules

Products are created as Draft.

Only Published products appear on storefronts.

Archived products cannot be purchased.

Inventory cannot be negative.

Only one Store owns a Product.

# Security

Merchants manage only their own Products.

Customers never access unpublished Products.

# Status

Frozen