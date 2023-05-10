import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

export function createContext (_event: H3Event) {
  return { prisma: _event.context.prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
