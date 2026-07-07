# API Specification

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Overview

This directory contains the complete REST API specification for Oja.

The API is consumed by

- Merchant Dashboard
- Customer Storefront
- Future Mobile Application

The backend is implemented using NestJS.

All endpoints return JSON.

# API Design Principles

The API follows REST principles.

Resources are represented using plural nouns.

Examples

GET /products

POST /products

PATCH /products/{id}

DELETE /products/{id}

HTTP verbs define the action.

# Authentication

Authentication is handled using Clerk.

Protected endpoints require a valid authenticated session.

Public storefront endpoints are explicitly marked as public.

# Authorization

Authorization is enforced by the backend.

Every request must verify

User Identity

Store Ownership

Resource Permissions

# Multi-Tenancy

Every merchant resource belongs to a Store.

Every request accessing merchant data must resolve the current Store before executing business logic.

Cross-tenant access is prohibited.

# Request Validation

Every request is validated.

Validation includes

Required fields

Types

Business rules

Ownership

Invalid requests return validation errors.

# Response Format

Successful response

{
  "success": true,
  "message": "Request successful.",
  "data": {}
}

Failed response

{
  "success": false,
  "message": "Request failed.",
  "errors": []
}

Every endpoint follows this format.

# Status Codes

200

Request successful.

201

Resource created.

204

Resource deleted.

400

Validation error.

401

Unauthenticated.

403

Forbidden.

404

Resource not found.

409

Conflict.

422

Business validation failed.

429

Too many requests.

500

Internal server error.

# Pagination

List endpoints use cursor-based pagination.

Default page size

20

Maximum page size

100

# Sorting

Supported query parameter

sort

Examples

Newest

Oldest

Price

Alphabetical

# Filtering

Supported where applicable.

Examples

Category

Status

Price

Date

# Searching

Search endpoints support

q

Example

GET /products?q=chair

# API Versioning

Initial version

v1

Base URL

/api/v1

Future breaking changes require a new version.

# Error Handling

Errors must be

Consistent

Predictable

Human-readable

Internal implementation details must never be exposed.

# Security

All protected endpoints require

Authentication

Authorization

Validation

Rate limiting

Secure error handling

# Documentation Status

Frozen

This document governs every API specification throughout the Oja project.