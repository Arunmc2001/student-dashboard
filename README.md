# Frontend Intern Challenge — Student Dashboard

## Stack
- **Next.js (App Router)**
- **Supabase** (Postgres)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Getting started
1. Install dependencies
   - `npm install`
2. Create `.env.local` based on `.env.example`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
3. Run the dev server
   - `npm run dev`

Open `http://localhost:3000`, then go to `/dashboard`.

## Submission
1. Push this repo to a public GitHub repository.
2. Deploy the app on Vercel using the GitHub repo import flow.
3. Configure Vercel project environment variables using the same keys from `.env.example`:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Do NOT commit any actual `.env.local` or secret values.

## Supabase table
Create a table named `courses`:
- `id` uuid primary key
- `title` text
- `progress` integer
- `icon_name` text (Lucide icon name, e.g. `Rocket`, `Code2`, `Database`)
- `created_at` timestamp (default now())

Seed 3–4 rows.

## Architecture notes
- **Server Components for data fetching**: `src/components/dashboard/DashboardGridRsc.tsx` fetches courses on the server and renders a client grid.
- **Client components for animation**: `src/components/dashboard/DashboardGrid.tsx` and tiles use Framer Motion for staggered entrance, hover springs, and nav `layoutId` highlights.
- **Zero layout shift**: Animations are limited to **transform/opacity** on tiles; hover elevation is `scale` + `translateY`.

