import React from 'react'
import { AppHeader } from '../../components'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { SettingsProps } from './types'

export const Settings: React.FC<SettingsProps> = () => {
  const { t } = useTranslation()

  return (
    <View>
      <AppHeader title={t('Settings')} />
    </View>
  )
}
