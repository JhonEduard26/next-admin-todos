# Next 15
## Admin Todos

> [!NOTE]
> Development

1. Up database
```
  docker compose up -d
```

2. Setup env vars

3. Run command `bun install`

4. Run command `bun run dev`

> [!CAUTION]
> Before run seed endpoint, you should run:
> `bunx prisma migrate dev`
>
> `bunx prisma generate`

5. Run seed to create local database

> [!IMPORTANT]
> To seed database: `GET(localhost:3000/api/seed)`

> [!NOTE]
> Prisma commands
> `bunx prisma init`
>
> `bunx prisma migrate dev`
>
> `bunx prisma generate`
> 
> `bunx prisma db pull`
> 
> `bunx prisma db push`
