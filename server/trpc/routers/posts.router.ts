/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

import { z } from 'zod'
import { logProcedure, publicProcedure, router } from '~/server/trpc/trpc'

export const postsRouter = router({
  getAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.post.findMany
    })

})

