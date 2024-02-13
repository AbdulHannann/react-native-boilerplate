import React from 'react'
import { AppHeader } from '../../components'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { HomeProps } from './types'

export const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation()

  return (
    <View>
      <AppHeader title={t('Home')} />
    </View>
  )
}
