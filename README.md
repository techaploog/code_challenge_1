# Code Challenge 1

## Technical Stack

- **Frontend**: [Next.js](https://nextjs.org/) with [TailwindCSS](https://tailwindcss.com/)
- **Backend**: [NestJS](https://nestjs.com/), [Drizzle ORM](https://orm.drizzle.team/), [PostgreSQL](https://www.postgresql.org/)

## How to Run the Project

Ensure you have `Docker` and `pnpm` installed on your system. Then, run the following command in the project directory:

### How to install pnpm

```bash
npm -g pnpm
```

### Install all dependencies

```bash
pnpm install
```

### Run the project.

```bash
docker compose up --build

pnpm db:migrate # run migrate only the 1st run

pnpm db:seed # run seed only the 1st run
```

## Notices

This project is for a code challenge and, as such, environment variables are exposed to the public for demonstration purposes. In a real-world project, sensitive variables should never be exposed.
