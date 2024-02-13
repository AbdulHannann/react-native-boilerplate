import { z } from 'zod'
import regex from './regex'

// Schemas
const Login = z.object({
  email: z.string().min(1, { message: 'EmailRequired' }).email({
    message: 'EmailMustValid',
  }),
  password: z.string().min(1, { message: 'PasswordRequired' }).regex(regex.PASSWORD, {
    message: 'InvalidPassword',
  }),
})

// Types
type LoginSchemaType = z.infer<typeof Login>

export type { LoginSchemaType }
export default { Login }
