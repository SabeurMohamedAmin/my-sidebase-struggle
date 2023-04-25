import { getServerSession } from '#auth'

const users = [
  {
    id: 1,
    email: 'cristiancasallas998@gmail.com',
    birthday: '1990-01-01'
  },
  {
    id: 2,
    email: 'test@gmail.com',
    birthday: '1990-01-01'
  }
]
export default eventHandler(async (event) => {
  const session = await getServerSession(event)

  if (!session) {
    return { status: 'unauthenticated' }
  }

  const user = users.find(user => user.email === session.user?.email)

  return {
    email: user?.email,
    birthday: user?.birthday
  }
})
