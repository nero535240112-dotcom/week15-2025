'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addSong(formData: FormData) {
  const title = formData.get('title') as string
  const author = formData.get('author') as string

  if (!title || !author) return

  try {
    await prisma.tetoSong.create({
      data: {
        title,
        author,
      },
    })
    revalidatePath('/')
  } catch (error) {
    console.error("Gagal menambah lagu:", error)
  }
}