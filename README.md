<p align="center">
  <img align="center" width="20%" src="assets/logo.png" alt="logo"/>
  <h2 align="center">Neonode Quick Starter</h2>
</p>

A production-ready, class-based Node.js/TypeScript starter project with Flexible Framework and PostgreSQL as DB, designed for modular and scalable applications.

[![Build Status](https://img.shields.io/github/actions/workflow/status/shravan20/neonode-quick-starter/ci.yml)](https://github.com/shravan20/neonode-quick-starter/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [x] [**Features**](#features)
- [x] [**Getting Started**](#getting-started)
  - Prerequisites
  - Installation
    - Configuration (Environment Variables)
- [x] [**Project Structure**](#project-structure)
- [ ] [**Usage**]()
  - Health Check Endpoint
  - Logging
- [ ] **Deployment**
- [x] [**Contributing**](#contributing)

### Features

- [x] **TypeScript**: Fully typed for stronger code reliability.
- [x] **Class-based Architecture**: Organized using classes for controllers, routers, and services.
- [x] **Middleware**: Pre-configured for JSON parsing, URL encoding, etc.
- [x] **Environment Config**: Use DotEnv for storing custom configurations in process.env.
- [ ] **API Documentation**: Integrates with Swagger or similar tools for auto-generated docs.
- [ ] **API Versioning**: Supports versioning for backward compatibility.
- [ ] **Caching**: Implements caching with Valkey/KeyDB support.
- [ ] **Routing**: Separates Web Routes and API Routes for better organization.
- [ ] **Authentication Middleware**: Uses CSRF Tokens for Web routes, JWT for API routes.
- [ ] **Testing**: Comprehensive unit and integration testing with Jest/Mocha.
- [ ] **Database Migration**: Supports tools like Knex or Sequelize for schema management.
- [ ] **Health Monitoring**: Easy integration with tools like Prometheus/Datadog.
- [ ] **Background Queues**: Implements background job processing.
- [ ] **Logging Interceptor**: Uses Winston for enhanced log management.
- [ ] **PostgreSQL Queries**: Supports atomic PostgreSQL queries on demand.
- [ ] **Connection Pools**: Customizable backend storage connection pools.
- [ ] **Rate Limiting**: Limits requests per user to prevent abuse.
- [ ] **Global Handlers**: Centralized response and error handling.
- [ ] **Graceful Shutdown**: Ensures smooth server shutdown.
- [ ] **Multi-language Support**: Adds i18n for multiple languages.
- [ ] **Task Scheduler**: Supports scheduled tasks with node-cron.
- [ ] **Documentation**:
  - [x] README.md
  - [x] License.md
  - [x] Code of Conduct.md
  - [ ] Contributing.md
  - [ ] Architecture.md
  - [ ] Security.md
  - [ ] Deployment.md
  - [ ] Configuration.md
  - [ ] Roadmap.md
  - [ ] Support.md
  - [ ] API_docs.md
  - [ ] FAQ.md
  - [ ] Acknowledgements.md
  - [ ] Changelog.md

### Getting Started

#### Prerequisites

    - Node.js (v16.x or higher)
    - npm or yarn
    - Docker (optional, for containerization)

#### Installation

Configuration: The application uses environment variables for configuration. Create a .env file at the root of the project and add the necessary variables from `.env.template` for successful execution in dev/production env.

Steps to setup the code:

  1. Clone the repository

        ```sh
        git clone https://github.com/shravan20/neonode-quick-starter.git
        cd neonode-quick-starter
        ```

  2. Install dependencies

        ```sh
        npm install
        ```

  3. Running Locally

        ```sh
        npm run dev
        ```

        This will start the development server with hot-reloading.

  4. Running in Production

        ```sh
        npm run build && npm start
        ```

### Project Structure

```sh
📂 src
│
├── 📂 api                      # Contains the main application logic (entities and modules)
│   ├── 📂 entities             # Data models, types, and schemas (e.g., database entities, DTOs)
│   │   └── user.entity.ts    # Example: User entity schema
│   │   └── base.entity.ts    # Example: Base entity schema
│   └── 📂 modules              # Application modules, each encapsulated in its own directory
│       ├── 📂 health-check     # Health check module
│       │   ├── health-check.controller.ts  # Handles incoming requests and responses
│       │   ├── health-check.repository.ts  # Data persistence logic
│       │   ├── health-check.router.ts      # Routes definition for health check API
│       │   └── health-check.service.ts     # Business logic related to health checks
│       └── 📂 user             # User module (example)
│           ├── user.controller.ts          # Handles user-related requests
│           ├── user.repository.ts          # User data persistence
│           ├── user.router.ts              # Routes definition for user API
│           └── user.service.ts             # Business logic for user operations
├── app.ts                   # Application initialization and configuration
├── 📂 helpers                  # Utility functions and helpers
│   └── logger.ts            # Custom logger setup (e.g., Pino or Winston)
├── 📂 middlewares              # Custom middleware functions (e.g., authentication, error handling)
│   └── auth.middleware.ts    # Example: Authentication middleware
├── server.ts                # Server startup and configuration (Express.js instance)

```

### Contributing

Contributions are always welcome and encouraged! While I strive to cover as many use cases as possible. If you come across any issues or something that doesn't make sense, feel free to open an issue—I'd be happy to discuss and improve things together.

For further details, refer to [contributing.md](./contributing.md)
