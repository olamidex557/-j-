# Backend Architecture

Version: 1.0

Status: Frozen

Last Updated: July 2026

---

# Overview

The Oja backend is the core of the platform.

It owns all business logic, data integrity, security, integrations, background processing, and communication with external services.

No business logic may exist outside the backend.

This document defines the architecture, conventions, and engineering rules governing the backend.

---

# Technology Stack

Framework

- NestJS

Language

- TypeScript (Strict Mode)

Database

- PostgreSQL (Neon)

ORM

- Prisma

Authentication

- Clerk

Validation

- Zod

Caching

- Upstash Redis

Queue

- BullMQ

Storage

- Cloudflare R2

Payments

- Paystack

Email

- Resend

---

# Backend Responsibilities

The backend owns

- Authentication
- Authorization
- Business Logic
- Data Validation
- Payments
- Orders
- Customers
- Products
- Store Management
- Subscriptions
- Notifications
- Background Jobs
- Audit Logs

---

# Design Principles

The backend follows

- Clean Architecture
- Modular Architecture
- SOLID Principles
- Dependency Injection
- Repository Pattern
- Event-Driven Architecture

---

# Module Structure

Every feature lives inside its own module.

Example

modules/

auth/

stores/

products/

orders/

customers/

payments/

subscriptions/

notifications/

Each module owns

Controller

Service

Repository

DTO

Schemas

Types

Events

No module may directly access another module's database logic.

---

# Layer Responsibilities

Controller

Receives requests.

Validates input.

Returns responses.

Controllers never contain business logic.

---

Service

Contains business logic.

Coordinates repositories.

Publishes events.

Communicates with external services.

---

Repository

Responsible for database operations only.

Repositories never contain business rules.

---

DTO

Defines request and response structures.

Every request entering the backend must pass through DTO validation.

---

Validation

Validation occurs before business logic.

Every request must be validated.

Never trust incoming data.

---

# Dependency Injection

All services must be injected.

Never instantiate services manually.

NestJS Dependency Injection is mandatory.

---

# Repository Pattern

Database access must happen through repositories.

Never query Prisma directly from controllers.

Never query Prisma directly from services unless explicitly approved.

---

# Event-Driven Architecture

Major actions publish events.

Examples

merchant.created

store.created

product.created

order.created

order.confirmed

order.completed

payment.completed

subscription.renewed

Events trigger

Emails

Notifications

Analytics

Background Jobs

Future integrations

---

# Transactions

Use Prisma Transactions whenever

Multiple tables change

Financial records change

Inventory changes

Subscription updates

Transactions must be atomic.

---

# Multi-Tenancy

Oja is multi-tenant.

Every resource belongs to one Store.

Every database query must include

Store ID

No merchant may access another merchant's data.

Tenant isolation is mandatory.

---

# Authentication

Authentication is handled by Clerk.

Backend verifies authenticated users.

Backend never trusts frontend authentication alone.

---

# Authorization

Authorization is handled by Roles and Ownership.

Example

Merchant

Own Store

Cannot access another store.

Admin

Platform-wide access.

---

# API Design

RESTful architecture.

Naming

GET /products

POST /products

PATCH /products/:id

DELETE /products/:id

Plural resource names only.

---

# Response Structure

Every API response follows the same format.

Success

{
  "success": true,
  "message": "",
  "data": {}
}

Failure

{
  "success": false,
  "message": "",
  "errors": []
}

Consistency is mandatory.

---

# Error Handling

Use Global Exception Filters.

Never expose stack traces.

Never expose database errors.

Never expose internal implementation.

Return user-friendly messages.

---

# Logging

Log

Authentication

Orders

Payments

Subscriptions

Critical Errors

Audit Events

Never log

Passwords

Secrets

Tokens

Payment credentials

---

# Caching

Redis is used for

Rate Limiting

Caching

Temporary Sessions

Queues

Never use Redis as the source of truth.

---

# Background Jobs

BullMQ processes

Emails

Notifications

Subscription Renewals

Webhook Processing

Analytics

Large Imports

Long-running tasks never block API requests.

---

# File Uploads

Uploads handled through Cloudflare R2.

Backend validates

File Type

File Size

Ownership

Never trust uploaded files.

---

# Security

Every endpoint requires

Authentication

Authorization

Validation

Sanitization

Rate Limiting

Secure Headers

---

# Database Rules

Prisma is the only ORM.

Never use raw SQL unless absolutely necessary.

Always create migrations.

Never modify production database manually.

---

# Environment Variables

Validate every environment variable on startup.

Application must fail fast if required variables are missing.

---

# Configuration

Centralized configuration only.

Never hardcode

URLs

Secrets

Keys

Limits

Timeouts

---

# Notifications

Notification Service owns

Emails

Future SMS

Future Push Notifications

No module sends emails directly.

---

# Payments

Payment Service owns

Paystack

Subscription Billing

Payment Verification

Webhook Handling

Payment logic must never exist in Orders.

---

# Storage

Storage Service owns

Logos

Product Images

Banners

Future Documents

No module communicates directly with R2.

---

# Monitoring

Integrate

Sentry

Better Stack

Every unexpected error should be traceable.

---

# Performance Goals

Average API Response

<300ms

Heavy operations

Background Jobs

Efficient queries

Indexes

Pagination

---

# Code Quality

Strict TypeScript

No any

No duplicate logic

No dead code

No circular dependencies

Small focused services

---

# Testing

Support

Unit Tests

Integration Tests

End-to-End Tests

Business logic must be testable.

---

# Folder Ownership

Each module owns

Controller

Service

Repository

Events

DTO

Schemas

Types

Other modules communicate through services only.

---

# Future Expansion

Architecture must support

POS

Inventory

Shipping

Mobile App

Public API

Third-party Integrations

without restructuring.

---

# Non-Negotiable Rules

Business logic belongs only in Services.

Controllers remain thin.

Repositories access the database only.

Every query is tenant-aware.

Every request is validated.

Every endpoint is authenticated unless explicitly public.

Every module remains independent.

---

# Architecture Status

Status

FROZEN

This document governs all backend implementation throughout the Oja project.