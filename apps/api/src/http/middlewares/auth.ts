import { FastifyInstance, FastifyRequest } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

import { UnauthorizedError } from '@/http/routes/_errors/unauthorized-error'

export const auth = fastifyPlugin(async function auth(app: FastifyInstance) {
  app.addHook('preHandler', async (request: FastifyRequest) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub } = await request.jwtVerify<{ sub: string }>()
        return sub
      } catch (error) {
        throw new UnauthorizedError('Invalid auth token')
      }
    }
  })
})
