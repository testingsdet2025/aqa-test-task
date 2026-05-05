##  QA Automation Framework (Playwright + TypeScript)
##  Overview

This project contains UI and API automated test suites built using Playwright with TypeScript. It follows scalable design patterns like Page Object Model (POM) and API abstraction layers.

##  Project Structure

* `tests/ui` → UI test cases
* `tests/api` → API test cases
* `pages` → Page Object Models
* `api` → API client & endpoints
* `fixtures` → shared test setup
* `utils` → helper utilities
* `test-data` → test input data

## Tech Stack

* TypeScript
* Playwright (latest stable)

##  How to Run Tests

### Install dependencies

```
npm install
npx playwright install
```

### Run all tests

```
npx playwright test
```

### Run UI tests

```
npx playwright test tests/ui
```

### Run API tests

```
npx playwright test tests/api
```
## Framework Design
### UI Testing

* Uses Page Object Model (POM)
* Reusable page classes
* Separation of test logic and UI actions

### API Testing

* Centralized API client
* Endpoint management
* Reusable request methods

### Utilities

* Config-driven execution
* Reusable helpers and logging
  
## Scope / Checklist

### UI Testing

* Login functionality
* Navigation flows
* Validation messages

### API Testing

* GET/POST endpoints
* Response validation
* Status code checks

##  Features

* Scalable structure
* Supports UI + API
* Easy maintenance
* Reusable components
* CI/CD ready

## Design Decisions

* POM for UI → improves maintainability
* API abstraction → reduces duplication
* TypeScript → type safety
* Playwright → fast and reliable automation

##  Future Enhancements

* CI/CD integration (GitHub Actions)
* Allure reporting
* Environment configs (dev/stage/prod)
* Parallel execution optimization

