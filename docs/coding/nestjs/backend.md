# NestJS Standards

Version: 1.0

Status: Frozen

# Philosophy

The backend owns business logic.

Controllers coordinate requests.

Services implement business rules.

Repositories access the database.

# Module Structure

Each module contains

controller

service

repository

dto

schemas

types

events

tests

module

Every module is self-contained.

# Controllers

Controllers

Receive requests.

Validate input.

Call services.

Return responses.

Controllers never contain business logic.

# Services

Services own

Business logic.

Transactions.

External integrations.

Event publishing.

# Repositories

Repositories communicate with Prisma.

No business logic belongs here.

Repositories return domain data only.

# DTOs

Every request passes through DTO validation.

Use Zod for validation.

Never trust client input.

# Dependency Injection

Use NestJS dependency injection exclusively.

Never instantiate services manually.

# Transactions

Use Prisma transactions when modifying multiple related records.

Transactions must be atomic.

# Events

Business events include

ProductCreated

OrderConfirmed

PaymentVerified

SubscriptionActivated

Events trigger background processes.

# Error Handling

Throw domain-specific exceptions.

Do not expose implementation details.

Use global exception filters.

# Logging

Log

Authentication

Payments

Orders

Critical failures

Never log

Secrets

Passwords

Tokens

Card information

# Background Jobs

Long-running work belongs in queues.

Never block request processing.

# Security

Every protected endpoint requires

Authentication

Authorization

Validation

Ownership verification

# Rules

Controllers stay thin.

Services remain focused.

Repositories access the database only.

Modules remain independent.

Business logic never leaves the backend.

# Status

Frozen