# Authentication API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Overview

Authentication is managed by Clerk.

Oja does not implement custom authentication endpoints.

The backend validates authenticated sessions and issues authorization based on application roles.

# Authentication Flow

User

↓

Clerk Authentication

↓

Session Created

↓

Frontend Receives Session

↓

Backend Validates Session

↓

Request Processed

# Protected Endpoints

All Dashboard endpoints require authentication.

Examples

GET /api/v1/products

POST /api/v1/orders

PATCH /api/v1/store

DELETE /api/v1/categories/{id}

# Public Endpoints

Storefront browsing.

Examples

GET /api/v1/store/{slug}

GET /api/v1/store/{slug}/products

GET /api/v1/store/{slug}/categories

POST /api/v1/store/{slug}/checkout

# Authentication Headers

Authorization

Bearer <token>

Content-Type

application/json

# Authentication Rules

Unauthenticated requests return

401 Unauthorized

Invalid sessions return

401 Unauthorized

Authenticated users without permission return

403 Forbidden

# Backend Responsibilities

Validate Clerk session.

Resolve authenticated user.

Resolve current Store.

Verify permissions.

# Response Codes

200

Authenticated

401

Unauthenticated

403

Forbidden

# Status

Frozen