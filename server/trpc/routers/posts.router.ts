import { publicProcedure, router } from '~/server/trpc/trpc'

export const postsRouter = router({
  getAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.post.findMany()
    })

})
