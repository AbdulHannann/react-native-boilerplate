import { AES, enc } from 'react-native-crypto-js'
import BuildConfig from 'react-native-build-config'

export const encryptData = async (data: string) => AES.encrypt(data, BuildConfig?.ENCRYPTION_KEY).toString()

export const decryptData = async (cipherData: string) =>
  AES.decrypt(cipherData, BuildConfig?.ENCRYPTION_KEY).toString(enc.Utf8)
