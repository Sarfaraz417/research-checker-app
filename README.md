# Research Checker App

An advanced AI research paper checker + rewriter concept that provides AI detection, plagiarism analysis, and academic rewrites.

## Features

- Upload PDF, DOCX, or TXT files with drag-and-drop UX.
- AI detection and plagiarism dashboards with highlighted text.
- Smart rewrite options (simple, advanced, formal).
- Side-by-side comparison of original vs rewritten content.
- Report download entry points and recent history list.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Storage:** Local uploads folder (placeholder for cloud storage)

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

The API runs on `http://localhost:4000`.

## API

- `GET /health` — service health check.
- `POST /analyze` — upload a file to extract text and return mock AI/plagiarism results.

## Notes

- AI detection, plagiarism matching, and rewrite services are stubbed for now.
- The backend automatically deletes uploaded files after processing.
