import prisma from "@/lib/prisma"
import { comparePassword, saltAndHashPassword } from "@/utils/password"

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
