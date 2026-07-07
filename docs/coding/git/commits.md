# Git Standards

Version: 1.0

Status: Frozen

# Philosophy

Git history should explain the evolution of Oja.

Commits should represent complete units of work.

# Branches

main

Production.

develop

Integration.

feature/*

New features.

fix/*

Bug fixes.

docs/*

Documentation.

refactor/*

Refactoring.

# Commit Format

type(scope): description

Examples

feat(products): add product creation

fix(checkout): resolve payment verification bug

docs(api): complete REST API specification

refactor(database): simplify repository layer

style(ui): improve spacing consistency

test(orders): add checkout integration tests

# Commit Rules

One logical change per commit.

Commit working code only.

Avoid large unrelated commits.

# Pull Requests

Every pull request must

Compile successfully.

Pass linting.

Pass tests.

Match documentation.

Receive review.

# Protected Branches

Direct commits to main are prohibited.

Production releases originate from main only.

# Rules

Keep commit messages concise.

Use imperative tense.

Reference issues where applicable.

# Status

Frozen