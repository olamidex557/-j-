# Users Table

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Users table stores every authenticated user of Oja.

Authentication is managed by Clerk.

This table stores application-specific user information and acts as the root entity for merchant ownership.

Every Store belongs to one User.

A User may own multiple Stores in future versions.

# Table Name

users

# Description

The Users table does not store passwords.

Passwords, sessions and authentication are managed by Clerk.

The Users table stores only the information required by Oja.

# Columns

## id

Type

UUID

Required

Yes

Constraints

Primary Key

Default

Generated UUID

Description

Unique identifier for the user.

## clerk_user_id

Type

String

Required

Yes

Unique

Yes

Description

Unique identifier received from Clerk.

This is the bridge between Clerk and Oja.

## first_name

Type

String

Required

Yes

Maximum Length

100

Description

User's first name.

## last_name

Type

String

Required

Yes

Maximum Length

100

Description

User's last name.

## email

Type

String

Required

Yes

Unique

Yes

Description

Primary email address.

## phone_number

Type

String

Required

No

Description

Primary contact number.

## avatar_url

Type

String

Required

No

Description

Profile image URL.

## role

Type

Enum

Required

Yes

Values

MERCHANT

ADMIN

Default

MERCHANT

Description

Determines platform permissions.

## is_active

Type

Boolean

Required

Yes

Default

true

Description

Determines whether the account can access Oja.

## last_login_at

Type

Timestamp

Required

No

Description

Last successful login.

## created_at

Type

Timestamp

Required

Yes

Default

Current Timestamp

Description

Record creation time.

## updated_at

Type

Timestamp

Required

Yes

Automatically Updated

Yes

Description

Last update time.

# Relationships

One User

↓

Many Stores

Future

One User

↓

Many Staff Accounts

Future

One User

↓

Many Audit Logs

# Constraints

Primary Key

id

Unique

clerk_user_id

Unique

email

Role must be one of

MERCHANT

ADMIN

# Indexes

Primary Key

id

Unique Index

clerk_user_id

Unique Index

email

Index

role

Index

created_at

# Business Rules

A user cannot exist without a Clerk account.

Only authenticated users can own stores.

Admin users cannot own merchant stores by default.

Users cannot modify their role.

Only platform administrators may change roles.

Soft deletion is preferred over permanent deletion.

# Security Rules

Passwords are never stored.

Authentication is delegated entirely to Clerk.

Authorization is handled by the backend.

Personally identifiable information must never be exposed unnecessarily.

# Future Expansion

Additional profile fields

Preferred language

Timezone

Notification preferences

Two-factor authentication status

Multiple organizations

Staff accounts

# Referenced By

stores

audit_logs (future)

notifications (future)

subscriptions

# Status

Frozen

This specification governs the Users table throughout the Oja project.