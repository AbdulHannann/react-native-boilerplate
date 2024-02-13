import { useMutation } from '@tanstack/react-query'
import { LoginSchemaType } from '@/config/schema'
import { axios, AxiosError } from '@/lib/axios'
import { parseError } from '@/utils'

export const useLoginUserAPI = () => {
  return useMutation({
    mutationFn: (data: LoginSchemaType): Promise<any> => axios.post('/api/user/login', data),
    onError: (e: AxiosError) => {
      e.message = parseError(e)
    },
    retry: false,
  })
}
