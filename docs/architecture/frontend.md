# Frontend Architecture

Version: 1.0

Status: Frozen

Last Updated: July 2026

---

# Overview

The Oja frontend is responsible for delivering a fast, responsive, accessible, and premium user experience for merchants and customers.

The frontend must remain presentation-focused.

Business logic belongs to the backend.

This document defines the standards every frontend engineer and AI coding assistant must follow.

---

# Technology Stack

Framework

- Next.js 16 (App Router)

Language

- TypeScript (Strict Mode)

Styling

- Tailwind CSS v4

UI Components

- shadcn/ui

Icons

- Lucide React

Forms

- React Hook Form

Validation

- Zod

Data Fetching

- TanStack Query

State Management

- Zustand

Animation

- Motion

Fonts

- Geist Sans

Image Optimization

- Next.js Image

---

# Frontend Responsibilities

The frontend is responsible for

- Rendering UI
- Navigation
- Forms
- Client-side validation
- API communication
- Loading states
- Error states
- Empty states
- Optimistic UI (where appropriate)

The frontend is NOT responsible for

- Business logic
- Authentication decisions
- Payment processing
- Authorization
- Database access

---

# Project Structure

src/

app/

components/

features/

hooks/

lib/

services/

store/

styles/

types/

utils/

middleware.ts

Every folder has one responsibility.

---

# App Directory

The App Router contains

- Layouts
- Routes
- Loading UI
- Error UI
- Metadata

Business logic must not be placed inside route files.

---

# Components

Components must be reusable.

Organize by responsibility.

components/

common/

layouts/

forms/

ui/

icons/

Rules

Never place feature-specific components here.

---

# Feature Modules

Every feature owns its own UI.

Example

features/

products/

orders/

customers/

checkout/

settings/

Each feature contains

components/

hooks/

services/

types/

schemas/

Only that feature may modify its contents.

---

# State Management

Global State

Use Zustand only.

Allowed

Theme

Sidebar

User Preferences

Temporary UI State

Do NOT store

Products

Orders

Customers

API Data

Those belong in TanStack Query.

---

# Server State

TanStack Query manages

Fetching

Caching

Invalidation

Synchronization

Never duplicate server state inside Zustand.

---

# Forms

Every form uses

React Hook Form

+

Zod

Validation happens

Client

Server

Never trust client validation alone.

---

# Routing

Use App Router.

Routing rules

Dashboard

/app

Storefront

Subdomain routing

Admin

Separate route group

Never use Pages Router.

---

# API Communication

All HTTP requests go through

services/

Never call fetch()

directly inside components.

Every API must have a service.

Example

ProductService

OrderService

CustomerService

---

# Environment Variables

Client variables

NEXT_PUBLIC_

Everything else

Server only.

Never expose secrets.

---

# Error Handling

Every page must handle

Loading

Error

Empty

Success

Never display raw server errors.

---

# Loading States

Every async action requires

Skeleton

Spinner

Progress

No blank screens.

---

# Empty States

Every list must have

Designed empty state

Call to action

Helpful message

---

# Images

Always use

Next.js Image

Rules

Lazy loading

Responsive

Optimized

Never use HTML img tags.

---

# Styling Rules

Use

Tailwind CSS

No inline styles.

No CSS frameworks.

No CSS modules unless approved.

---

# Component Design

Components must

Be reusable

Be composable

Receive props

Avoid side effects

Maximum responsibility

One thing only.

---

# Naming Convention

Components

PascalCase

ProductCard.tsx

Hooks

camelCase

useProducts.ts

Files

kebab-case

product-card.tsx

Folders

kebab-case

product-management/

---

# Import Rules

Prefer

Absolute imports

Example

@/components

Avoid deep relative imports.

---

# Performance

Minimize rerenders.

Memoize expensive operations.

Lazy load heavy components.

Code split where appropriate.

Avoid unnecessary client components.

---

# Client Components

Use client components only when required.

Examples

Forms

State

Browser APIs

Everything else remains server components.

---

# Accessibility

Every page must support

Keyboard navigation

Screen readers

ARIA labels

Visible focus

Color contrast

Accessibility is required.

---

# Responsive Design

Support

Mobile

Tablet

Desktop

Desktop-first layouts are prohibited.

Mobile-first only.

---

# Animations

Animations must be

Fast

Purposeful

Subtle

Avoid excessive motion.

Default durations

150ms

250ms

350ms

---

# Icons

Only Lucide React.

No mixed icon libraries.

---

# Fonts

Primary

Geist Sans

No additional fonts without approval.

---

# Colors

Colors come only from the Design System.

Never hardcode colors.

---

# Authentication

Frontend displays

Authenticated UI

Unauthenticated UI

Authorization decisions remain on the backend.

---

# Security

Never trust

User input

Query params

Local Storage

Everything must be validated by the backend.

---

# Logging

Frontend logs

Development only.

Production logging goes through monitoring.

No console.log in production.

---

# Testing

Frontend should support

Unit Testing

Component Testing

Integration Testing

End-to-End Testing

---

# Code Quality

Strict TypeScript.

No any.

No dead code.

No commented-out code.

No duplicate logic.

---

# Definition of Done

A frontend feature is complete only when

- Responsive
- Accessible
- Fully typed
- Uses Design System
- Error states handled
- Loading states handled
- Empty states handled
- Build passes
- Lint passes

---

# Future Expansion

The frontend architecture must support

Merchant Dashboard

Customer Storefront

Admin Portal

Mobile App

without requiring restructuring.

---

# Non-Negotiable Rules

Business logic belongs in the backend.

Every API call uses a service.

Every form uses React Hook Form + Zod.

Every feature owns its own module.

No direct database access.

No hardcoded values.

No breaking the Design System.

---

# Architecture Status

Status

FROZEN

This document governs every frontend implementation throughout the Oja project.