import { redis } from '@/lib/redis'
import { Ratelimit } from '@upstash/ratelimit'


export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(4, '10 s'),
  prefix: '@upstash/ratelimit',
})