'use server'


import { auth } from "@/auth"
import { comparePassword, saltAndHashPassword } from "@/utils/password"
import prisma from "@/lib/prisma"

export const getUserSessionServer = async () => {
  const session = await auth()
  const user = await prisma.user.findUnique({ where: { email: session?.user.email ?? '' } })
  return {
    email: user?.email ?? 'No email',
    id: user?.id ?? 'No id',
    image: user?.image ?? null,
    name: user?.name ?? 'No name',
  }
}

export const signInEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return null

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    const dbUser = await createUser(email, password)
    return dbUser
  }

  const isMatch = await comparePassword(password, user.password ?? '')

  if (!isMatch) return null

  return user
}

const createUser = async (email: string, password: string) => {
  const pwHash = await saltAndHashPassword(password)

  const user = await prisma.user.create({
    data: {
      email,
      password: pwHash,
      name: email.split("@")[0]
    }
  })

  return user
}
