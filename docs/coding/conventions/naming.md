# Naming Conventions

Version: 1.0

Status: Frozen

# Philosophy

Names should describe purpose.

Avoid abbreviations unless universally understood.

Readable code is easier to maintain.

# Variables

camelCase

Good

productPrice

customerEmail

storeSlug

Bad

pp

data1

tmp

# Functions

camelCase

Function names begin with a verb.

Examples

createProduct()

updateOrder()

calculateTotal()

verifyPayment()

# Components

PascalCase

Examples

ProductCard

OrderTable

CustomerModal

DashboardHeader

# Interfaces

PascalCase

No "I" prefix.

Good

Product

StoreSettings

Bad

IProduct

IStore

# Types

PascalCase

Examples

OrderStatus

ProductVariant

SubscriptionPlan

# Enums

PascalCase

Values

UPPER_SNAKE_CASE

Example

enum OrderStatus

PENDING

CONFIRMED

DELIVERED

# Files

kebab-case

Examples

product-card.tsx

create-product.dto.ts

order.service.ts

payment.repository.ts

# Folders

kebab-case

Examples

product-management

customer-service

checkout

# Constants

UPPER_SNAKE_CASE

Examples

MAX_UPLOAD_SIZE

DEFAULT_PAGE_SIZE

TRIAL_DURATION_DAYS

# Database

Tables

snake_case

Columns

snake_case

Foreign Keys

entity_id

Examples

store_id

product_id

customer_id

# Environment Variables

UPPER_SNAKE_CASE

Examples

DATABASE_URL

REDIS_URL

PAYSTACK_SECRET_KEY

# API Routes

Lowercase

Plural

Examples

/products

/orders

/customers

# Rules

Names must reveal intent.

Avoid unnecessary abbreviations.

Keep terminology consistent across the project.

# Status

Frozen