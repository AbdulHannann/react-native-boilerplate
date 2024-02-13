import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false, // default: true
  },
}

export function createQueryClient() {
  return new QueryClient({ defaultOptions: queryConfig })
}
