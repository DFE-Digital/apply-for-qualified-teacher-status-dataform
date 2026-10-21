## Context

<!-- What problem does this solve, or what value does it add? -->

## What changed?

<!-- Briefly summarise the changes. -->

## Type of change
<!-- Select all that apply -->

- [ ] New model / table / view <!-- Adds a new output object, such as a new table, view, or derived dataset. -->
- [ ] Change to existing model / table / view <!-- Changes the structure, logic, grain, fields, joins, filters, or output of an existing model, table, or view. -->
- [ ] Bug fix <!-- Corrects behaviour that was producing incorrect, incomplete, duplicated, or unexpected data. -->
- [ ] Performance improvement <!-- Improves runtime, query efficiency, cost, scalability, or reduces unnecessary processing without intentionally changing the output. -->
- [ ] Refactor / cleanup <!-- Improves code structure, readability, maintainability, or removes duplication without intentionally changing the output. -->
- [ ] Metadata / documentation <!-- Adds or updates field descriptions, table metadata, README content, comments, tags, or other documentation. -->
- [ ] Test / assertion <!-- Adds or updates tests, assertions, data quality checks, validation logic, or safeguards. -->
- [ ] dfe-analytics-dataform update <!-- Updates shared Dataform package usage, configuration, helper functions, macros, dependencies, or Dataform setup. -->
- [ ] Other: <!-- Use this for changes that do not fit the categories above -->

## Notes for reviewers

<!-- Anything specific you would like reviewers to focus on, or any known trade-offs. -->

## Reviewers Checklist

### Design

- [ ] Output structure and grain are appropriate for the use case.
- [ ] Logic is implemented at the right layer of the pipeline.
- [ ] Reusable logic is not unnecessarily repeated.

### Code quality

- [ ] Code is understandable and avoids obvious anti-patterns.
- [ ] SQL is as simple as possible without changing the output.

### Metadata and documentation

- [ ] Output fields have clear, useful metadata.
- [ ] Complex or non-obvious logic is documented.

### Robustness

- [ ] Relevant tests, assertions, or safeguards are in place.
- [ ] Breaking changes are clearly flagged and versioned appropriately.
- [ ] Important assumptions, caveats, or non-obvious behaviours documented
