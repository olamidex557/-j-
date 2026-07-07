# Database Design

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Overview

This directory contains the complete database specification for Oja.

The purpose of these documents is to define every entity, relationship, constraint, and index before implementation.

No database schema should be implemented unless it aligns with these specifications.

# Database Engine

Database

PostgreSQL

Provider

Neon

ORM

Prisma

# Design Principles

Every table has a single responsibility.

Every entity has a UUID primary key.

Every table includes timestamps.

Relationships use foreign keys.

Soft deletes are preferred over permanent deletion where appropriate.

Database constraints enforce data integrity.

Indexes are added only when they improve query performance.

# Naming Conventions

Tables

Plural

Examples

users

stores

products

orders

Columns

snake_case

Examples

store_id

created_at

updated_at

Primary Keys

id

Foreign Keys

entity_id

Examples

store_id

customer_id

product_id

Boolean Fields

Prefix with

is_

Examples

is_active

is_featured

Enums

Use PostgreSQL enums through Prisma.

# Multi-Tenancy

Oja is a multi-tenant platform.

Every business entity belongs to a Store.

Examples

Products

Orders

Categories

Customers

Payments

Queries must always filter by Store ID.

Cross-tenant access is prohibited.

# Common Columns

Most tables should include

id

created_at

updated_at

Some tables may also include

deleted_at

is_active

# Relationships

Relationships must use foreign keys.

Cascade deletes should be used only when appropriate.

Financial records must never be automatically deleted.

# Indexing

Indexes should exist for

Foreign Keys

Store ID

Created At

Frequently searched columns

Avoid unnecessary indexes.

# Migrations

Every schema change requires a migration.

Never modify production tables manually.

# Data Integrity

Use

Foreign Keys

Unique Constraints

Check Constraints

Enums

Never rely solely on application logic.

# Backups

Database backups are handled by Neon.

Point-in-time recovery must remain enabled.

# Security

Database credentials must never be committed.

Only the backend communicates with the database.

Frontend access is prohibited.

# Status

Frozen

These specifications govern every database implementation in Oja.