import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const prefix = '/api'
  const url = new URL(prefix.concat(path), baseUrl)

  return fetch(url, init)
}
