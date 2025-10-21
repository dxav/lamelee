# AI Coding Assistant Experience Platform

This is a Next.js 14 (Pages router) + Prisma + NextAuth.js application implementing an AI Coding Assistant Experience sharing platform.

## Features

- Share AI assistant usage experiences (experiences, prompts, reactions, ratings)
- GitHub OAuth login via NextAuth.js
- PostgreSQL with Prisma ORM (migrations in `prisma/migrations`)
- Contract & integration test scaffolding (Jest)
- Soft delete for Users & Experiences
- Data retention jobs (cleanup & hard delete)

## Getting Started

1. Clone repository and checkout branch `003-gpt5-implementation`.
2. Copy environment file:
```bash
cp .env.example .env
```
Edit `.env` with valid values (DATABASE_URL, NEXTAUTH_SECRET, GitHub OAuth credentials).
3. Start PostgreSQL (option A: docker compose):
```bash
docker compose up -d postgres
```
Option B: local Postgres ensure it matches DATABASE_URL.
4. Install dependencies:
```bash
npm install
```
5. Run Prisma migrations:
```bash
npx prisma migrate dev
```
(Generates schema & client.)
6. Start development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 to access the app.

## GitHub OAuth Setup
Create an OAuth App at https://github.com/settings/developers with callback URL:
```
http://localhost:3000/api/auth/callback/github
```
Set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env`.

## Running Tests
Contract & integration test placeholders exist under `tests/`.
Run all tests:
```bash
npm test
```
(They may fail until full implementations & adjustments.)

## Prisma & Database
- Schema: `prisma/schema.prisma`
- Migrations: `prisma/migrations/`
- Inspect data: `npx prisma studio`

## Data Retention Jobs
Example manual run in a script / REPL:
```ts
import { runRetentionSweep, runHardDelete } from './src/lib/cleanup';
await runRetentionSweep();
await runHardDelete();
```
Schedule externally (cron / serverless).

Pages are in the `src/pages/` directory (feed, create, experiences detail, profile, login).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Required in `.env`:
- DATABASE_URL
- NEXTAUTH_URL (http://localhost:3000 for dev)
- NEXTAUTH_SECRET (generate: `openssl rand -base64 32`)
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
