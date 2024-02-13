import React from 'react'
import { AppHeader } from '../../components'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ProfileProps } from './types'

export const Profile: React.FC<ProfileProps> = () => {
  const { t } = useTranslation()

  return (
    <View>
      <AppHeader title={t('Profile')} />
    </View>
  )
}
