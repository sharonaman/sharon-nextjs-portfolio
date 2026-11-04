# Sharon Aman — DevOps Portfolio

A cinematic, responsive Next.js portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## Features

- Interactive 3D-style hero with mouse-responsive perspective.
- Animated sections and project cards.
- CV download.
- Experience, skills, education and certification sections.
- Project case studies based on the supplied CV.
- Contact form that opens a pre-addressed email draft.
- GitHub profile link.
- Responsive mobile navigation.

## Requirements

- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a GitHub repository, for example `sharon-aman-portfolio`.
2. Extract this project ZIP.
3. Push the project contents to the repository.
4. Import the repository in Vercel.
5. Deploy using the default Next.js settings.

## Update your details

Edit `lib/portfolio-data.ts` to update your profile, experience, skills, project descriptions and contact details.

The portrait is stored at `public/images/sharon-aman-ai-portrait.png`.
The CV is stored at `public/documents/Sharonaman_Cloud_DevOps.pdf`.

## Contact form

The form uses a `mailto:` flow and opens the visitor's default email application with the message prefilled. It does not silently send or store messages. For server-side delivery, connect an email provider and implement a protected API route.

## Accuracy note

Project and experience descriptions are based on the CV supplied for this portfolio. Review dates, wording and technical details before publishing.
