# 

Production-ready Next.js 14 + TypeScript + TailwindCSS + Redux Toolkit app.

## Folder Structure Frontend
- `src/app/`: App router entry (layouts, pages)
- `src/components/`: Shared presentational components
- `src/modules/`: Feature/domain code (features, local slices, components)
- `src/lib/`: App-wide libraries (store setup, API, etc.)
- `src/styles/`: Global and Tailwind CSS
- `src/utils/`: Utilities and helpers
- `src/types/`: Shared TypeScript types
- `src/store/`: Redux store config and hooks

## Folder Structure Backend (Node.js + Express + MongoDB + JavaScript)

- `server/constants.js`: App-wide constants (roles, enums, etc.)
- `server/controllers/` – Handle HTTP requests and route logic
- `server/services/` – Business logic for each feature
- `server/services/DAS/` – Data Access Services (optional data layer abstraction)
- `server/routes/` – Express route definitions (REST API endpoints)
- `server/middlewares/` – Custom Express middleware (auth, logging, error handling)
- `server/models/` – Mongoose schemas and models
- `server/utils/` – Utility/helper functions (e.g., logger, validators)
- `server/config/` – MongoDB connection and environment configuration
- `server/app.js` – Initializes Express app, middleware, and routes
- `server/server.js` – Starts the Express server
