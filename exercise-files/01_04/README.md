This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Installation

`npm i`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# Database Setup and Management
This document provides instructions for setting up and managing the PostgreSQL database for this project using Prisma and Vercel.

1. Prerequisites
Before you begin, ensure you have the following:

- Node.js: Installed on your machine.

- Prisma CLI: The project's package.json file includes the Prisma CLI as a dependency.

- Vercel Account: With a PostgreSQL database connected to your Vercel project.

2. Setup and Database Configuration
The project connects to a remote database hosted on Vercel. The connection URL is stored in a .env file.

- Get the Database URL: Navigate to your project settings on the Vercel dashboard. Go to Settings > Environment Variables and copy the value of the PRISMA_DATABASE_URL variable.

- Create .env File: At the root of your project, create a new file named .env and add the following line, replacing the placeholder with the URL you copied:

```
== PRISMA_DATABASE_URL="<your_database_url_from_vercel>" ==
```

3. Essential Prisma Commands
These commands must be run from the root directory of your project (where package.json is located).

- npx prisma db push
This command syncs your database schema with the schema.prisma file. It's the primary way to apply changes (like adding or removing tables and columns) to your remote database.

```
npx prisma db push
```

- npx prisma generate
This command generates the Prisma Client, which is a library of code used by your Next.js application to interact with the database. You must run this command whenever you change your schema.prisma file.

```
npx prisma generate
```

- npx prisma db seed
This command populates your database with initial data. The seed script for this project is located at prisma/seed.js and loads data from placeholder-data.js.

```
npx prisma db seed
```

- npx prisma studio
This command starts a local web server with a GUI that allows you to view and manage your database data. It's a great tool for confirming that your data has been seeded correctly.

```
npx prisma studio
```

4. Running the Project
Once the database is configured and seeded, you can start the development server.

** Run the development server command: **

```
npm run dev
```

Your application will be accessible at == http://localhost:{PORT #} == The posts will be dynamically fetched from your remote Vercel database and displayed on the page.