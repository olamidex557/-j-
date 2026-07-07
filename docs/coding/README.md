# Coding Standards

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

This document defines the engineering standards for Oja.

Every contributor must follow these standards.

Consistency is more important than personal preference.

# Goals

Produce code that is

Readable

Maintainable

Predictable

Testable

Scalable

# Principles

Write code for humans first.

Prefer clarity over cleverness.

Avoid duplication.

Keep functions small.

Keep components focused.

Write self-documenting code.

# General Rules

Use TypeScript Strict Mode.

Avoid `any`.

Prefer composition over inheritance.

Keep files focused on a single responsibility.

Never commit commented-out code.

Never leave TODO comments without an issue reference.

# Project Structure

The repository follows domain-oriented architecture.

Platform

Commerce

Configuration

System

Every new feature belongs to one domain.

# Formatting

Formatting is enforced automatically.

Developers should not manually format files differently.

# Linting

All code must pass ESLint.

No warnings should be ignored without justification.

# Testing

Business logic should be testable.

Critical workflows require automated tests.

# Documentation

Public modules require documentation.

Breaking architectural decisions must update documentation.

# Git

Small commits.

Meaningful commit messages.

Feature branches only.

Never commit directly to main.

# Reviews

Every pull request should

Compile successfully

Pass linting

Pass tests

Match documentation

# Status

Frozen

This document governs all source code written for Oja.