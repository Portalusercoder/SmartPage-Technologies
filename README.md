# Smart Pages Technologies

Corporate holding website for Smart Pages Technologies — Technology, Industries, and Food & Beverages.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The enquiry form posts to `/api/contact`.

- Without configuration, validated submissions are logged server-side.
- For production delivery, set `CONTACT_WEBHOOK_URL` in `.env.local` (see `.env.example`).

## Sitemap

- `/` Home
- `/about`
- `/divisions/technology` (+ ICT, Security, Power)
- `/divisions/industries` (+ Co-packing, Corrugated Boxes, Wrapping)
- `/divisions/food-beverages` (+ Cafeteria)
- `/our-work`
- `/contact`
- `/privacy-policy`
