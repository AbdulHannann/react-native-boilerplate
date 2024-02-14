import { AxiosError } from 'axios'
import _ from 'lodash'

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export const parseError = (e: AxiosError) => {
  const errorMessage = _.get(e, 'response.data.message')
  if (typeof errorMessage === 'string') {
    return errorMessage
  } else if (_.isArray(errorMessage)) {
    return errorMessage[0]
  } else {
    return e.message
  }
}
