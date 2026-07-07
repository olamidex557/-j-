# Subscriptions API

Version: 1.0

Status: Frozen

Last Updated: July 2026

# Purpose

The Subscriptions API manages merchant subscriptions.

Customer payments are not managed here.

This API only handles Oja subscription plans.

# Base Route

/api/v1/subscription

# Endpoints

## Get Current Subscription

GET /api/v1/subscription

Authentication

Required

Description

Returns the merchant's current subscription.

Response

200 OK

---

## Upgrade Subscription

POST /api/v1/subscription/upgrade

Authentication

Required

Description

Initiates subscription payment.

Request

{
    "plan": "PRO",
    "billingCycle": "MONTHLY"
}

Response

201 Created

---

## Verify Subscription Payment

POST /api/v1/subscription/verify

Authentication

Required

Description

Verifies successful payment with Paystack.

Response

200 OK

---

## Cancel Subscription

POST /api/v1/subscription/cancel

Authentication

Required

Description

Cancels automatic renewal.

Current subscription remains active until expiration.

Response

200 OK

# Validation

Plan

TRIAL

PRO

Billing Cycle

MONTHLY

YEARLY

# Errors

400

Validation Failed

401

Unauthenticated

404

Subscription Not Found

422

Payment Verification Failed

# Business Rules

Every Store starts on Trial.

Only one active subscription exists per Store.

Expired subscriptions disable dashboard access.

Cancelled subscriptions remain active until expiry.

# Security

Only Store Owners may manage subscriptions.

Subscription status changes occur only after verified payment.

# Status

Frozen