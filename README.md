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

server/
├── constants.js          # App-wide constants (roles, enums, etc.)
├── controllers/          # Handle HTTP requests and route logic
│   └── notes.controller.js
├── services/             # Business logic for each feature
│   ├── notes.service.js
│   └── DAS/              # Data Access Services (optional data layer abstraction)
├── routes/               # Express routes (REST API endpoints)
│   └── notes.routes.js
├── middlewares/          # Custom middleware (auth, logging, error handling)
│   └── auth.middleware.js
├── models/               # Mongoose schemas/models for MongoDB
│   └── note.model.js
├── utils/                # Utility/helper functions (e.g., logger, validators)
│   └── logger.js
├── config/               # DB connection and environment config
│   └── db.js
├── app.js                # Initializes Express app, middleware, routes
└── server.js             # Starts the Express server

