# Prestige Oral

Arabic landing page for the Prestige Oral clinic in Témara.

## Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and replace the phone, WhatsApp number, social links, and Meta Pixel ID.

Prices, hours, and contact details live in `src/config/site.ts`.

The before/after pair in that file is illustrative. Replace it with clinic-approved photos of the same patient before publishing ads, then set `gallery.illustrative` to `false`.
