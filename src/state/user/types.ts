export interface IUser {
  id: string
  email: string
  name: string
}

export interface UserState {
  user: IUser | null
  token: string | null
}
