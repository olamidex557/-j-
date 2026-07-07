# Infrastructure Architecture

Version: 1.0

Status: Frozen

Last Updated: July 2026

---

# Overview

This document defines the production infrastructure powering Oja.

The infrastructure is designed to be

- Reliable
- Secure
- Scalable
- Observable
- Maintainable

Infrastructure decisions should prioritize long-term stability over short-term convenience.

---

# Infrastructure Stack

Frontend

- Vercel

Backend

- Railway

Database

- Neon PostgreSQL

Storage

- Cloudflare R2

Cache

- Upstash Redis

Queue

- BullMQ

Authentication

- Clerk

Payments

- Paystack

Emails

- Resend

DNS

- Cloudflare

Monitoring

- Sentry
- Better Stack

Version Control

- GitHub

CI/CD

- GitHub Actions

---

# Environment Strategy

Three environments exist.

Development

Purpose

Local development.

Production services are never connected.

---

Staging

Purpose

Internal testing before production.

Production data is never used.

---

Production

Purpose

Live customer environment.

Only tested code reaches production.

---

# Deployment Flow

Developer

↓

Feature Branch

↓

Pull Request

↓

Review

↓

Merge into develop

↓

Testing

↓

Merge into main

↓

Automatic Production Deployment

---

# Hosting Responsibilities

Frontend

Responsible for

- Merchant Dashboard
- Customer Storefront
- Marketing Website

Hosted on Vercel.

---

Backend

Responsible for

- APIs
- Business Logic
- Background Jobs
- Webhooks

Hosted on Railway.

---

Database

Responsible for

- Persistent Data
- Transactions
- Relationships

Hosted on Neon.

---

Storage

Responsible for

- Product Images
- Logos
- Store Banners

Hosted on Cloudflare R2.

---

Cache

Responsible for

- API Cache
- Rate Limiting
- Queue Storage
- Temporary Data

Hosted on Upstash Redis.

---

# DNS

Managed by Cloudflare.

Domains

oja.com

Marketing Website

app.oja.com

Merchant Dashboard

*.oja.com

Merchant Storefronts

Future

admin.oja.com

Internal Administration

status.oja.com

System Status

docs.oja.com

Documentation

---

# SSL

Cloudflare manages SSL.

HTTPS is mandatory.

HTTP traffic automatically redirects to HTTPS.

---

# CDN

Cloudflare CDN serves

Images

Assets

Static Content

Goals

Low latency

Reduced bandwidth

Improved global performance

---

# Image Delivery

Every uploaded image should be

Validated

Optimized

Compressed

Cached

Responsive

Supported Formats

JPEG

PNG

WEBP

AVIF (Future)

---

# Backups

Database

Automatic backups enabled.

Point-in-time recovery enabled.

---

Daily Backup

Encrypted off-site backup.

---

Storage

Cloudflare R2 object versioning enabled.

Deleted assets remain recoverable.

---

GitHub

Entire codebase backed up through Git.

---

# Disaster Recovery

In the event of failure

Restore Database

Restore Object Storage

Redeploy Backend

Redeploy Frontend

Verify DNS

Verify Payments

Verify Emails

Recovery should be documented and repeatable.

---

# CI/CD

Every push triggers

Install

Lint

Type Check

Tests

Build

Deployment (where applicable)

Deployment must fail if any required check fails.

---

# Secrets Management

Secrets are never committed.

Secrets include

API Keys

Database URLs

JWT Secrets

Redis URLs

Payment Keys

Storage Credentials

Email Credentials

Secrets exist only in environment variables.

---

# Monitoring

Application Monitoring

Sentry

Tracks

Errors

Exceptions

Performance

---

Infrastructure Monitoring

Better Stack

Tracks

Uptime

Downtime

Response Times

Alerts

---

# Logging

Logs include

Authentication

Orders

Payments

Subscriptions

Errors

Background Jobs

Logs never include

Passwords

Tokens

Secrets

Payment Credentials

---

# Scaling Strategy

Frontend

Automatically scales using Vercel.

---

Backend

Scales horizontally using Railway.

---

Database

Scales vertically and through Neon capabilities.

---

Storage

Cloudflare R2 scales automatically.

---

Redis

Upstash handles scaling.

---

# Performance Targets

Dashboard

<2 seconds

Storefront

<2 seconds

Average API Response

<300ms

Image Load

<500ms

Availability

99.9%

---

# Rate Limiting

Protect

Authentication

Payments

Checkout

Public APIs

Prevent

Brute Force

Spam

Abuse

---

# Health Checks

Backend exposes

/health

Returns

Application Status

Database Status

Redis Status

Storage Status

Queue Status

---

# Scheduled Jobs

Examples

Subscription Expiration

Analytics Aggregation

Cleanup Tasks

Email Queue

Future Notifications

Scheduled jobs must never block incoming requests.

---

# Infrastructure Rules

Never deploy directly to production.

Every deployment must pass CI.

Every production issue must be logged.

Every production secret must remain encrypted.

Every production deployment must be reversible.

---

# Future Expansion

Infrastructure must support

Mobile Application

Public API

Multiple Workers

Additional Regions

International Expansion

without requiring redesign.

---

# Non-Negotiable Rules

No secrets in Git.

HTTPS everywhere.

Automated backups enabled.

Monitoring enabled.

CI/CD mandatory.

Cloudflare manages DNS.

All deployments are automated.

---

# Infrastructure Status

Status

FROZEN

This document governs all infrastructure decisions throughout the Oja project.