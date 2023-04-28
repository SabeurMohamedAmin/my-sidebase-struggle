import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import TwitchProvider from 'next-auth/providers/twitch'
import { NuxtAuthHandler } from '#auth'
import { users } from '~~/db'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login'
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = !!user

      if (isSignIn) {
        const me = users.find(u => u.email === user.email)
        token.subscribed = me?.subscribed
      }
      return await Promise.resolve(token)
    },
    session: async ({ session, token }) => {
      const me = users.find(u => u.email === session?.user?.email);
      (session as any).subscribed = me?.subscribed
      return await Promise.resolve(session)
    }
  },
  // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
  secret: process.env.AUTH_SECRET,
  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    TwitchProvider.default({
      clientId: runtimeConfig.public.TWITCH_CLIENT_ID,
      clientSecret: runtimeConfig.TWITCH_CLIENT_SECRET
    }),

    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      authorize (credentials: any) {
        const user = {
          email: 'test@gmail.com',
          password: 'password'
        }
        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user
        }
      }

    })

  ]

})
