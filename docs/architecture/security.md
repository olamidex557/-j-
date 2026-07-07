# Security Architecture

Version: 1.0

Status: Frozen

Last Updated: July 2026

---

# Overview

Security is a first-class concern in Oja.

Every component of the platform must be designed using a security-first approach.

Security is never optional and must never be sacrificed for convenience.

This document defines the security standards governing the entire platform.

---

# Security Principles

Every engineering decision must follow these principles.

- Least Privilege
- Defense in Depth
- Zero Trust
- Fail Secure
- Secure by Default

No feature may bypass these principles.

---

# Authentication

Authentication is handled exclusively by Clerk.

Responsibilities

- User Registration
- User Login
- Session Management
- Password Reset
- Email Verification
- Multi-device Sessions

The backend never creates or manages passwords.

Only authenticated users may access protected resources.

---

# Authorization

Authentication proves identity.

Authorization determines permissions.

Authorization is enforced entirely by the backend.

Roles

Merchant

- Access only their own store.

Platform Admin

- Platform-wide access.

Future

Staff

Customer Account

Every request must verify ownership before accessing data.

---

# Multi-Tenant Security

Oja is a multi-tenant platform.

Every resource belongs to a Store.

Examples

Products

Orders

Customers

Categories

Payments

Subscriptions

Every database query must include Store ID.

Cross-tenant access is prohibited.

---

# Session Security

Sessions are managed by Clerk.

Requirements

- Secure cookies
- Automatic expiration
- Revocation support
- Device management

Application code must never manually manage authentication sessions.

---

# API Security

Every protected endpoint requires

Authentication

Authorization

Validation

Rate Limiting

Audit Logging

Public endpoints must explicitly declare themselves as public.

---

# Request Validation

Every request must be validated.

Validation includes

Required fields

Type validation

Length validation

Enum validation

Business validation

Never trust client input.

---

# Response Security

Never expose

Stack traces

SQL errors

Framework internals

Secrets

Tokens

Private identifiers

Return user-friendly error messages only.

---

# Environment Variables

Secrets must never exist inside source code.

Secrets include

Database URLs

Redis URLs

JWT secrets

API keys

Storage credentials

Payment credentials

Email credentials

Only environment variables may contain secrets.

---

# Password Policy

Passwords are managed by Clerk.

Oja never stores or hashes passwords.

---

# Database Security

Use Prisma exclusively.

Never concatenate SQL strings.

Use migrations for schema changes.

Production database changes must never be made manually.

---

# Encryption

Data in Transit

HTTPS required.

TLS mandatory.

---

Sensitive Data

Encrypted where applicable.

---

Passwords

Managed externally by Clerk.

---

# Payment Security

Customer payments go directly to the merchant.

Oja never stores

Card Numbers

CVV

Card Expiry

Payment credentials

Only transaction references and verification metadata are stored.

---

# File Upload Security

Every upload is validated.

Checks include

File Type

File Size

Mime Type

Ownership

Reject executable files.

Reject unsupported formats.

Store uploads only in Cloudflare R2.

---

# Rate Limiting

Protect

Authentication

Checkout

Payments

Public APIs

Webhook endpoints

Prevent

Spam

Brute-force attacks

Abuse

Denial-of-Service attempts

---

# CSRF Protection

State-changing requests must be protected against Cross-Site Request Forgery.

Use secure cookie settings.

Verify request origin where applicable.

---

# XSS Protection

Never render unsanitized user input.

Escape HTML output.

Sanitize rich text before rendering.

Never trust browser input.

---

# Injection Protection

Prevent

SQL Injection

Command Injection

Header Injection

Template Injection

Prisma parameterized queries must be used.

---

# Secure Headers

Enable

Strict-Transport-Security

Content-Security-Policy

X-Frame-Options

X-Content-Type-Options

Referrer-Policy

Permissions-Policy

---

# Audit Logs

Log

Authentication events

Role changes

Subscription changes

Payment events

Order status changes

Store updates

Never log

Passwords

Secrets

Tokens

Payment credentials

---

# Monitoring

Monitor

Failed logins

Permission violations

Unexpected server errors

Payment failures

Webhook failures

Security alerts must be actionable.

---

# Dependency Security

Dependencies must

Be maintained

Receive security updates

Avoid abandoned packages

Run regular vulnerability scans.

---

# Access Control

Principle of Least Privilege.

Users receive only the permissions required for their role.

Future staff accounts must use role-based permissions.

---

# Backup Security

Database backups

Encrypted

Object storage backups

Versioned

Backups stored separately from production.

---

# Incident Response

If a security incident occurs

Identify

Contain

Investigate

Recover

Review

Document

Every incident should produce an action plan.



# Secure Coding Standards

Never

Hardcode secrets

Trust user input

Disable validation

Expose internal errors

Store sensitive credentials

Always

Validate

Sanitize

Authenticate

Authorize

Log securely

Handle errors gracefully



# Compliance Goals

Follow industry best practices based on

OWASP Top 10

Secure Software Development Lifecycle

Principle of Least Privilege

Zero Trust Architecture



# Future Security Enhancements

Multi-Factor Authentication

Security Dashboard

Admin Activity Monitoring

Device Management

IP Restrictions

Suspicious Login Detection


# Non-Negotiable Rules

Every endpoint authenticated unless explicitly public.

Every request validated.

Every resource tenant-isolated.

Every secret stored securely.

Every upload validated.

Every action logged where appropriate.

Security reviews are mandatory before production releases.


# Security Status

Status

FROZEN

This document governs every security decision made throughout the Oja project.