# MarkWise Academy

MarkWise is a GCSE and IGCSE revision web app for exam-style practice, markscheme feedback, classroom tasks, flashcards, progress tracking, and AI-supported study.

## Features

- Syllabus-aware subject and topic browsing
- Practice questions with markscheme-style feedback
- Mini paper mode
- AI tutor and study notebook tools
- Flashcards and exam keywords
- Progress dashboard and revision insights
- Classroom Hub for teacher-created classes and assignments
- Local mock auth with Firebase-ready structure
- Theme support and responsive dashboard UI

## Tech Stack

- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS
- LocalStorage prototype data
- Firebase SDK installed for auth/profile migration
- OpenAI API support through `.env.local`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs at:

```txt
http://localhost:3001
```

Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file in the project root.

Common keys used by the app:

```bash
OPENAI_API_KEY=your_openai_key_here
```

Do not commit `.env.local`. It is ignored by `.gitignore`.

## Project Structure

```txt
src/
  data/       Question banks, syllabus config, topics, keywords
  lib/        Auth, classroom storage, marking, theme, API helpers
  routes/     TanStack route pages
  components/ Shared UI components
```

## Classroom Hub

Classroom data is stored locally for now using:

```txt
markwise:classroom-hub:v1
```

Teachers can create classes and assignments. Student submissions are currently local/mock data, ready to be replaced with Firebase or another backend later.

## WakaTime / Hackatime

This project uses:

```txt
.wakatime-project
```

with the project name:

```txt
markwise-academy
```

## Notes

Question data should stay in separate files under `src/data`. Avoid hardcoding questions or subject availability directly inside route pages.
