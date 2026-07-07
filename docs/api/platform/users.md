# Users API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

Manage authenticated user profile information.

Authentication remains the responsibility of Clerk.

# Base Route

/api/v1/users

# Endpoints

## Get Current User

GET /api/v1/users/me

Authentication

Required

Description

Returns the authenticated user's profile.

Response

200 OK

## Update Profile

PATCH /api/v1/users/me

Authentication

Required

Request

{
  "firstName": "",
  "lastName": "",
  "phoneNumber": ""
}

Response

200 OK

## Upload Avatar

POST /api/v1/users/me/avatar

Authentication

Required

Content-Type

multipart/form-data

Response

201 Created

# Validation

First Name

Required

Maximum Length

100

Last Name

Maximum Length

100

Phone Number

Valid Nigerian or international number.

Avatar

Image only.

Maximum size

5 MB

# Errors

400

Validation Failed

401

Unauthenticated

403

Forbidden

404

User Not Found

# Business Rules

Email cannot be changed through Oja.

Passwords cannot be changed through Oja.

Roles cannot be modified by users.

Only profile information is editable.

# Security

Only the authenticated user may update their own profile.

Profile updates are logged.

# Status

Frozen