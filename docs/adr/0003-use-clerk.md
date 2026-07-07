# ADR 0003

Title

Use Clerk for Authentication

Status

Accepted

Date

July 2026

# Context

Authentication is critical infrastructure.

Building and maintaining a custom authentication system would increase complexity and security risk.

# Decision

Use Clerk for authentication.

Oja delegates

- Registration
- Login
- Password Management
- Sessions
- Email Verification

The backend manages authorization only.

# Consequences

Positive

- Faster development
- Improved security
- Reduced maintenance
- Reliable session management

Negative

- Vendor dependency
- External service required

# Alternatives Considered

Auth.js

Supabase Auth

Custom JWT authentication

# Outcome

Accepted