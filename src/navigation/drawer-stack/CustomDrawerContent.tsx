import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { AppText } from '@/components'
import { TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { t } = useTranslation()
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, paddingTop: 0 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Profile')
        }}
      >
        <AppText color="primary">{t('Profile')}</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Settings')
        }}
      >
        <AppText>{t('Settings')}</AppText>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
