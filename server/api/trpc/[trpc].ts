import { createNuxtApiHandler } from 'trpc-nuxt'
import { router } from '~/server/trpc/trpc'
import { helloRouter } from '~~/server/trpc/routers/hello.router'
import { postsRouter } from '~~/server/trpc/routers/posts.router'

import { createContext } from '~/server/trpc/context'

export const appRouter = router({
  hello: helloRouter,
  posts: postsRouter
})

export type AppRouter = typeof appRouter

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  onError ({ error }) {
    console.error(error)
  }
})
