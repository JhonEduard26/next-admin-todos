import prisma from "@/lib/prisma"
import { saltAndHashPassword } from "@/utils/password"
import { NextResponse } from "next/server"

const TEST_EMAIL = 'test@mail.com'
const PASSWORD = '123456'

export async function GET() {
  await prisma.todo.deleteMany()
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      email: TEST_EMAIL,
      name: 'Test User',
      password: await saltAndHashPassword(PASSWORD),
      roles: ['user'],
      todos: {
        create: [
          { description: 'Learn React', completed: true },
          { description: 'Learn Next.js' },
          { description: 'Learn Prisma' },
          { description: 'Learn GraphQL' },
          { description: 'Learn TypeScript' },
        ]
      }
    }
  })

  return NextResponse.json({
    "message": "Seed executed successfully!"
  })
}