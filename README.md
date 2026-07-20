# Careerly

Monorepo with a **React (Vite)** frontend and a **Node.js (Express)** backend.

## Structure

```
careerly/
  frontend/          React + TypeScript + Vite
    src/
      sections/      Each homepage section in its own folder
      pages/         Each page in its own folder
      components/    Shared UI (layout, Hero3D, etc.)
      api/           API client for the Node backend
  backend/           Express API
    src/
      routes/
      controllers/
      data/
```

## Setup

```bash
npm run install:all
```

## Run

Terminal 1 — API (port 5000):

```bash
npm run dev:backend
```

Terminal 2 — React app (port 5173):

```bash
npm run dev:frontend
```

Frontend proxies `/api` to the backend during development.

## API

- `GET /api/health`
- `GET /api/site/home`
- `GET /api/site/company`
- `POST /api/contact`
