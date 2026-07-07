# Forms

Version: 1.0

Status: Frozen

# Philosophy

Forms are the primary method for data entry in Oja.

Forms should be easy to complete, difficult to misuse, and forgiving of mistakes.

Reduce cognitive load by presenting only the information required for the current task.

# Form Structure

Every form follows the same structure.

Page Title

↓

Description (Optional)

↓

Form Sections

↓

Actions

# Form Sections

Large forms should be divided into logical sections.

Example

Product Information

↓

Pricing

↓

Inventory

↓

Media

↓

Variants

Avoid presenting long, uninterrupted forms.

# Labels

Every field requires a visible label.

Labels remain visible after input.

Do not rely on placeholders.

# Required Fields

Required fields display

*

Validation occurs before submission.

# Validation

Validation occurs

Immediately for obvious errors.

On blur for field validation.

On submit for complete validation.

Validation messages explain

What happened.

How to fix it.

Good

Price must be greater than ₦0.

Bad

Invalid value.

# Save Behaviour

Primary button

Save Changes

Secondary button

Cancel

Buttons remain visible on long forms where appropriate.

# Unsaved Changes

Warn users before leaving a page with unsaved changes.

# Multi-Step Forms

Used only when necessary.

Display

Current Step

Total Steps

Progress Indicator

Examples

Merchant Onboarding

Store Setup

# File Upload

Display

Thumbnail

Progress

File Size

Remove Button

Retry Option

# Auto Save

Not included in MVP.

Manual saving only.

# Accessibility

Every field

Has a label.

Supports keyboard navigation.

Provides visible focus.

Associates validation messages correctly.

# Rules

Never exceed one primary action.

Avoid unnecessary required fields.

Group related information together.

Use progressive disclosure for advanced settings.

# Status

Frozen