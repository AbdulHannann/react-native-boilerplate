export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export const parseError = (e: any) => {
  if (typeof e.response?.data?.message === 'string') {
    return e.response?.data?.message
  } else if (e?.response?.data?.message[0]) {
    return e?.response?.data?.message[0]
  } else {
    return e?.message
  }
}
