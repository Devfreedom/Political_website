# Progressive Nigeria Party (PNP)

A premium, editorial-style public website prototype for the Progressive Nigeria Party. The project presents PNP's policy priorities, manifesto principles, leadership, news, events, and ways to get involved.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7
- ESLint

## Project structure

```text
src/
├── assets/                 # PNP logo and leadership portraits
├── componentss/            # Reusable public-site UI components
├── data/                   # Static leadership, news, event, FAQ and policy data
├── pages/
│   └── public-pages/       # Public routes and detail pages
├── App.jsx                 # Route definitions
├── index.css               # Tailwind theme tokens and global styles
└── main.jsx                # React and BrowserRouter entry point
```

`componentss` and `public-pages` are the current repository directory names. They are retained to avoid an unnecessary structural refactor during the public-frontend stabilization phase.

## Available routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about`, `/policies`, `/manifesto`, `/structure` | Party information |
| `/leadership`, `/leadership/:slug` | Leadership listing and biographies |
| `/news`, `/news/:slug` | News listing and prototype article details |
| `/events`, `/events/:slug` | Event listing and prototype event details |
| `/join`, `/login` | Membership and login prototypes |
| `/volunteer`, `/donate`, `/register` | Public placeholders for future workflows |
| `/password-reset`, `/manifesto/full` | Honest placeholder pages for unavailable features |

## Run locally

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run lint
npm run build
npm run preview
```

## Frontend-only status and limitations

This is currently a frontend-only prototype.

- There is no backend, database, API integration, authentication, or payment processing.
- Login, membership registration, and newsletter signup do not persist data and state this clearly in the UI.
- News and event detail pages use static prototype data; there is no CMS or event-registration workflow.
- Volunteer, donation, voter-registration, password-reset, and full-manifesto workflows are placeholders.
- Member and admin portals have not been started.
