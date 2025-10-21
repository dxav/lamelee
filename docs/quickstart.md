# Quickstart Guide

## Goal
Share AI assistant experiences, prompts, and community interactions.

## Steps
1. Login via GitHub (/login).
2. Create an experience (/create) with a prompt.
3. View feed (/feed) and filter using query params (future enhancement).
4. Open an experience detail page (/experiences/:id) to view prompts and react.
5. Rate a prompt via POST /api/prompts/:id/ratings.
6. Comment on experiences via POST /api/experiences/:id/comments.
7. Visit user profile (/profile/:id) to see their experiences.

## Success Criteria
- Experience created and visible in feed.
- Prompt stored and retrievable.
- Reaction endpoint records reaction (unique constraint enforced).
- Rating endpoint updates average rating.
- User profile shows counts.

## Troubleshooting
- Ensure database running (docker compose up -d postgres).
- Run migrations (npx prisma migrate dev).
- For empty feed create at least one experience.
