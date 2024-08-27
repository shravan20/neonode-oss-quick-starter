<p align="center">
  <img align="center" width="20%" src="assets/logo.png" alt="logo"/>
  <h2 align="center">Neonode Quick Starter</h2>
</p>

A production-ready, class-based Node.js/TypeScript starter project with Flexible Framework and PostgreSQL as DB, designed for modular and scalable applications.

[![Build Status](https://img.shields.io/github/actions/workflow/status/shravan20/neonode-quick-starter/ci.yml)](https://github.com/shravan20/neonode-quick-starter/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [x] [Features](#features)
- [x] [Getting Started](#getting-started)
  - Prerequisites
  - Installation
    - Configuration (Environment Variables)
- [x] [Project Structure](#project-structure)
- [ ] Usage
  - [ ]Health Check Endpoint
  - [ ]Logging
- [] Deployment
- [Contributing](#contributing)

### Features

- [ ] TypeScript: Fully typed, ensuring robust code.
- [ ] Class-based Architecture: Clean separation of concerns using classes for controllers, routers, and services.
- [ ] Middleware: Pre-configured for JSON parsing, URL encoding, and more.
- [ ] Environment Configuration with DotEnv: Stores custom constant configurations within process.env using the DotEnv package.
- [ ] API Documentation: Integrate Swagger or another API documentation tool to generate interactive API documentation automatically.
- [ ] API Versioning: Implement API versioning to ensure backward compatibility for older API clients.
- [ ] Caching: Implements caching for Node.js with support for Valkey/KeyDB.
- [ ] Routing: Separates routes into Web Routes and API Routes for better organization.
- [ ] Route Authentication Middleware: Secures Web routes with CSRF Tokens and API routes with JSON Web Tokens (JWT).
- [ ] Unit & Integration Testing: Add comprehensive testing using frameworks like Jest or Mocha for better reliability.
- [ ] Database Migration Tool: Include a database migration tool like knex or sequelize-cli to manage schema changes.
- [ ] Health Check & Monitoring Tools: Easy Integration of tools like Prometheus or Datadog for monitoring application health and performance.
- [ ] Background Queues: Implements background job processing.
- [ ] Logging Interceptor: Adds a logging interceptor using Winston for better log management.
- [ ] PostgreSQL Atomic Queries: Allows execution of atomic PostgreSQL queries on demand.
- [ ] Configurable Connection Pools: Enables customizable connection pools for backend storage systems.
- [ ] Rate Limiting: Implement a rate-limiting feature to protect against abuse by limiting the number of requests per user.
- [ ] Global Handlers: Centralized response and error handling middleware.
- [ ] Graceful Shutdown: Smooth server shutdown on termination signals.
- [ ] Multi-language Support: Add support for internationalization (i18n) to make the application available in multiple languages.
- [ ] Task Scheduler: Include a task scheduler for running scheduled background tasks (e.g., using node-cron).
- [ ] Documentation:
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
