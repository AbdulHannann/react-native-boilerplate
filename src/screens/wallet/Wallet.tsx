import React from 'react'
import { AppHeader } from '../../components'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { WalletProps } from './types'

export const Wallet: React.FC<WalletProps> = () => {
  const { t } = useTranslation()

  return (
    <View>
      <AppHeader title={t('Wallet')} />
    </View>
  )
}
