# Oja System Architecture

Version: 1.0

Status: Frozen

Last Updated: July 2026

---

# Overview

Oja is a production-grade multi-tenant commerce platform that enables businesses to create professional online storefronts, receive customer orders, accept online payments, and manage their business from a centralized dashboard.

The platform is designed around scalability, maintainability, security, and modularity.

This document defines the overall software architecture and engineering boundaries for Oja.

This document is considered the source of truth for architectural decisions.

---

# Architecture Principles

Every engineering decision must follow these principles.

## 1. Production First

All code must be production-ready.

Never write:

- Placeholder code
- Temporary implementations
- Mock services
- TODOs that affect production

---

## 2. Modular Architecture

Every feature is isolated.

Examples

Authentication

Products

Orders

Payments

Customers

Store

Each feature owns its own logic.

Features should communicate through well-defined interfaces.

---

## 3. Scalability

Every decision should support growth from:

1 merchant

to

100,000+ merchants

without requiring architectural redesign.

---

## 4. Simplicity

Complexity must never be introduced unless necessary.

Prefer:

Simple

Readable

Maintainable

over

Complex

Clever

Hard-to-maintain

solutions.

---

## 5. Separation of Concerns

Responsibilities must remain independent.

Frontend handles:

- UI
- Client state
- User interactions

Backend handles:

- Business logic
- Validation
- Database
- Security

Database stores data only.

---

# System Architecture

```
                Customer
                    │
                    ▼
          {store}.oja.com
                    │
                    ▼
────────────────────────────────

             Next.js Frontend

────────────────────────────────
                    │
                    ▼

           NestJS Backend

────────────────────────────────
         │        │         │

         ▼        ▼         ▼

   PostgreSQL   Redis     Cloudflare R2

         │

         ▼

     Background Jobs

         │

         ▼

       Resend Email
```

---

# Multi-Tenant Architecture

Oja is a multi-tenant SaaS platform.

One application serves multiple businesses.

Each merchant owns an isolated store.

Example

Merchant A

```
nike.oja.com
```

Merchant B

```
beautyhub.oja.com
```

Merchant C

```
furniture.oja.com
```

Each merchant has:

- Products
- Customers
- Orders
- Settings
- Payments

Data isolation is mandatory.

Every database query must include Store ID.

Cross-store access is prohibited.

---

# Monorepo Architecture

Oja uses Turborepo.

```
apps/
    web/
    server/

packages/
    ui/
    types/
    utils/
    config/
    constants/

docs/

tooling/
```

Each application has one responsibility.

---

# Frontend Responsibilities

Frontend is responsible for

- Rendering UI
- Routing
- Forms
- Client validation
- API communication
- Loading states
- Error states

Frontend must NEVER contain business logic.

---

# Backend Responsibilities

Backend owns

Authentication

Authorization

Validation

Business Logic

Payments

Orders

Customers

Database

Notifications

Subscriptions

Everything important happens on the server.

---

# Database Responsibilities

Database stores

Users

Stores

Products

Categories

Orders

Customers

Subscriptions

Payments

No business logic exists in the database.

---

# Storage Responsibilities

Cloudflare R2 stores

Product Images

Store Logos

Store Banners

Future:

Invoices

Exports

Documents

---

# Cache Responsibilities

Redis is used only for

Caching

Rate Limiting

Queues

Temporary Data

Never use Redis as the source of truth.

---

# Background Jobs

Background jobs process

Emails

Notifications

Analytics

Scheduled Tasks

Webhook Processing

Long-running tasks must never block API requests.

---

# Authentication

Authentication is handled by Clerk.

Backend trusts Clerk-issued identities only.

Authorization is handled by the backend.

Authentication and Authorization are separate responsibilities.

---

# Payments

Customer payments always go directly to the merchant.

Flow

Customer

↓

Merchant Paystack

↓

Merchant Bank Account

Oja never stores customer funds.

Oja only charges merchants for subscriptions.

---

# Deployment

Frontend

Vercel

Backend

Railway

Database

Neon PostgreSQL

Storage

Cloudflare R2

DNS

Cloudflare

Emails

Resend

Monitoring

Sentry

Better Stack

---

# Folder Ownership

Each module owns its files.

Example

Products module owns

- Controllers
- Services
- DTOs
- Validation
- UI

Other modules must not directly modify Product logic.

---

# Communication Rules

Frontend communicates only with Backend.

Backend communicates with

Database

Redis

Storage

Email

Payment Provider

Database never communicates with frontend.

---

# Error Handling

Errors must be

Predictable

Consistent

Typed

Never expose internal server errors to users.

Every API response must follow a consistent response structure.

---

# Logging

The backend logs

Authentication

Orders

Payments

Errors

Critical actions

Sensitive information must never be logged.

---

# Security

Security is mandatory.

Every endpoint requires

Validation

Authorization

Authentication

Rate limiting

Secure error handling

Security must never be optional.

---

# Scalability Strategy

The system must support

Additional services

Mobile application

Public API

Background workers

Analytics

without major architectural changes.

Architecture must support horizontal scaling.

---

# Performance Goals

Storefront

<2 seconds

Dashboard

<2 seconds

API

Average response

<300ms

Image delivery

Optimized

Lazy loaded

Cached

---

# Future Expansion

The architecture must support

Inventory

POS

Shipping

Staff Accounts

Mobile App

Public API

Third-party Integrations

without restructuring the project.

---

# Non-Negotiable Rules

Business logic belongs only in the backend.

Database queries always include Store ID.

Frontend never accesses the database directly.

No feature may violate module boundaries.

No feature may bypass authentication or authorization.

No feature may modify another module without a documented reason.

---

# Architecture Status

Status

FROZEN

Changes to this document require approval before implementation.

This document governs every engineering decision made throughout the Oja project.