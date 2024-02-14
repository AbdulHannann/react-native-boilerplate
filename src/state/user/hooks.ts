import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '..'
import { setToken, setUser } from './actions'
import { IUser } from './types'
import { decryptData } from '../../config/crypto'

export function useUser(): {
  onSetUser: (user: IUser | null) => void
  user: IUser | null
} {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState, AppState['user']>(s => s.user)

  const onSetUser = useCallback(
    (user: IUser | null) => {
      dispatch(setUser(user))
    },
    [dispatch]
  )

  return { onSetUser, user: state.user }
}

export function useJwtToken(): {
  onSetToken: (token: string) => void
  token: string | null
  loading: boolean
} {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState, AppState['user']>(s => s.user)
  const [jwtToken, setJwtToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const onSetToken = useCallback(
    (token: string) => {
      dispatch(setToken(token))
    },
    [dispatch]
  )

  useEffect(() => {
    ;(async () => {
      if (state.token) {
        setLoading(true)
        setJwtToken(await decryptData(state.token!))
        setLoading(false)
      } else {
        setLoading(false)
      }
    })()
  }, [state.token])

  return { onSetToken, token: jwtToken, loading }
}
